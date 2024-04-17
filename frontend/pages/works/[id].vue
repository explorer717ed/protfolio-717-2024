<template>

<section class="brief_section bg-dot">
  <div class="breadcrumb">
    <span class="breadcrumb_link">
      <NuxtLink to="/">Home</NuxtLink>
    </span>
    <span class="breadcrumb_divider">/</span>
    <span class="breadcrumb_link">Works</span>
    <span class="breadcrumb_divider">/</span>
    <span class="breadcrumb_link">Kronos Research</span>
  </div>

  <div class="brief_card">
    
    <button @click="goBack" class="brief_back_btn"><Icon title="Go back" name="material-symbols-light:arrow-left-alt"/></button>
    <h1>Kronos Research</h1>
    <p class="brief_feature">
      > Technics: Three.js, Nuxt 3 <br>
      > Year: 2024 <br>
      > Scope: Frontend <br>
    </p>
    <p class="brief_desc">
      A freelance project implementing Three.js. A freelance project implementing Three.js. A freelance project implementing Three.js. A freelance project implementing Three.js. A freelance project implementing Three.js. A freelance project implementing Three.js. A freelance project implementing Three.js.
    </p>

    <p class="brief_tags">#frontend #vue3 #nuxt3 #threejs</p>
  </div>
</section>
</template>

<script lang="ts" setup>

useHead({
  title: 'The Work Name'
})

const router = useRouter()
const goBack = () => {
  router.go(-1)
}
</script>

<style lang="scss" scoped>
@import url("~/assets/scss/pages/work.scss");


</style>