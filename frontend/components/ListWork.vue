<template>

  <ul class="listWork">
    <li v-for="work in works">
      <NuxtLink :to="'/works/' + work.id">
        <span>
          <span class="listItem_subtitle">{{ work.projectScope }}</span><br>
          <span class="listItem_title">{{ work.title }}</span>
        </span>
        <span class="listItem_note">{{ work.projectType }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>

defineProps({
  works:{
    type: Array as PropType<{
      id: string,
      projectScope: string,
      title: string,
      projectType: string,
    }[]>
  }
})

</script>

<style lang="scss" scoped>
.listWork{
  margin: 0 -15px;
  li{
    border-top: 1px solid var(--color-text);
    position: relative;
    &:last-of-type{
      border-bottom: 1px solid var(--color-text);
    }
  }
  a{
    display: flex;
    justify-content: space-between;
    align-items: last baseline;
    padding: 24px 15px;
    text-decoration: none;
    color: var(--color-text);
    overflow-x: hidden;
    &:visited{
      color: var(--color-text);
    }
    &::after {
      content: "";
      position: absolute;
      top: -3px;
      left: -3px;
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: 3px solid var(--color-grid-line);
      opacity: 0;
      z-index: -1;
      transform: scaleX(1.1) scaleY(1.2);
      transition: transform 0.3s, opacity 0.3s;
    }
    &:hover{
      background-color: var(--color-btn-bg-hover);
    }
    &:hover::after, &:focus::after {
      opacity: 1;
      transform: scaleX(1) scaleY(1);
    }
  }

  .listItem_title{
    font-family: $font-secondary;
    font-size: 1.5rem;
    text-decoration: underline;
    line-height: 1.5;
  }
  .listItem_subtitle{
    color: var( --color-text-lighter);
    font-size: .9rem;
  }
  .listItem_note{
    color: var( --color-text-lighter);
    font-size: .9rem;
  }
}
</style>