<script setup lang="ts">
defineProps<{ languageInfos: LanguageInfo[] }>();
</script>

<template>
  <div class="max-h-full overflow-auto">
    <table class="border border-collapse border-gray-300">
      <caption class="font-extrabold text-2xl">
        Language update 2023
      </caption>

      <thead class="sticky top-0 z-10 bg-gray-700 text-white">
        <tr>
          <th class="w-fit px-5 py-1 text-nowrap">言語</th>
          <th class="w-fit px-5 py-1 text-nowrap">ID</th>
          <th class="w-fit px-5 py-1 text-nowrap">処理系</th>
          <th class="w-fit px-5 py-1 text-nowrap">バージョン</th>
          <th class="w-full px-5 py-1 text-nowrap">ライブラリ</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(languageInfo, index) in languageInfos"
          :key="index"
          :class="index % 2 == 0 ? 'bg-gray-100' : 'bg-gray-300'"
        >
          <th class="w-fit px-5 py-1 text-nowrap text-start">{{ languageInfo.name }}</th>
          <td class="w-fit px-5 py-1 text-nowrap">{{ languageInfo.id }}</td>
          <td class="w-fit px-5 py-1 text-nowrap">
            {{ languageInfo.processor }}
          </td>
          <td class="w-fit px-5 py-1 text-nowrap">
            {{ languageInfo.version }}
          </td>
          <td class="w-full">
            <div v-if="languageInfo.library.trim() !== ''">
              <details @toggle="" :open="false">
                <summary></summary>
                {{ languageInfo.library }}
              </details>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
