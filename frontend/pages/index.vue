<template>
  <main>
    <ToolbarTop class="transition_slide--top"/>
    <section class="home-section-intro bg-grid transition_slide--left">
      <h1 class="home-intro-title">
        <Text717/>
      </h1>
    </section>
    <section class="home-section-works transition_slide--right">
      <ListWork
        :preview="true"
      ></ListWork>
    </section>
    <section class="home-section-contact bg-dot previewArea transition_slide--right">
      <div class="contact-msg text--center">
        Drop me a line and discuss new projects~ <br>
        ✧◝(⁰▿⁰)◜✧ <br>
      </div>
      <div class="toolbar-contact">
        <BtnMail/>
        <BtnLi/>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>

definePageMeta({
  pageTransition: {
    name: 'slide'
  }
})

const { isDesktop } = useDevice();

onMounted(()=>{
  if(isDesktop) new magneticBtn()
  useLenis()
})


</script>

<style lang="scss" scoped>
@import url("~/assets/scss/pages/home.scss");
</style>