const hexRgbConvert = (hex: string): string => {
  if (hex.length === 0) return '';

  const current = parseInt(hex.slice(0, 2), 16);
  return current + ', ' + hexRgbConvert(hex.slice(2));
};

export const hexToRgb = (hex: string): string => {
  if (hex[0] === '#') hex = hex.slice(1);
  if (hex.length !== 6) {
    console.error('Hex should be 6 digit long.');
    return '0, 0, 0';
  }

  return hexRgbConvert(hex).slice(0, -2);
};
