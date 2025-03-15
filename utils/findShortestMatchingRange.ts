/**
 * 検索対象の文字列から検索ワードを部分文字列として含む最短の区間を探索します。
 * 大文字と小文字は区別しません。また、空白文字は無視されます。
 *
 * 最短の区間が複数存在する場合、最も先頭に近い区間を返します。
 * 検索ワードが含まれない場合、`undefined`を返します。
 * @param text 検索対象の文字列
 * @param keyword 検索ワード
 */
export default function (
  text: string,
  keyword: string
): IndexRange | undefined {
  const normText = text.toLowerCase().replaceAll(/\s/g, "");
  const normKeyword = keyword.toLowerCase().replaceAll(/\s/g, "");

  if (keyword.length === 0) {
    return {
      start: 0,
      end: 0,
    };
  }

  if (text.length < keyword.length) {
    return undefined;
  }

  let shortestRange: IndexRange | undefined = undefined;

  let dp: (number | undefined)[] = [];
  for (let textIndex = 0; textIndex < normText.length; textIndex++) {
    const nextDp = [...dp];
    if (nextDp[nextDp.length - 1] !== undefined) {
      nextDp.push(undefined);
    }

    if (normText[textIndex] === normKeyword[0]) {
      nextDp[0] = textIndex;
    }

    for (let keywordIndex = 1; keywordIndex < nextDp.length; keywordIndex++) {
      const previousClosestLeft = dp[keywordIndex - 1];

      if (
        previousClosestLeft === undefined ||
        normText[textIndex] !== normKeyword[keywordIndex]
      ) {
        continue;
      }

      if (previousClosestLeft + 1 > (nextDp[keywordIndex] ?? -1)) {
        nextDp[keywordIndex] = previousClosestLeft + 1;
      }
    }

    dp = nextDp;

    const closestLeft = dp.at(normKeyword.length - 1);

    if (closestLeft === undefined) {
      continue;
    }

    const candRangeLen = textIndex - closestLeft + 1;
    if (
      shortestRange === undefined ||
      candRangeLen < calcRangeLength(shortestRange)
    ) {
      shortestRange = {
        start: closestLeft,
        end: textIndex + 1,
      };
    }
  }

  return shortestRange;
}
