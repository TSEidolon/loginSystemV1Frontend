export const calculateSizes = (isSmall, isMedium, isLarge) => {
  return {
    sphereScale: isSmall ? 1 : isMedium ? 1.3 : 1.5,
    warriorScale: isSmall ? 0.8 : isMedium ? 0.9 : 1.1,
    hopperScale: isSmall ? 0.8 : isMedium ? 0.9 : 1,
  }
};