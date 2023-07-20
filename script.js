function findLongestDistance(blocks) {
  const n = blocks.length;
  let maxDistance = 0;

  for (let i = 0; i < n; i++) {
    let j = i;
    let k = i;

    // Find the farthest block where the second frog can jump
    while (k < n - 1 && blocks[k + 1] >= blocks[k]) {
      k++;
    }

    // Find the farthest block where the first frog can jump
    while (j > 0 && blocks[j - 1] >= blocks[j]) {
      j--;
    }

    // Calculate the distance between the two farthest blocks
    const distance = k - j + 1;

    // Update the maximum distance
    maxDistance = Math.max(maxDistance, distance);
  }

  return maxDistance;
}

// Example usage:
const blocks1 = [2, 6, 8, 5];
const longestDistance1 = findLongestDistance(blocks1);
console.log("Longest Distance (blocks1):", longestDistance1); // Output: 3

const blocks2 = [1, 5, 5, 2, 6];
const longestDistance2 = findLongestDistance(blocks2);
console.log("Longest Distance (blocks2):", longestDistance2); // Output: 4
