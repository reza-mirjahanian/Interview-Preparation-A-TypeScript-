// 1. Two Sum

export default function func(nums: number[], target: number): number[]  {
    let table = new Map()
    for (let i = 0; i < nums.length; i++) {
        table.set(nums[i], i)
    }
    for (let i = 0; i < nums.length; i++) {
        let sub = target - nums[i]
        if (table.has(sub) && table.get(sub) !== i) {
            return [i, table.get(sub)];
        }
    }
    throw new Error("No two sum solution")
}
