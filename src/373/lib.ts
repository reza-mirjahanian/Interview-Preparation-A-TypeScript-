// 373. Find K Pairs with Smallest Sums

export default function func(nums1: number[], nums2: number[], k: number): number[][] {
    const answer: number[][] = [];
    const table: number[] = new Array(nums1.length).fill(0);
    while (k) {
        let total: number = Number.POSITIVE_INFINITY, temp: number[]|null, index: number;
        temp = null;
        for (let i = 0; i < nums1.length; i++) {
            const j = table[i];
            if (j >= nums2.length) continue;
            const sum = nums1[i] + nums2[j];
            if (sum < total) {
                total = sum;
                temp = [nums1[i], nums2[j]];
                index = i;
            }
            if (j === 0) break;
        }
        if (temp) {
            answer.push(temp);
            table[index!]++;
            k--;
        } else {
            return answer;
        }
    }
    return answer;
}
