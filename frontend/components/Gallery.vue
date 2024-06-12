<template>
<div
  ref="elGallery"
  class="gallery"
>
{{ info }}
  <div
    class="gallery_inner"
    :style="{
      transform: `scale(${scrollRatio})`,
      gap: `10px ${10 + (scrollRatio-1) * 100}px`
    }"
  >
    <figure
      v-for="img in imgs"
      :class="'img_frame img_frame--' + img.size"
    >
      <img :src="img.url" :alt="img.alt">
    </figure>
  </div>
</div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';

defineProps({
  imgs:{
    type: Array as PropType<{url: string, size: 'l'|'s', alt: string}[]>,
    required: true
  }
})

const elGallery = ref<HTMLDivElement>()
const info = reactive({
  offsetTop: 1,
  offsetHeight: 1,
  scrollTop: 1,
  screenHeight: 1
})

const getOffset = () => {
  if(!elGallery.value) return
  
  info.offsetTop = elGallery.value.offsetTop
  info.offsetHeight = elGallery.value.offsetHeight
}

const getScrollTop = () => {
  if(!document) return
  const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
  info.scrollTop = scrollTop
  info.screenHeight = screen.height
}

const scrollRatio = computed(()=>{

  const startPoint = info.offsetTop - (info.screenHeight / 2)
  if(info.scrollTop < startPoint) return 1

  let diff =  info.scrollTop - startPoint
  let ratio = diff / (info.screenHeight * 2)
  
  if(ratio > 1) return (info.offsetHeight / (info.screenHeight * 2)) / 2 + 1
  else return (ratio / 2) + 1

})

onMounted(()=>{
  getOffset()

  window.addEventListener('resize', () => {
    getOffset()
  })

  window.addEventListener('scroll', () => {
    getScrollTop()
  })
})

</script>

<style lang="scss" scoped>


// .gallery{
//   margin-top: 80px;
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: space-between;
//   gap: 10px;
//   .img_frame{
//     border: var(--color-text) 1px solid;
//     padding: 10px;
//     background-color:  var(--color-bg);
//     &.img_frame--l{
//       flex: 1 1 250px;
//     }
//     &.img_frame--s{
//       flex: 1 1 150px;
//     }
//     img{
//       width: 100%;
//     }
//   }
// }
.gallery{
  width: 100%;
  overflow-x: clip;
}
.gallery_inner{
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, auto));
  gap: 10px;
  grid-auto-flow: dense;
  align-items: center;
  justify-items: center;
  .img_frame{
    border: var(--color-text) 1px solid;
    padding: 10px;
    background-color:  var(--color-bg);
    &.img_frame--l{
      grid-column-end: span 2;
    }

    img{
      width: 100%;
    }
  }


  @include lg {
    grid-template-columns: repeat(4, minmax(120px, auto));
    
  }
}

</style>