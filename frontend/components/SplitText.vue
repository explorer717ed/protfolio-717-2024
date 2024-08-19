<script lang="ts" setup>
  import { h } from 'vue';

  const slots = useSlots()
  console.log();
  
  
  const render = () => {
    if(!slots.default) return h('span', '');
    

    return h('span', slots.default()[0].children)
  };

</script>
<template>
  <render />
</template>
