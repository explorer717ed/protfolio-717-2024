<template>
    <img
      :style="{
        // transform: `scale(${scale})`,
        width: `${scale * 100}%`,
      }"
      ref="elImg"
      class="img_expand"
      :src="src"
      :alt="alt"
    >
</template>

<script lang="ts" setup>


const props = defineProps({
  src: {
    required: true,
    type: String
  },
  alt: String,
  offset: {
    default: 0
  }
})



const elImg = ref<HTMLImageElement>()
const info = reactive({
  offsetTop: 1,
  offsetHeight: 1,
  scrollTop: 1,
  screenHeight: 1,
  height: 1,
  boxHeight: 1
})

const getOffset = () => {
  if(!elImg.value) return
  
  const box = elImg.value.getBoundingClientRect();
  
  info.height = box.height
  const body = document.body;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;

  const clientTop = docEl.clientTop || body.clientTop || 0;

  const top  = box.top +  scrollTop - clientTop;
  
  info.offsetTop = top
  info.offsetHeight = elImg.value.offsetHeight
}

const getScrollTop = () => {
  if(!document) return
  const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
  info.scrollTop = scrollTop
  info.screenHeight = screen.height
}

const scale = computed(()=>{
  const startPoint = (info.offsetTop - info.screenHeight) + props.offset
  if(info.scrollTop < startPoint) return 0
  
  const ratio = ((info.scrollTop - startPoint) / info.screenHeight )
  if(ratio < 1){
    info.boxHeight = info.height * ratio
    return ratio
  }
  else {
    info.boxHeight = info.height

    return 1
  }
})

onMounted(()=>{
  getOffset()
  getScrollTop()

  window.addEventListener('resize', () => {
    getOffset()
  })
  window.addEventListener('scroll', () => {
    getScrollTop()
  })

})



</script>

<style lang="scss" scoped>
.img_wrap{
  display: inline-block;
  width: calc(100% - 30px);
}

.img_expand{
  width: calc(100% - 30px);
  transform: scale(1);
  transform-origin: top;
  font-size: 0;
}
</style>