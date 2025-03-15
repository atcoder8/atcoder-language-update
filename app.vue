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
  <div class="max-h-dvh p-1 flex flex-col space-y-1">
    <!-- 検索窓 -->
    <div class="flex-row space-x-1 place-items-center">
      <label class="text-lg">検索</label>
      <input
        v-model="keyword"
        class="border border-collapse border-gray-700 max-w-36"
      />
    </div>

    <!-- 言語テーブル -->
    <LanguageTable :language-infos="filteredLanguages" />
  </div>
</template>
