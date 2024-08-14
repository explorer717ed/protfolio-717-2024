<template>
  <main>
    <ToolbarTop/>
    <div class="bg-dot work_top">
      <Breadcrumb :paths="linksBreadcrumb" max-width="calc(100% - 180px)" class="transition_slide--top"/>
  
  
      <section class="section section--columns" id="work_gallery">
        <div class="columns">
          <div class="column-wrap">
            <div class="column">
              <div class="column__item">
                <img class="column__item-img" :src="article?.gallery[0].url" alt="">
                <!-- <div class="column__item-img" :style="{'background-image':`url(${article?.gallery[0].url})`}"></div> -->
              </div>
              <div class="column__item">
                <img class="column__item-img" :src="article?.gallery[1].url" alt="">
                <!-- <div class="column__item-img" :style="{'background-image':`url(${article?.gallery[1].url})`}"></div> -->
              </div>
              <div class="column__item">
                <img class="column__item-img" :src="article?.gallery[2].url" alt="">
                <!-- <div class="column__item-img" :style="{'background-image':`url(${article?.gallery[2].url})`}"></div> -->
              </div>
            </div><!-- /column -->
          </div><!-- /column-wrap -->
          <div class="column-wrap">
            <div class="column">
              <div class="column__item">
                <img class="column__item-img" :src="article?.gallery[3].url" alt="">
                <!-- <div class="column__item-img" :style="{'background-image':`url(${article?.gallery[3].url})`}"></div> -->
              </div>
              <div class="column__item">
                <img class="column__item-img" :src="article?.gallery[4].url" alt="">
                <!-- <div class="column__item-img" :style="{'background-image':`url(${article?.gallery[4].url})`}"></div> -->
              </div>
              <div class="column__item">
                <img class="column__item-img" :src="article?.gallery[5].url" alt="">
                <!-- <div class="column__item-img" :style="{'background-image':`url(${article?.gallery[5].url})`}"></div> -->
              </div>
              <div class="column__item">
                <img class="column__item-img" :src="article?.gallery[6].url" alt="">
                <!-- <div class="column__item-img" :style="{'background-image':`url(${article?.gallery[6].url})`}"></div> -->
              </div>
            </div><!-- /column -->
          </div>
          <div class="column-wrap">
            <div class="column">
              <div class="column__item">
                <img class="column__item-img" :src="article?.gallery[7].url" alt="">
                <!-- <div class="column__item-img" :style="{'background-image':`url(${article?.gallery[7].url})`}"></div> -->
              </div>
              <div class="column__item">
                <img class="column__item-img" :src="article?.gallery[8].url" alt="">
                <!-- <div class="column__item-img" :style="{'background-image':`url(${article?.gallery[8].url})`}"></div> -->
              </div>
              <div class="column__item">
                <img class="column__item-img" :src="article?.gallery[9].url" alt="">
                <!-- <div class="column__item-img" :style="{'background-image':`url(${article?.gallery[9].url})`}"></div> -->
              </div>
            </div><!-- /column -->
          </div><!-- /column-wrap -->
        </div><!-- columns -->
      </section>
      <section class="page_content brief_section transition_slide--right">
        <div class="brief_card">
          <button @click="goBack" class="brief_back_btn parallax"  data-depth='2'><Icon title="Go back" name="material-symbols-light:arrow-back-rounded"/></button>
          <div class="brief_card_tag parallax"  data-depth='1'>{{ article?.category }}</div>
          <div class="brief_card-content parallax"  data-depth='1.5'>
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
        </div>
    
      </section>
  
    </div>
    <!-- <Gallery
      class="bg-dot gallery_top"
      :imgs="article?.gallery_top"
    /> -->
    
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
    <div class="work_article-wrap">
      <article class="page_content" id="work_article">
        
        <section v-for="section in article?.article_blocks" class="article_section">
          <template v-for="(block, i) in section">
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
            <div v-else-if="['video', 'image'].includes(block.type)" class="article-image_block">
              <h3 class="article_section-heading2">{{ block.heading }}</h3>
              <div class="image_block-content article_p" v-html="block.content"></div>
              <div :class="{'image_block-image_frame': true, 'image_block-image_frame--large': block.size == 'l'}">
                <div class="image_block-image_wrap">
                  <video v-if="block.type === 'video'" class="image_block-image" :src="block.video_url" :controls="false" autoplay muted loop ></video>
                  <img v-else-if="block.type === 'image'" class="image_block-image" :src="block.img_url" :alt="block.alt">
                </div>
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
    </div>
  
    <!-- <Gallery v-if="article?.gallery_bottom" class="bg-dot gallery_bottom" :imgs="article?.gallery_bottom"/> -->
  
    <section class="section_more_work transition_slide--left">
      <ListWork :preview="true" title="More Works"></ListWork>
    </section>
    <section class="section-contact bg-dot previewArea transition_slide--right">
      <div class="link_about">
        <Text717/>
      </div>
      <ContactMsg class="contact-wrap"/>
    </section>
  </main>
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

const animateGallery = () => {

  const DOM = {
    sections: {
      columns: document.querySelector('.section--columns'),
      showcase: document.querySelector('#work_article'),
    },
    columns: document.querySelectorAll('.section--columns > .columns'),
    columnWraps: document.querySelectorAll('.section--columns .column-wrap'),
    itemsWrappers: document.querySelectorAll('.section--columns .column-wrap .column'),
    items: document.querySelectorAll('.section--columns .column__item'),
    images: document.querySelectorAll('.section--columns .column__item-img'),
  }
  // GSAP Scroll Triggers
  gsap.timeline({
    scrollTrigger: {
      start: 0,
      end: 'max',
      scrub: true
    }
  })
  .addLabel('start', 0)
  .to(DOM.sections.columns, {
    ease: 'none',
    startAt: {scale: .7},
    scale: 1,
  }, 'start')
  .to(DOM.sections.columns, {
    scrollTrigger: {
      trigger: DOM.sections.showcase,
      start: 0,
      end: 'top top',
      scrub: true
    },
    ease: 'power4.inOut',
    startAt: {
      opacity: 0,
    },
    opacity: 1,
    // repeat once (go back to "startAt" values)
    // yoyo: true,
    // repeat: 1
  }, 'start')
  .to(DOM.images, {
    ease: 'none',
    scale: 1.7,
  }, 'start')
  .to(DOM.items, {
    scrollTrigger: {
      trigger: DOM.sections.showcase,
      start: 0,
      end: 'top bottom',
      scrub: true
    },
    startAt: {
      x: (pos, target) => {
        return getTranslationDistance(target, 400)['x'];
      },
      y: (pos, target) => {
        return getTranslationDistance(target, 600)['y'];
      }
    },
    ease: 'none',
    x: (pos, target) => {
      return getTranslationDistance(target, 100)['x'];
    },
    y: 0
  }, 'start')
  .to(DOM.sections.columns, {
    scrollTrigger: {
      trigger: DOM.sections.showcase,
      start: 'top top',
      scrub: true
    },
    ease: 'power4.inOut',
    opacity: 0,
  })
}

const animateDepth = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "main",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.utils.toArray(".parallax").forEach(layer => {
    const depth = layer.dataset.depth;
    const movement = -(layer.offsetHeight * depth)
    tl.to(layer, {y: movement, ease: "none"}, 0)
  });
}

const animateImg = () => {
  const DOM = {
    blocks: document.querySelectorAll('.article-image_block'),
  }

  // GSAP Scroll Triggers
  DOM.blocks.forEach(block => {
    const imgWrap = block.querySelector('.image_block-image_wrap')
    const media = block.querySelector('.image_block-image')
    gsap.timeline({
      scrollTrigger: {
        trigger: block,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })
    .to(media, {
      scale: 1.1
    })
  })
}



onMounted(()=>{

  ScrollTrigger.create({
    trigger: "#work_article",
    start: "top top", 
    end: "bottom 40%",
    pin: ".article_anchor-wrap",
    // markers: true,
  });

  animateGallery()
  animateDepth()
  animateImg()
})
</script>

<style lang="scss" scoped>
@import url("~/assets/scss/pages/work.scss");


.brief_section{
  padding-bottom: 200vh;
}
.work_article-wrap{
  background: var(--color-bg);
  position: relative;
  z-index: 2;
  box-shadow: $shadow-block;
  border-top: 1px solid var(--color-text);
}

.section--columns {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
  pointer-events: none;
	width: 100%;
	height: 100vh;
  opacity: 0;
}

.columns {
	width: 100%;
	position: relative;
	display: flex;
	justify-content: var(--justify);
	gap: var(--gap);
	height: 100%;
	transform: rotate(var(--rotation));
	align-items: center;
}

.column-wrap {
	position: relative;
	z-index: 1;
	display: flex;
	flex-direction: column;
	padding: 5vh 0 15vh;
}

.column-wrap:nth-child(even) {
	margin-top: var(--offset);
}

.column {
	position: relative;
	display: block;
}

.column__item {
  --grid-item-width: 70vw;
	--grid-item-height: calc(var(--grid-item-width) * var(--ratio));
	width: var(--grid-item-width);
  outline: 1px solid var(--color-text);
  border: 10px solid var(--color-bg);
	position: relative;
	overflow: hidden;
	cursor: pointer;
	margin: 0 0 var(--gap) 0;
	z-index: 1;
}


.column__item-img {
	width: 100%;
	// height: 100%;
	background-size: cover;
	background-position: 50% 50%;
}

@include lg{
  .column__item {
    --grid-item-width: 32vw;
  }
}
</style>