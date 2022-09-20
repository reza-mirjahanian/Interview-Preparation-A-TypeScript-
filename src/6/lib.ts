// 5. Longest Palindromic Substring
export default function longestPalindrome(s: string): string {
  let longest = '';
  let palindrome = s[0];
  for (let i = 0; i < s.length; i++) {
    palindrome = s[i];

    let k = i;
    while (s[k + 1] == s[i]) {
      palindrome += s[k + 1];
      k++;
    }

    i = k;

    let lowerIndex = i - palindrome.length,
      upperIndex = i + 1;
    while (
      lowerIndex >= 0 &&
      upperIndex < s.length &&
      s[lowerIndex] === s[upperIndex]
    ) {
      palindrome = s[lowerIndex] + palindrome + s[upperIndex];
      lowerIndex--;
      upperIndex++;
    }

    if (palindrome.length > longest.length) {
      longest = palindrome;
    }
  }

  return longest;
}
