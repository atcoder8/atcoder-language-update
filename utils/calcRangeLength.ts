/**
 * 右半開区間で表されたインデックスの範囲の長さを計算します。
 * @param range インデックスの範囲
 * @returns 範囲の長さ
 */
export default function (range: IndexRange): number {
  return range.end - range.start;
}
