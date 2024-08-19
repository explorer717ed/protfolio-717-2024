<template>
  <div>
    <h2 class="works_title">{{ title }}</h2>
  
    <ul ref="elWorkList" class="list list_work">
      <li v-for="work in listWork" class="list_item" :previewImgUrl="work.imgUrl">
        <NuxtLink :to="'/works/' + work.id" class="">
          <span class="item_title">{{ work.title }}</span>
          <span class="list_item-subtitle_wrap">
            <span class="item_subtitle">{{ work.projectScope }}</span>
            <span class="item_note">{{ work.projectType }}</span>
          </span>
        </NuxtLink>
      </li>
    </ul>
    <div class="copyright">Copyright © 2024 717 - All Rights Reserved.</div>
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

const route = useRoute()
const listWork = ref(workList)
if(route.name === 'works-id'){
  listWork.value = listWork.value.filter(work => work.id !== route.params.id)
}

const elWorkList = ref()

onMounted(()=>{
  if(props.preview){
    new Menu(elWorkList.value);
  }
})
</script>

<style lang="scss" scoped>
.works_title{
  padding: 1rem;
  margin: 0;
}
.list_work{
  margin: 0;
  li{
    padding: 0;
  }
  .list_item-subtitle_wrap{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  a{
    display: inline-block;
    flex-flow: column;
    align-items: center;
    padding: 24px 15px 20px;
    width: calc(100% - 30px);
    text-decoration: none;
    color: var(--color-text);
    &:visited{
      color: var(--color-text);
    }
    &:hover{
      background-color: var(--color-btn-bg-hover);
    }
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

.copyright{
  color: var( --color-text-lighter);
  font-size: 0.75rem;
  text-align: center;
  padding: 20px;
}

</style>