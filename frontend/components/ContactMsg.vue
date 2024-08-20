<template>
  <div>
    <div class="contact_msg text--center">
      <slot>Drop me a line and discuss new projects~</slot><br>
      ✧◝(⁰▿⁰)◜✧ <br>
    </div>
    <div class="toolbar_contact">
      <BtnMail/>
      <BtnLi/>
      <BtnGit/>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

.contact_msg{

  font-family: $font-secondary;
  line-height: 1.5;
  font-size: 1.25rem;
}


.toolbar_contact{
  text-align: center;
  margin-top: 1rem;
}

</style>