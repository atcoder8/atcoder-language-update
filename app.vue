<script setup lang="ts">
/** 各プログラミング言語の情報 */
const languages = useImportLanguages();

/** 検索ワード */
const keyword = ref<string>("");

const filteredLanguages = computed(() =>
  languages
    .filter((language) => checkAmbiguousMatch(language.name, keyword.value))
    .sort((language1, language2) =>
      compareByKeywordMatch(language1, language2, keyword.value)
    )
);
</script>

<template>
  <div class="max-h-dvh p-1 flex flex-col space-y-2">
    <details>
      <summary>説明</summary>

      <p>
        AtCoderの言語アップデートに関する情報を表示します。<br />
        ページ左上の検索窓にキーワードを入力することで言語名による検索が可能です。<br />
        ライブラリ欄は言語によっては非常に長くなるため、初期状態では折り畳んであります。ライブラリ欄をクリックすることで開閉が可能です。
      </p>

      <div class="mt-2">
        <a
          class="text-blue-800 underline"
          href="https://github.com/atcoder8/atcoder-language-update"
        >
          ソースコード
        </a>
      </div>
    </details>

    <!-- 検索窓 -->
    <div class="flex-row space-x-1 place-items-center">
      <label class="text-lg">検索</label>
      <input
        v-model="keyword"
        class="border border-collapse border-gray-700 px-1 py-0.5 min-w-52"
      />
    </div>

    <!-- 言語テーブル -->
    <LanguageTable :language-infos="filteredLanguages" />
  </div>
</template>
