<template>
<div class="toolbar">
  <button class="btn-round-icon">
    <Icon name="material-symbols-light:language"/>
  </button>
  <button v-show="$colorMode.preference != 'dark'" @click="$colorMode.preference = 'dark'" class="btn-round-icon">
    <Icon name="material-symbols-light:nightlight-outline-rounded"/>
  </button>
  <button v-show="$colorMode.preference != 'light'" @click="$colorMode.preference = 'light'" class="btn-round-icon">
    <Icon name="material-symbols-light:sunny-outline-rounded"/>
  </button>
</div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.toolbar{
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 50;
}
</style>