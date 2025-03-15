import languageUpdate from "~/assets/atcoder/language-update/language_update_2023.json";

/** 言語番号から言語IDに変換するときに加算する値 */
const OFFSET_LANGUAGE_ID = 5000;

export default function (): LanguageInfo[] {
  return languageUpdate.map((item) => ({
    id: OFFSET_LANGUAGE_ID + item.number,
    name: item.language,
    processor: item.processor,
    version: item.version,
    library: item.library,
  }));
}
