export const arrayForTextOnlyNumbers = (defaultValue, defaultIndex, length, steps, whichValue) => {
  const myArray = Array.from({ length }, (_, i) => (i === defaultIndex ? defaultValue : undefined)).map((value, index, arr) => {
    if (typeof value === 'undefined') {
      const leftIndex = arr.findIndex((val, idx) => idx < index && typeof val !== 'undefined');
      const rightIndex = arr.findIndex((val, idx) => idx > index && typeof val !== 'undefined');
      const leftValue = arr[leftIndex];
      const rightValue = arr[rightIndex];
      if (typeof leftValue === 'undefined') {
        return `${rightValue - (rightIndex - index) * steps}${whichValue}`;
      } else if (typeof rightValue === 'undefined') {
        return `${leftValue + (index - leftIndex) * steps}${whichValue}`;
      } else {
        const diff = rightValue - leftValue;
        const stepsBetweenValues = rightIndex - leftIndex;
        const incrementPerStep = diff / stepsBetweenValues;
        return `${leftValue + (index - leftIndex) * incrementPerStep}${whichValue}`;
      }
    }
    return `${value}${whichValue}`;
  });

  return myArray;
};


export const arrayForTextWithDefaultValue = (defaultVal, from, to, steps, valueToUse, name) => {
  const stepSize = (to - from) / (steps - 1);
  const accessibilityArray = new Array(steps).fill("_");
  for (let i = 0; i < steps; i++) {
    accessibilityArray[i] = (from + i * stepSize).toFixed(2) + valueToUse;
  }
  return {
    data: accessibilityArray,
    default: defaultVal,
    name: name,
  };
}