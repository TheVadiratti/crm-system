export default function getMedianNumberFromArray(values: number[]): number {
  if (values.length === 0) {
    return 0;
  }

  // Sorting values, preventing original array
  // from being mutated.
  const sortedValues = [...values].sort((a, b) => a - b);

  const half = Math.floor(sortedValues.length / 2);

  return sortedValues.length % 2
    ? sortedValues[half]
    : (sortedValues[half - 1] + sortedValues[half]) / 2;
}
