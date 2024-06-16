<template>
  <div 
    class="breadcrumb"
    :style="{ maxWidth }"
    :class="{'breadcrumb--clip': isClipped}"
    ref="elBreadcrumb"
  >
    <template v-for="(path, i) in paths" >
      <span class="breadcrumb_link">
        <template v-if="!path.to">{{ path.label }}</template>
        <NuxtLink v-else :to="path.to">{{ path.label }}</NuxtLink>
      </span>
      <span v-if="i < paths.length-1"class="breadcrumb_divider">/</span>
    </template>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  paths:{
    type: Array as PropType<{ label: string, to?: string }[]>,
    default: ()=>([]),
    required: true
  },
  maxWidth: {
    type: String,
  }
})

const elBreadcrumb = ref<HTMLDivElement>()

const isClipped = ref(false)

const onResizeClip: ResizeObserverCallback = (entries) => {
  for (const entry of entries) {
    const bufferSize = 50
    if(entry.target.offsetWidth < (entry.target.scrollWidth - bufferSize)){
      entry.target.classList.add('breadcrumb--clip')
    }else{
      entry.target.classList.remove('breadcrumb--clip')
    }
  }
}

onMounted(()=>{
  const resizeObserver = new ResizeObserver(onResizeClip);
  if(elBreadcrumb.value) resizeObserver.observe(elBreadcrumb.value)
})

</script>

<style lang="scss" scoped>

.breadcrumb{
  background-color: var(--color-bg);
  border: var(--color-text) 1px solid;
  padding: 10px 15px;
  display: inline-block;
  margin: 15px;
  max-width: calc(100% - 30px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  // container-type: inline-size;
  // container-name: breadcrumb;

  .breadcrumb_divider{
    margin: 0 3px;
  }

  position: relative;
  &.breadcrumb--clip{
    border-right: none;
    padding: 10px 30px 10px 15px;
    & ::after{
      content: '';
      position: absolute;
      display: block;
      height: 100%;
      aspect-ratio: 1 / 1;
      border: var(--color-text) 1px solid;
      transform-origin: center;
      transform:  translateX(55%);
      border-radius: 100%;
      right: 0;
      top: -1px;
      z-index: 10;
    }
  }
}
</style>