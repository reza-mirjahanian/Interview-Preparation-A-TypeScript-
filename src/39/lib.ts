// 39. Combination Sum
export default function func(candidates: number[], target: number): number[][] {
  let result: number[][] = [];
  traverse(candidates, target, [], result, 0);

  return result;
}

// If the sum equals to target, we add the current combination to the output. If the sum is larger than the target, we ignore the current combination.
// When encounter both of these two conditions, we need to return and pop out the last number we added
// because we know that we already reached the leaf in the diagram.
function traverse(
  candidates: number[],
  target: number,
  currentStack: number[],
  allStack: number[][],
  startIter: number
) {
  if (target === 0) {
    allStack.push([...currentStack]);
    return true;
  }
  if (target < 0) {
    return false;
  }

  for (let i = startIter; i < candidates.length; i++) {
    target -= candidates[i];
    currentStack.push(candidates[i]);

    traverse(candidates, target, currentStack, allStack, i);

    currentStack.pop();
    target += candidates[i];
  }

  return false;
}
