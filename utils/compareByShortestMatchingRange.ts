/** キーワードと文字列との最短一致範囲による比較を行います。 */
export default function (range1: IndexRange, range2: IndexRange) {
  const length1 = calcRangeLength(range1);
  const length2 = calcRangeLength(range2);

  // 一致する区間の長さで比較
  if (length1 !== length2) {
    return length1 - length2;
  }

  // 一致する区間の開始インデックスで比較
  return range1.start - range2.start;
}
