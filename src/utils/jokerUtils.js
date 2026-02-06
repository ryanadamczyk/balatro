const imageUrlByKey = import.meta.glob('../assets/images/*.png', {
  eager: true,
  import: 'default',
});

const imageUrlByStem = new Map(
  Object.entries(imageUrlByKey).map(([key, value]) => [
    key.split('/').pop().replace('.png', ''),
    value,
  ])
);

function normalizeLookupValue(value) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

const imageUrlByNormalizedStem = new Map(
  [...imageUrlByStem.entries()].map(([stem, value]) => [
    normalizeLookupValue(stem),
    value,
  ])
);

export function toJokerSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export function toJokerImageStem(name) {
  return name.split(' ').join('_');
}

function toTitleCasedImageStem(name) {
  return name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('_');
}

export function getJokerRoute(name) {
  return `/joker/${toJokerSlug(name)}`;
}

export function getCachedJokerImageUrl(name) {
  const candidateStems = [toJokerImageStem(name), toTitleCasedImageStem(name)];

  for (const stem of candidateStems) {
    const directMatch = imageUrlByStem.get(stem);
    if (directMatch) {
      return directMatch;
    }
  }

  const normalizedStem = normalizeLookupValue(toJokerImageStem(name));
  return imageUrlByNormalizedStem.get(normalizedStem) ?? null;
}

export function getJokerImageUrl(name) {
  return getCachedJokerImageUrl(name);
}
