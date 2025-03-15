/** AtCoderで使用できるプログラミング言語の情報を表すインターフェース */
export interface LanguageInfo {
  /** 言語ID */
  id: number;

  /** 言語名 */
  name: string;

  /** 処理系 */
  processor: string;

  /** バージョン */
  version: string;

  /** ライブラリ */
  library: string;
}
