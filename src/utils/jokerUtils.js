const imageUrlByKey = import.meta.glob('../assets/images/*.png', {
  eager: true,
  import: 'default',
});

export function toJokerSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export function toJokerImageStem(name) {
  return name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('_');
}

export function getJokerRoute(name) {
  return `/joker/${toJokerSlug(name)}`;
}

export function getCachedJokerImageUrl(name) {
  const imageKey = `../assets/images/${toJokerImageStem(name)}.png`;
  return imageUrlByKey[imageKey] ?? null;
}

export function getJokerImageUrl(name) {
  return getCachedJokerImageUrl(name);
}
