/** 言語をキーワードとの一致度で比較します。 */
export default function (
  language1: LanguageInfo,
  language2: LanguageInfo,
  keyword: string
) {
  // キーワードが入力されていない場合は言語IDにより比較
  if (keyword === "") {
    return language1.id - language2.id;
  }

  // キーワードとの最短一致範囲による比較
  const range1 = findShortestMatchingRange(language1.name, keyword)!;
  const range2 = findShortestMatchingRange(language2.name, keyword)!;
  const orderByShortestMatchingRange = compareByShortestMatchingRange(
    range1,
    range2
  );
  if (orderByShortestMatchingRange !== 0) {
    return orderByShortestMatchingRange;
  }

  // 言語名の長さで比較
  if (language1.name.length !== language2.name.length) {
    return language1.name.length - language2.name.length;
  }

  // 言語IDで比較
  return language1.id - language2.id;
}
