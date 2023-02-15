export const zeroPadding = (num: number, padding: number = 0): string => {
  return num.toString().padStart(padding, "0");
};
