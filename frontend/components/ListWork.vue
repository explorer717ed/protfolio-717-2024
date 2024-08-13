<template>
  <div>
    <h2 class="works_title">{{ title }}</h2>
  
    <ul ref="elWorkList" class="list list_work">
      <li v-for="work in listWork" class="list_item" :previewImgUrl="work.imgUrl">
        <NuxtLink :to="'/works/' + work.id" class="">
          <span>
            <span class="item_subtitle">{{ work.projectScope }}</span><br>
            <span class="item_title">{{ work.title }}</span>
          </span>
          <span class="item_note">{{ work.projectType }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import Menu from '~/utils/menu';
import { workList } from "~/utils/data";

const props = defineProps({
  preview: {
    default: false
  },
  title: {
    default: 'Works'
  }
})


const listWork = ref(workList)

const elWorkList = ref()

onMounted(()=>{
  if(props.preview){
    new Menu(elWorkList.value);
  }
})
</script>

<style lang="scss" scoped>
.works_title{
  margin: 1rem;
}
.list_work{
  margin: 0;
  li{
    padding: 0;
    // overflow: hidden;
  }
  a{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 15px;
    text-decoration: none;
    color: var(--color-text);
    overflow-x: hidden;
    &:visited{
      color: var(--color-text);
    }
    // &::after {
    //   content: "";
    //   position: absolute;
    //   top: -3px;
    //   left: -3px;
    //   width: 100%;
    //   height: 100%;
    //   background-color: transparent;
    //   border: 3px solid var(--color-grid-line);
    //   opacity: 0;
    //   z-index: -1;
    //   transform: scaleX(1.1) scaleY(1.2);
    //   transition: transform 0.3s, opacity 0.3s;
    // }
    &:hover{
      background-color: var(--color-btn-bg-hover);
    }
    // &:hover::after, &:focus::after {
    //   opacity: 1;
    //   transform: scaleX(1) scaleY(1);
    // }
  }

  .item_title{
    font-family: $font-secondary;
    font-size: 1.5rem;
    text-decoration: underline;
    line-height: 1.5;
  }
  .item_subtitle{
    color: var( --color-text-lighter);
    font-size: .9rem;
  }
  .item_note{
    color: var( --color-text-lighter);
    font-size: .9rem;
    padding-left: 10px;
  }

  @include lg{
    overflow-y: auto;
    max-height: calc(100vh - 5rem);
  }
}
</style>