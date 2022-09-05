// 22. Generate Parentheses
export default function generateParenthesis(n: number): string[] {
  const answer: string[] = [];
  if (n === 0) {
    return answer;
  }
  const track: string = '';

  function backtrack(
    left: number,
    right: number,
    track: string,
    res: string[]
  ) {
    if (left > right) {
      return;
    }
    if (left === 0 && right === 0) {
      res.push(track);
      return;
    }

    if (left > 0) {
      track += '(';
      backtrack(left - 1, right, track, res);
      track = track.slice(0, -1);
    }

    if (right > 0) {
      track += ')';
      backtrack(left, right - 1, track, res);
      track.slice(0, -1);
    }
  }

  backtrack(n, n, track, answer);

  return answer;
}

// solve called for :           left : 0    right : 0
// solve called for : (         left : 1    right : 0
// solve called for : ((        left : 2    right : 0
// solve called for : (((       left : 3    right : 0
// solve called for : ((()      left : 3    right : 1
// solve called for : ((())     left : 3    right : 2
// solve called for : ((()))    left : 3    right : 3
// solve called for : (()       left : 2    right : 1
// solve called for : (()(      left : 3    right : 1
// solve called for : (()()     left : 3    right : 2
// solve called for : (()())    left : 3    right : 3
// solve called for : (())      left : 2    right : 2
// solve called for : (())(     left : 3    right : 2
// solve called for : (())()    left : 3    right : 3
// solve called for : ()        left : 1    right : 1
// solve called for : ()(       left : 2    right : 1
// solve called for : ()((      left : 3    right : 1
// solve called for : ()(()     left : 3    right : 2
// solve called for : ()(())    left : 3    right : 3
// solve called for : ()()      left : 2    right : 2
// solve called for : ()()(     left : 3    right : 2
// solve called for : ()()()    left : 3    right : 3
// answer -> ((())) (()()) (())() ()(()) ()()()
