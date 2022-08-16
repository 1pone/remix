export const REGION_INTERNATIONAL = "international";
export const REGION_DOMESTIC = "domestic";
export type RegionType =
  | typeof REGION_INTERNATIONAL
  | typeof REGION_INTERNATIONAL;
export const REGION = {
  international: REGION_INTERNATIONAL,
  domestic: REGION_DOMESTIC,
};
