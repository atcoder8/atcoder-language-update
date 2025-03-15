/**
 * 検索対象の文字列が検索ワードを部分文字列として含んでいるかどうかを判定します。
 * 大文字と小文字は区別しません。また、空白文字は無視されます。
 * @param text 検索対象の文字列
 * @param keyword 検索ワード
 */
export default function (text: string, keyword: string): boolean {
  const normalizedText = text.toLowerCase().replaceAll(/\s/g, "");
  const normalizedKeyword = keyword.toLowerCase().replaceAll(/\s/g, "");

  if (keyword.length === 0) {
    return true;
  }

  if (text.length < keyword.length) {
    return false;
  }

  let currentPosition = 0;
  for (const ch of normalizedKeyword) {
    const matchedPosition = normalizedText.indexOf(ch, currentPosition);
    if (matchedPosition === -1) {
      return false;
    }
    currentPosition = matchedPosition + 1;
  }

  return true;
}
