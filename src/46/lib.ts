// 46. Permutations
export default function func(nums: number[]): number[][] {
  // const result: number[][] = [];
  // bkTrack(nums.length, nums, 0);
  // return result;
  //
  // function bkTrack(n: number, nums: number[], first: number) {
  //
  //   if (first === n) {
  //     return result.push(nums.slice());
  //   }
  //
  //   for (let i = first; i < n; i++) {
  //     [nums[first], nums[i]] = [nums[i], nums[first]];
  //     bkTrack(n, nums, first + 1);
  //     [nums[first], nums[i]] = [nums[i], nums[first]];
  //   }
  // }

  let result: number[][] = [];
  let visited: boolean[] = new Array(nums.length).fill(false);

  const dfs = (cur: number[]) => {
    if (cur.length == nums.length) {
      result.push([...cur]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        cur.push(nums[i]);
        dfs(cur);
        cur.pop();
        visited[i] = false;
      }
    }
  };

  dfs([]);

  return result;
}
