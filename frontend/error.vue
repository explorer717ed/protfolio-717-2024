

<template>
  <main>
    <section class="section-content bg-dot transition_slide--left">
      <Breadcrumb
        :paths="[{ label: 'Home', to: '/'}, { label: ' Σ(ﾟДﾟ；≡；ﾟдﾟ)' }]"
      />
      <h2 class="msg_error">Oops! {{ error.statusCode }}</h2>
      <ContactMsg>But you can still drop me a line and discuss new projects~</ContactMsg>
      <div class="link_about">
        <Text717/>
      </div>
    </section>

    <section class="section_more_work transition_slide--right">
      <ListWork :preview="true" title="Works"></ListWork>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped>

.section_more_work{
  h2{
    margin: 1rem;
  }
  border-top: 1px solid var(--color-text);
  @include lg{
    width: calc(33.33% - 1px);
    float: left;
    height: 100vh;
    border-top-width: 0;
    border-left: 1px solid var(--color-text);
    box-shadow: $shadow-block;
  }
}

.section-content{
  padding-bottom: 80px;
  @include lg{
    padding-top: 0;
    padding-bottom: 0;
    width: 66.66%;
    float: left;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
}

.msg_error{
  text-align: center;
  margin-top: 48px;
  margin-bottom: 48px;
}

.link_about{
  margin-top: 80px;
  // margin-bottom: 80px;
}

@include lg{
  .link_about{
    position: absolute;
    bottom: 30px;
    left: 10px;
    margin-bottom: 0;
  }

}
</style>