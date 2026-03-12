/** Unsplash image URLs for SpikeAI backgrounds and position cards. Use these IDs with https://images.unsplash.com/photo-{id}?w={w}&q=80 */
export const UNSPLASH = {
  home: "1612872086440-88e527c2c87b", // indoor volleyball game action
  positions: "1558618669-60c848e3a0a4", // volleyball player diving
  outside: "1519317154672-063090268b8d", // spiking attack
  libero: "1592659762303-90481f34d087", // defensive
  middle: "1574629810360-7efbbe195018", // blocking
  setter: "1547347298-4074fc3086f0", // setter passing
  opposite: "1519317154672-063090268b8d", // attacking
} as const;

export function unsplashUrl(id: string, width = 1200) {
  return `https://images.unsplash.com/photo-${id}?w=${width}&q=80`;
}
