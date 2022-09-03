// 349. Intersection of Two Arrays

export default function func(nums1: number[], nums2: number[]): number[] {
  const hashTable: Map<number, boolean> = new Map();
  for( let num of nums1){
    hashTable.set(num,true);
  }
  const resultSet = new Set<number>() ;
  for ( let num2 of nums2){
    if(hashTable.has(num2)){
      resultSet.add(num2)
    }
  }
  return [...resultSet.values()];
}
