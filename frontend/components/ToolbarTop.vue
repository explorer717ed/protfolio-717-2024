<template>
<div class="toolbar">
  <!-- <button class="btn-round-icon" data-MagneticBtn>
    <Icon name="material-symbols-light:language"/>
  </button> -->
  <span class="color_btn_wrap">
    <button 
      v-show="$colorMode.preference != 'dark'"
      @click="$colorMode.preference = 'dark'"
      class="btn-round-icon"
      data-MagneticBtn
      title="Change to dark mode."
    >
      <Icon name="material-symbols-light:nightlight-outline-rounded"/>
    </button>
    <button
      v-show="$colorMode.preference != 'light'"
      @click="$colorMode.preference = 'light'"
      class="btn-round-icon"
      data-MagneticBtn
      title="Change to light mode."
    >
      <Icon name="material-symbols-light:sunny-outline-rounded"/>
    </button>
  </span>
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

.color_btn_wrap{
  position: relative;
  width: 40px;
  height: 40px;
  display: inline-block;
  button{
    position: absolute;
  }
}
</style>