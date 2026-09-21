<script setup>

import {useI18n} from "vue-i18n";
import {useRoute} from "vue-router";


const {t} = useI18n();
const route = useRoute();
const unavailableRoute = route.path;

</script>

<template>
<section class="pt-6 p-4 md:p-5">
  <div class="flex flex-col gap-3">
    <h1 class="text-2xl font-bold">{{ t('pageNotFound.title') }}</h1>
    <p class="text-lg">{{ t('pageNotFound.description') }}</p>
    <router-link :to="unavailableRoute" class="text-lg">{{ t('pageNotFound.link') }}
    {{t('pageNotFound.p')}}
    </router-link>
  </div>
</section>
</template>

<style scoped>

</style>