
import { housekeepingLogos1, housekeepingLogos2, housekeepingLogos3, housekeepingLogos4 } from './housekeepingLogos';
import { deepCleaningLogos1, deepCleaningLogos2, deepCleaningLogos3 } from './deepCleaningLogos';
import { ClientLogo } from './clientLogos';

// Combine all logos into a single array
export const allClientLogos: ClientLogo[] = [
  ...housekeepingLogos1,
  ...housekeepingLogos2,
  ...housekeepingLogos3,
  ...housekeepingLogos4,
  ...deepCleaningLogos1,
  ...deepCleaningLogos2,
  ...deepCleaningLogos3,
];

// Split logos into cycles for display
export const createLogoCycles = (logos: ClientLogo[], cycleSize: number) => {
  const cycles: ClientLogo[][] = [];
  for (let i = 0; i < logos.length; i += cycleSize) {
    cycles.push(logos.slice(i, i + cycleSize));
  }
  return cycles;
};
