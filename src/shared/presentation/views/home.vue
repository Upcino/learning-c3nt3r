<script setup>
import {useI18n} from "vue-i18n";

const {t} = useI18n();
</script>

<template>
<section class="pt-6 p-4 md:p-5">
  <div class="flex flex-col gap-3">
    <h1 class="text-2xl font-bold">{{ t('home.title') }}</h1>
  </div>
</section>
</template>

