<template>
  <main>
    <ToolbarTop class="about_toolbar_top transition_slide--top"/>
    <div ref="aboutContent" class="bg-grid page_about transition_slide--left">
      <Breadcrumb
        :paths="[{ label: 'Home', to: '/'}, { label: 'About' }]"
      />
  
      <section class="about-self page_content mt_about">
        <h1 class="self_intro" scroll-drift>
          <span class="self_greet">Hello~ I’m</span><br>
          <span class="self_name">717</span>
          <span class="self_emoji"> (*’ｰ’*)</span>
        </h1>
        <div class="self_photo mt_about" scroll-drift>
          <img class="self_photo_img" src="~/assets/img/photo_717.png" alt="A very cute self-portrait.">
        </div>
        <div class="clear_fix"></div>
        <p class="self_role mt_about" scroll-drift>
          / Front-end Developer<br>
          / UX/UI Designer<br>
          / Back-end Developer
        </p>
        <h2 class="about_p_title mt_about" scroll-drift>
          Currently based in
          <span class="about_from_tw">Taiwan</span> New Zealand.
        </h2>
        <h2 class="about_p_title mt_about" scroll-drift>Front-end Develop</h2>
        <p class="about_content" scroll-drift>
          Over 4 years of working in software companies and 1 year of freelance experience.
          My development expertise primarily focuses on Vue and Nuxt, with additional experience in Angular, Typescript and HTML5.
        </p>
        <h2 class="about_p_title mt_about" scroll-drift>UX / UI Design</h2>
        <p class="about_content" scroll-drift>
          Through the Master's degree in UX design from Victoria University of Wellington, I have worked on multiple UI/UX projects, both individually and with teams.
          It includes UX research, interview, workshop and using Figma to design prototypes.
        </p>
        <h2 class="about_p_title mt_about" scroll-drift>Back-end Develop</h2>
        <p class="about_content" scroll-drift>
          Having learned and developed with PHP, MySQL, and system analysis in code camp, the foundational back-end skills complement my front-end expertise.
        </p>
      </section>
      <section class="section_contact">
        <ContactMsg/>
      </section>
    </div>
    <section class="section_works transition_slide--right">
      <ListWork class="works_list"></ListWork>
      <ContactMsg class="wrap_contact bg-dot"/>
    </section>
  </main>
</template>

<script lang="ts" setup>
const { isDesktop } = useDevice();

const aboutContent = ref()
// const elDrift = ref()
onMounted(()=>{
  if(isDesktop) new magneticBtn()
  
  useLenis(aboutContent.value)

  document.querySelectorAll('[scroll-drift]').forEach(el=>{
    new scrollYDrift( el, aboutContent.value )
  })
  
})

</script>

<style lang="scss" scoped>
@import url("~/assets/scss/pages/about.scss");
</style>