<template>
  <ToolbarTop class="about_toolbar_top"/>
  <div class="bg-grid page_about">
    <Breadcrumb
      :paths="[{ label: 'Home', to: '/'}, { label: 'About' }]"
    />

    <section class="about-self page_content mt_about">
      <h1 class="self_intro">
        <span class="self_greet">Hello~ I’m</span><br>
        <span class="self_name">717</span>
        <span class="self_emoji"> (*’ｰ’*)</span>
      </h1>
      <div class="self_photo mt_about">
        <img class="self_photo_img" src="~/assets/img/photo_717.png" alt="A very cute self-portrait.">
      </div>
      <div class="clear_fix"></div>
      <p class="self_role mt_about">
        / Frontend Developer<br>
        / UX Designer<br>
        / UI Designer<br>
        / Backend Developer
      </p>
      <h2 class="about_p_title mt_about">
        Currently based in
        <span class="about_from_tw">Taiwan</span> New Zealand.
      </h2>
      <h2 class="about_p_title mt_about">Front end Develop</h2>
      <p class="about_content">
        Mainly using Vue.js + Typescript...
      </p>
      <h2 class="about_p_title mt_about">UX / UI Design</h2>
      <p class="about_content">
        UX research, interview and workshop experience. Using Figma to design prototypes.
      </p>
      <h2 class="about_p_title mt_about">Back end Develop</h2>
      <p class="about_content">
        Having basic knowledge on PHP, Node.js, MySQL, and system analysis.
      </p>
    </section>
    <section class="section_contact mt_about">
      <ContactMsg/>
    </section>
  </div>
  <section class="section_works">
    <h2 class="works_title">Works</h2>
    <ListWork :works="listWork" class="works_list"></ListWork>
    <ContactMsg class="wrap_contact"/>
  </section>

</template>

<script lang="ts" setup>

const listWork = ref([
  { id: 'kronos-research', title: 'Kronos Research', projectType: 'Freelance', projectScope: 'Frontend' },
  { id: 'three-js-journey-design-system', title: 'Three.js Journey Design System', projectType: 'Personal', projectScope: 'UX' },
  { id: 'gary-tu', title: 'Gary Tu', projectType: 'Freelance', projectScope: 'Frontend' },
  { id: 'epa-opendata', title: 'EPA Opendata', projectType: 'Blueplanet Inc. Project', projectScope: 'Frontend' },
  { id: 'fragment', title: 'Fragment', projectType: 'Personal', projectScope: 'Frontend' },

])
</script>

<style lang="scss" scoped>
@import url("~/assets/scss/pages/about.scss");
</style>