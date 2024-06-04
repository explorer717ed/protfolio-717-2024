<template>
<main>
  <section class="brief_section bg-dot">
    <div class="breadcrumb">
      <span class="breadcrumb_link">
        <NuxtLink to="/">Home</NuxtLink>
      </span>
      <span class="breadcrumb_divider">/</span>
      <span class="breadcrumb_link">Works</span>
      <span class="breadcrumb_divider">/</span>
      <span class="breadcrumb_link">Upgrading the Information Architecture of the Ministry of Justice Website</span>
    </div>
  
    <div class="brief_card">
      
      <button @click="goBack" class="brief_back_btn"><Icon title="Go back" name="material-symbols-light:arrow-left-alt"/></button>
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

  <article>
    <section class="article_section">
      <h2>Background</h2>
      <p class="article_p">In the university’s Capstone project, our client was the Digital Channels team of the Ministry of Justice. They recently completed the redesign and development of the “Care of Children” area within Family section of the ministry’s website. Because the redesign was outsourced, the Digital Channels team was eager to learn the strategies for extending the new design to the entire Family section, including applying the new visual style and reorganizing the web page structure.</p>
    </section>
    <section class="article_section">
      <h2>Problems</h2>
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
      <p>To find out how people categorize Family section pages and prioritize page content, the IA workshop was conducted with the participation of the Digital Channels team and policy advisors.</p>
      <div class="bg-grid">
        <h4>Card sorting</h4>
        <p>Categorize the cards with titles of web pages related to separation and divorce.</p>
        <h4>Title renaming</h4>
        <p>Ensure consistency in wording and grammar across the titles.</p>
        <h4>Content rearrangement</h4>
        <p>Rearrange the paragraphs of key pages.</p>
      </div>

      <div class="article_divider"></div>

      <h3>Information architecture principles : based on the IA workshop</h3>
      <ul>
        <li>
          <h3>Categorize by tasks</h3>
          <p class="article_p">Organize the pages by grouping relevant tasks together, making it easier for users to find the information they need based on the task they want to accomplish.</p>
        </li>
        <li>
          <h3>Consistency</h3>
          <p class="article_p">Make sure the consistency in the titles and contents across all pages, helping users understand and navigate the website more easily.</p>
        </li>
        <li>
          <h3>Focus the user on the task</h3>
          <p class="article_p">Ensure all relevant information for task completion is on a single page, eliminating the need to navigate to additional pages for supplementary information.</p>
        </li>
      </ul>

      <div class="article_divider"></div>
      
      <h3>Design system : built upon optimized Care of Children design</h3>
      <p class="article_p">A comprehensive design system was created by my team members Nicolette, Matias and Julia, incorporating components from the previous outsourced design of the Care of Children section.</p>
      <button>Design System Figma</button>
      
      <div class="article_divider"></div>

      <h3>Website prototype : showcasing our design system and IA principles</h3>
      <p>
        To demonstrate the usage of the design system and IA principles, we created a website prototype for the two areas within Family section: Separation & Divorce and Relationship Property. These areas were selected because they are the most visited pages according to Google Analytics.
        <br>
        An usability testing was conducted with our low-fidelity wireframe. Participants still found some wording hard to understand. To address this issue, we consulted with the ministry’s policy content experts and developed the guidelines of writing titles and page overviews.
      </p>
      <button>Website Prototype Figma</button>
    </section>
    <section class="article_section">
      <h2>Key Features</h2>
      <ul>
        <li>
          Simplified section map: The section map was re-arranged into a simpler and more consistent structure
          <img src="" alt="">
        </li>
        <li>
          Consistent titles: The titles have been renamed into a more consistent manner while maintain the original title’s wording, ensuring minimal transition effort for returning users.
          <img src="" alt="">
        </li>
        <li>
          Task-focused pages: The necessary information for each task was collected into a single page to avoid extra navigations for users.
          <img src="" alt="">
        </li>
        <li>
          Self-descriptive links: Links were made more self-descriptive so that users can easily understand the destination and purposes of each link, aiding their decision on whether to click.
          <img src="" alt="">
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

    <div class="article_divider"></div>
    <div class="article_divider"></div>

    <div class="aritcle_tags">
      <NuxtLink to="/work"># UX Cast Study</NuxtLink>
    </div>
    <button>Design System Figma</button>
    <button>Website Prototype Figma</button>
  </article>


  <section class="">
    <h2>More Works</h2>
    <ListWork :works="listWork"></ListWork>
  </section>
  <section class="home-section-contact bg-dot">
    <div class="contact-msg text-center">
      Drop me a line and discuss new projects~ <br>
      ✧◝(⁰▿⁰)◜✧ <br>
    </div>
    <div class="toolbar-contact">
      <button class="btn-round-icon">
        <Icon name="ion:mail-outline"/>
      </button>
      <button class="btn-round-icon">
        <Icon name="ion:social-linkedin-outline"/>
      </button>      
    </div>
  </section>
</main>
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
</script>

<style lang="scss" scoped>
@import url("~/assets/scss/pages/work.scss");


</style>