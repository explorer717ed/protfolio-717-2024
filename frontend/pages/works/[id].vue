<template>
  <ToolbarTop/>
  <div class="bg-dot">
    <div class="breadcrumb">
      <span class="breadcrumb_link">
        <NuxtLink to="/">Home</NuxtLink>
      </span>
      <span class="breadcrumb_divider">/</span>
      <span class="breadcrumb_link">Works</span>
      <span class="breadcrumb_divider">/</span>
      <span class="breadcrumb_link">Upgrading the Information Architecture of the Ministry of Justice Website</span>
    </div>
    <section class="page_content brief_section">
    
      <div class="brief_card">
        
        <button @click="goBack" class="brief_back_btn"><Icon title="Go back" name="material-symbols-light:arrow-back-rounded"/></button>
        <div class="brief_card_tag">Case Study</div>
        <h1>Upgrading the Information Architecture of the Ministry of Justice Website</h1>
        <ul class="brief_feature">
          <li class="brief_feature_item">
            My role: <br>
            Research, Analysis, Workshop Hosting, Website Design, Usability Testing
          </li>
          <li class="brief_feature_item">
            Timeline: <br>
            March - May, 2024
          </li>
          <li class="brief_feature_item">
            Scope: <br>
            User Experience Design
          </li>
        </ul>
        <!-- <p class="brief_desc">
          A freelance project implementing Three.js. A freelance project implementing Three.js. A freelance project implementing Three.js. A freelance project implementing Three.js. A freelance project implementing Three.js. A freelance project implementing Three.js. A freelance project implementing Three.js.
        </p> -->
    
        <p class="brief_tags">
          <NuxtLink to="/work">
            #UX Case Study
          </NuxtLink>
        </p>
      </div>
  
    </section>

  </div>
  <Gallery
    class="bg-dot gallery_top"
    :imgs="listImgTop"
  />

  <article class="page_content">
    <section class="article_section">
      <h2>Background</h2>
      <p class="article_p">In the university’s Capstone project, our client was the Digital Channels team of the Ministry of Justice. They recently completed the redesign and development of the “Care of Children” area within Family section of the ministry’s website. Because the redesign was outsourced, the Digital Channels team was eager to learn the strategies for extending the new design to the entire Family section, including applying the new visual style and reorganizing the web page structure.</p>
    </section>
    <section class="article_section">
      <h2>Problems</h2>
      <div class="article_quote bg-grid">
        <q>I have to jump around a lot (between the website pages), and my attention is in all other places.</q>
        <p class="quote_cite">~~ participant A</p>
      </div>
      <p class="article_p">We conducted a comparative usability testing to identify the pros and cons in both new and old design of the ministry’s website, and the main challenges were identified as bellow:</p>
      <ul>
        <li>
          <h3>Complicated information architecture</h3>
          <p class="article_p">From our comparative usability test between new and old parts of website, we noticed the newly designed Care of Children area has a more complicated IA structure, which frustrated participants.</p>
        </li>
        <li>
          <h3>Text-heavy content and legal terms</h3>
          <p class="article_p">The old parts of the website contains dense legal instructions, leading to a lack of comprehension among users.</p>
        </li>
        <li>
          <h3>Interconnected links and navigational dead ends</h3>
          <p class="article_p">The website’s workflow is not smooth, requiring users to click through several links to complete a task or find desired information. Besides, users tended to encounter dead ends, forcing them to backtrack and search for more hints.</p>
        </li>
      </ul>
    </section>
    <section class="article_section">
      <h2>Goals</h2>
      <p class="article_p">Based on the ministry’s needs for upgrading website and usability challenges, the objective of this project were narrowed down:</p>
      <ul>
        <li><h3>Re-arrange the website structure with a better navigation experience.</h3></li>
        <li><h3>Initiate the ministry staff the technics of upgrading the website.</h3></li>
      </ul>
    </section>
    <section class="article_section">
      <h2>Solutions</h2>
      <h3>Information architecture workshop (IA Workshop)</h3>
      <p class="article_p">To find out how people categorize Family section pages and prioritize page content, the IA workshop was conducted with the participation of the Digital Channels team and policy advisors.</p>
      <div class="article_highlight bg-grid full-width">
        <h4>Card sorting</h4>
        <p class="highlight_p">Categorize the cards with titles of web pages related to separation and divorce.</p>
        <h4>Title renaming</h4>
        <p class="highlight_p">Ensure consistency in wording and grammar across the titles.</p>
        <h4>Content rearrangement</h4>
        <p class="highlight_p">Rearrange the paragraphs of key pages.</p>
      </div>

      <hr class="article_divider"></hr>

      <h3>Information architecture principles : based on the IA workshop</h3>
      <ul>
        <li>
          <h4>Categorize by tasks</h4>
          <p class="article_p">Organize the pages by grouping relevant tasks together, making it easier for users to find the information they need based on the task they want to accomplish.</p>
        </li>
        <li>
          <h4>Consistency</h4>
          <p class="article_p">Make sure the consistency in the titles and contents across all pages, helping users understand and navigate the website more easily.</p>
        </li>
        <li>
          <h4>Focus the user on the task</h4>
          <p class="article_p">Ensure all relevant information for task completion is on a single page, eliminating the need to navigate to additional pages for supplementary information.</p>
        </li>
      </ul>

      <hr class="article_divider"></hr>
      
      <h3>Design system : built upon optimized Care of Children design</h3>
      <p class="article_p">A comprehensive design system was created by my team members Nicolette, Matias and Julia, incorporating components from the previous outsourced design of the Care of Children section.</p>
      <div class="p_btns">
        <a href="https://www.figma.com/proto/arauwmGZDzv7KuQXNSxB2D/MOJ-Design-System-%26-Website-Prototype-(Copy)?page-id=2180%3A37633&node-id=2180-37635&viewport=663%2C461%2C0.02&t=zQ5eIVM2li6ysAK2-1&scaling=min-zoom&starting-point-node-id=2180%3A37635" target="_blank" rel="noopener noreferrer"
          class="btn btn_primary"
        >
          Design System Figma
          <Icon name="material-symbols-light:open-in-new-rounded"/>
        </a>
      </div>
      <hr class="article_divider"></hr>

      <h3>Website prototype : showcasing our design system and IA principles</h3>
      <p class="article_p">
        To demonstrate the usage of the design system and IA principles, we created a website prototype for the two areas within Family section: Separation & Divorce and Relationship Property. These areas were selected because they are the most visited pages according to Google Analytics.
      </p>
      <p class="article_p">
        An usability testing was conducted with our low-fidelity wireframe. Participants still found some wording hard to understand. To address this issue, we consulted with the ministry’s policy content experts and developed the guidelines of writing titles and page overviews.
      </p>
      <div class="p_btns">
        <a href="https://www.figma.com/proto/arauwmGZDzv7KuQXNSxB2D/MOJ-Design-System-%26-Website-Prototype-(Copy)?page-id=671%3A5308&node-id=665-8701&viewport=88%2C422%2C0.03&t=muI098NpwF5rRdlY-1&scaling=min-zoom&starting-point-node-id=665%3A8701&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer"
          class="btn btn_primary"
        >
          Website Prototype Figma
          <Icon name="material-symbols-light:open-in-new-rounded"/>
        </a>
      </div>
    </section>
    <section class="article_section">
      <h2>Key Features</h2>
      <ul class="list">
        <li v-for="feat in listFeatures" class="list_item">
          <h3 class="list_item_title">{{ feat.title }}:</h3>
          <p class="list_feature_desc">{{ feat.desc }}</p>
          <ImgExpand :src="feat.imgSrc" :alt="feat.imgAlt"/>
        </li>
      </ul>
    </section>

    <section class="article_section">
      <h2>Future Steps</h2>
      <ul>
        <li>
          <h3>User testing with target users</h3>
          <p class="article_p">Conduct usability test with target users, such as people seeking separation-related legal supports, to evaluate the effectiveness of the new structure and wording.</p>
        </li>
        <li>
          <h3>Online form</h3>
          <p class="article_p">Convert all forms in the ministry’s website to digital format, allowing users to complete without the need to print. Digital forms streamline the application process, keeping it  online and efficient. Additionally, online forms with progressive disclosure will prevent cognitive overload by presenting questions gradually.</p>
        </li>
        <li>
          <h3>Branching logic</h3>
          <p class="article_p">Implement branching logic to provide a custom path based on a user's response. This will ensure users see the content relevant to their specific situation. The information gathered can be automatically brought into application forms, saving users time  and effort on replying repetitive questions.</p>
        </li>
      </ul>
    </section>

    <hr class="article_divider article_divider--large"></hr>

    <div class="aritcle_tags">
      <NuxtLink to="/work"># UX Cast Study</NuxtLink>
    </div>

    <div class="p_btns">
      <a href="https://www.figma.com/proto/arauwmGZDzv7KuQXNSxB2D/MOJ-Design-System-%26-Website-Prototype-(Copy)?page-id=2180%3A37633&node-id=2180-37635&viewport=663%2C461%2C0.02&t=zQ5eIVM2li6ysAK2-1&scaling=min-zoom&starting-point-node-id=2180%3A37635" target="_blank" rel="noopener noreferrer"
        class="btn btn_primary"
      >
        Design System Figma
        <Icon name="material-symbols-light:open-in-new-rounded"/>
      </a>
      <a href="https://www.figma.com/proto/arauwmGZDzv7KuQXNSxB2D/MOJ-Design-System-%26-Website-Prototype-(Copy)?page-id=671%3A5308&node-id=665-8701&viewport=88%2C422%2C0.03&t=muI098NpwF5rRdlY-1&scaling=min-zoom&starting-point-node-id=665%3A8701&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer"
        class="btn btn_primary"
      >
        Website Prototype Figma
        <Icon name="material-symbols-light:open-in-new-rounded"/>
      </a>
    </div>
  </article>

  <Gallery class="bg-dot gallery_bottom" :imgs="listImgBottom"/>

  <section class="section_more_work">
    <h2>More Works</h2>
    <ListWork :works="listWork"></ListWork>
  </section>
  <section class="section-contact bg-dot">
    <div class="link_about">
      <Text717/>
    </div>
    <div class="contact-msg text-center">
      Drop me a line and discuss new projects~ <br>
      ✧◝(⁰▿⁰)◜✧ <br>
    </div>
    <div class="toolbar-contact">
      <button class="btn-round-icon">
        <Icon name="material-symbols-light:mail-outline-rounded"/>
      </button>
      <button class="btn-round-icon">
        <Icon name="ion:social-linkedin-outline"/>
      </button>      
    </div>
  </section>
</template>

<script lang="ts" setup>

useHead({
  title: 'The Work Name'
})

const router = useRouter()


const listWork = ref([
  { id: 'kronos-research', title: 'Kronos Research', projectType: 'Freelance', projectScope: 'Frontend' },
  { id: 'three-js-journey-design-system', title: 'Three.js Journey Design System', projectType: 'Personal', projectScope: 'UX' },
  { id: 'gary-tu', title: 'Gary Tu', projectType: 'Freelance', projectScope: 'Frontend' },
  { id: 'epa-opendata', title: 'EPA Opendata', projectType: 'Blueplanet Inc. Project', projectScope: 'Frontend' },
  { id: 'fragment', title: 'Fragment', projectType: 'Personal', projectScope: 'Frontend' },

])
const goBack = () => {
  router.go(-1)
}

const listImgTop = ref([
  { url: '/temp/img/moj/moj1.png', size: 'l', alt: '' },
  { url: '/temp/img/moj/moj2.png', size: 's', alt: '' },
  { url: '/temp/img/moj/moj5.png', size: 's', alt: '' },
  { url: '/temp/img/moj/moj4.png', size: 's', alt: '' },
  { url: '/temp/img/moj/moj6.png', size: 's', alt: '' },
  { url: '/temp/img/moj/moj3.png', size: 'l', alt: '' },
])

const listImgBottom = ref([
  { url: '/temp/img/moj/moj9.png', size: 'l', alt: '' },
  { url: '/temp/img/moj/moj8.png', size: 's', alt: '' },
  { url: '/temp/img/moj/moj11.png', size: 's', alt: '' },
  { url: '/temp/img/moj/moj10.png', size: 'l', alt: '' },
  { url: '/temp/img/moj/moj7.png', size: 's', alt: '' },
  { url: '/temp/img/moj/moj12.png', size: 's', alt: '' },
])

const listFeatures = ref([
  { 
    title: "Simplified section map",
    desc: "The section map was re-arranged into a simpler and more consistent structure",
    imgSrc: "/temp/img/moj/simplified_structure.png",
    imgAlt: "Simplified section map"
  },
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
</script>

<style lang="scss" scoped>
@import url("~/assets/scss/pages/work.scss");


</style>