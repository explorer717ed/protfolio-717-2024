<template>
  <ToolbarTop/>
  <section class="home-section-intro bg-grid">
    <h1>
      <Text717/>
      <!-- <span class="subtitle">Frontend Developer</span><br>
      <NuxtLink to="/about" class="text717">
        <span class="text717_text">717</span>
        <svg width="100%" height="11" viewBox="0 0 435 11" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="svg_line" fill-rule="evenodd" clip-rule="evenodd" d="M192.8 6.99869C159.951 6.0123 127.566 5.03984 99.357 5.99831C80.5711 6.63662 56.5218 7.78714 37.1596 8.77869C27.4806 9.27435 18.9765 9.7301 12.8923 10.0619C9.85022 10.2278 7.41321 10.3628 5.7369 10.4562C4.89875 10.5029 4.25077 10.5393 3.81243 10.5639L3.14638 10.6015C3.14638 10.6015 3.14575 10.6015 3.00414 8.10555C3.00342 5.00001 3.00413 4.99997 3.00413 4.99997L3.67247 4.96226C4.11164 4.93756 4.76048 4.90116 5.59954 4.85439C7.27764 4.76086 9.71665 4.62582 12.7609 4.45979C18.8493 4.12774 27.2182 4.28124 36.9039 3.78523C56.2714 2.79341 80.3563 1.64104 99.1872 1.0012C127.543 0.0377346 160.533 2.01112 193.5 2.99998C211.069 3.52697 228.415 3.06345 245.529 3.30224L296.481 2.00126C310.426 1.40046 324.137 -0.147684 336 0C365.392 0.365913 389.269 2.51922 406.036 3.58164C414.42 4.11287 418.964 5.02433 423.42 5.40042C425.648 5.58847 427.354 5.7434 428.503 5.85151C429.078 5.90557 429.514 5.94792 429.808 5.97685C429.899 5.98589 429.977 5.99362 430.041 5.99998C430.041 5.99998 430 5.99998 430.5 5.99998C431.873 6.14161 434.633 6.98856 434.491 8.36198C434.349 9.73541 433.121 10.734 431.748 10.5924L431.644 10.5818L431.495 10.5669L431.322 10.5498C431.037 10.5216 430.608 10.48 430.041 10.4266C428.906 10.32 427.217 10.1665 425.005 9.97978C420.581 9.60645 414.067 9.10053 405.72 8.57164C389.035 7.5144 365.027 6.36553 335.753 6.00015L296.654 6.99846C295.885 7.03161 295.114 7.06493 294.341 7.09833C293.671 7.12727 292.999 7.15627 292.327 7.18525C276.821 7.85371 260.73 7.71159 245.529 7.49998C228.208 7.25886 210.427 7.52799 192.8 6.99869ZM0.50815 8.24716C0.429939 6.86867 1.62564 5.07818 3.00413 4.99997L3.00414 8.10555L3.14638 10.6015C1.76789 10.6797 0.586361 9.62566 0.50815 8.24716Z"/>
        </svg>

      </NuxtLink> -->
    </h1>
  </section>
  <section class="home-section-works">
    <h2>Works</h2>
    <ListWork
      :works="listWork"
    ></ListWork>
  </section>
  <section class="home-section-contact bg-dot previewArea">
    <div class="contact-msg text--center">
      Drop me a line and discuss new projects~ <br>
      ✧◝(⁰▿⁰)◜✧ <br>
    </div>
    <div class="toolbar-contact">
      <button class="btn-round-icon">
        <Icon name="material-symbols-light:mail-outline-rounded"/>
      </button>
      <button class="btn-round-icon">
        <Icon name="ion:social-linkedin-outline"/>
      </button>      
    </div>
  </section>
</template>

<script lang="ts" setup>


const listWork = ref([
  { id: 'moj', title: 'Upgrading the Information Architecture of the Ministry of Justice Website', projectType: 'Student', projectScope: 'UX', imgUrl: '/temp/img/moj/moj1.png' },
  { id: 'kronos-research', title: 'Kronos Research', projectType: 'Freelance', projectScope: 'Frontend', imgUrl: '/temp/img/kronos/kronos_home.png' },
  { id: 'three-js-journey-design-system', title: 'Three.js Journey Design System', projectType: 'Personal', projectScope: 'UX' },
  { id: 'gary-tu', title: 'Gary Tu', projectType: 'Freelance', projectScope: 'Frontend' },
  { id: 'epa-opendata', title: 'EPA Opendata', projectType: 'Blueplanet Inc. Project', projectScope: 'Frontend' },
  { id: 'fragment', title: 'Fragment', projectType: 'Personal', projectScope: 'Frontend' },

])
</script>

<style lang="scss" scoped>
@import url("~/assets/scss/pages/home.scss");
</style>