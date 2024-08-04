<template>
  <ToolbarTop/>
  <div class="bg-dot">
    <Breadcrumb :paths="linksBreadcrumb" max-width="calc(100% - 180px)"/>
    <section class="page_content brief_section">
    
      <div class="brief_card">
        
        <button @click="goBack" class="brief_back_btn"><Icon title="Go back" name="material-symbols-light:arrow-back-rounded"/></button>
        <div class="brief_card_tag">{{ article?.category }}</div>
        <h1>{{ article?.title }}</h1>
        <ul class="brief_feature">
          <li v-for="item in article.metadata" class="brief_feature_item">
            {{ item.label }}: <br>
            {{ item.content }}
          </li>
        </ul>
        <p class="brief_desc">
          {{ article?.abstract}}
        </p>
    
        <p class="brief_tags">
          <NuxtLink v-for="tag in article?.tags">
            # {{ tag }}
          </NuxtLink>
        </p>
      </div>
  
    </section>

  </div>
  <Gallery
    class="bg-dot gallery_top"
    :imgs="article?.gallery_top"
  />
  
  <nav class="article_anchor-wrap">
    <ol class="article_anchor">
      <li v-for="h in headings" class="article_anchor-item">
        <a class="article_anchor-link" :href="'#' + underscoreWord(h)">{{ h }}</a>
      </li>
      <li class="text--center">
        <button @click="goTop" class="article_anchor-go_top">↑</button>
      </li>
    </ol>
  </nav>
  <article class="page_content" id="work_article">
    
    <section v-for="section in article?.article_blocks" class="article_section">
      <template v-for="block in section">
        <h2 v-if="block.type === 'heading1'" :id="underscoreWord(block.content)" class="article_section-heading1">{{ block.content }}</h2>
        <div v-else-if="block.type === 'paragraph'" class="article_p" v-html="block.content"></div>
        <div v-else-if="block.type === 'card'" class="article_card bg-grid" v-html="block.content"></div>
        <ul v-else-if="block.type === 'list'">
          <li v-for="item in block.content">
            <h3 class="article_section-heading2">{{ item.heading }}</h3>
            <p class="article_p">{{ item.content }}</p>
          </li>
        </ul>
        <hr v-else-if="block.type === 'divider'" class="article_divider"></hr>
        <div v-else-if="block.type === 'buttons'" class="p_btns">
          <a
            v-for="btn in block.content"
            :href="btn.href" target="_blank" rel="noopener noreferrer"
            :class="'btn btn_' + btn.type"
          >
            {{ btn.label }}
            <Icon :name="btn.icon"/>
          </a>
        </div>
        <h3 v-else-if="block.type === 'heading2'" class="article_section-heading2">{{ block.content }}</h3>
        <div v-else-if="block.type === 'image'" class="article-image_block">
          <div class="image_block-content article_p" v-html="block.content"></div>
          <div class="image_block-image_frame">
            <img class="image_block-image" :src="block.img_url" :alt="block.alt">
          </div>
          <div class="clear_fix"></div>
        </div>
      </template>
    </section>
    <!-- <section class="article_section">
      <h2 class="article_section-heading1">Key Features</h2>
      <ul class="list">
        <li v-for="feat in listFeatures" class="list_item">
          <h3 class="list_item_title">{{ feat.title }}:</h3>
          <p class="list_feature_desc">{{ feat.desc }}</p>
          <ImgExpand :src="feat.imgSrc" :alt="feat.imgAlt"/>
        </li>
      </ul>
    </section> -->

    <hr class="article_divider article_divider--large"></hr>

    <div class="aritcle_tags">
      <NuxtLink v-for="tag in article?.tags"># {{ tag }}</NuxtLink>
    </div>

    <div class="p_btns">
      <a
        v-for="link in article.related_links"
        :href="link.href" target="_blank" rel="noopener noreferrer"
        :class="'btn btn_' + link.type"
      >
        {{ link.label }}
        <Icon :name="link.icon"/>
      </a>
    </div>
  </article>

  <Gallery v-if="article?.gallery_bottom" class="bg-dot gallery_bottom" :imgs="article?.gallery_bottom"/>

  <section class="section_more_work">
    <ListWork :preview="true" title="More Works"></ListWork>
  </section>
  <section class="section-contact bg-dot previewArea">
    <div class="link_about">
      <Text717/>
    </div>
    <ContactMsg class="contact-wrap"/>
  </section>
</template>

<script lang="ts" setup>
import { worksDetail } from "~/utils/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 

const router = useRouter()
const route = useRoute()

const linksBreadcrumb = ref([
  { label: 'Home', to: '/' },
  { label: 'Works' },
  { label: '' }
])

const id = ref(route.params.id)
const article = ref<Work>()

const getArticle = () => {
  const found = worksDetail.find((work)=> work.id == id.value)
  
  if(!found) throw showError({ statusCode: 404, statusMessage: "Page Not Found" })
  article.value = found
  linksBreadcrumb.value[2].label = article.value.title

  useHead({
    title: article.value.title
  })
}
getArticle()

const headings = computed(()=>{
  if(!article.value) return []
  if(!article.value.article_blocks) return []

  let result: string[] = []
  article.value.article_blocks.forEach(block=>{
    const found = block.find(item => item.type === 'heading1')
    result.push(found?.content)
  })
  return result
})

const underscoreWord = (word: string) => word.replace(/ /g,"_")


const goBack = () => {
  router.go(-1)
}

const goTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const listFeatures = ref([
  { 
    title: "Simplified section map",
    desc: "The section map was re-arranged into a simpler and more consistent structure",
    imgSrc: "/temp/img/moj/simplified_structure.png",
    imgAlt: "Simplified section map"
  },
  { 
    title: "Consistent titles",
    desc: "The titles have been renamed into a more consistent manner while maintain the original title’s wording, ensuring minimal transition effort for returning users.",
    imgSrc: "/temp/img/moj/rename.png",
    imgAlt: "Consistent titles"
  },
  { 
    title: "Task-focused pages",
    desc: "The necessary information for each task was collected into a single page to avoid extra navigations for users.",
    imgSrc: "/temp/img/moj/stepper.jpg",
    imgAlt: "Task-focused pages"
  },
  { 
    title: "Self-descriptive links",
    desc: "Links were made more self-descriptive so that users can easily understand the destination and purposes of each link, aiding their decision on whether to click.",
    imgSrc: "/temp/img/moj/self_desc_link.png",
    imgAlt: "Self-descriptive links"
  },
])

onMounted(()=>{


  ScrollTrigger.create({
    trigger: "#work_article",
    start: "top top", 
    end: "bottom 350px",
    pin: ".article_anchor-wrap"
  });

})
</script>

<style lang="scss" scoped>
@import url("~/assets/scss/pages/work.scss");


</style>