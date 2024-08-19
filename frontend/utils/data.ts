export const workList = [
  { id: 'Kronos_Research', title: 'Kronos Research Website with Web3D', projectType: 'Freelance', projectScope: 'Front-end', imgUrl: '/temp/img/kronos/kronos_home.png' },
  { id: 'Upgrading_the_Information_Architecture_of_the_Ministry_of_Justice', title: 'Upgrading the Information Architecture of the Ministry of Justice Website', projectType: 'Master Degree', projectScope: 'UX', imgUrl: '/temp/img/moj/moj1.png' },
  { id: 'Environmental_Information_Open_Platform_and_CMS', title: 'Environmental Information Open Platform and CMS', projectType: 'Blueplanet Inc.', projectScope: 'Front-end', imgUrl: '/temp/img/epa/epa_home.png' },
  { id: 'Taipei_Citizen_Dashboard', title: 'Taipei Citizen Dashboard', projectType: 'Blueplanet Inc.', projectScope: 'Front-end', imgUrl: '/temp/img/dashboard/dashboard_home.png' },
]

export const worksDetail: Work[] = [
  {
    id: 'Upgrading_the_Information_Architecture_of_the_Ministry_of_Justice',
    title: 'Upgrading the Information Architecture of the Ministry of Justice Website',
    category: 'UX',
    metadata: [
      { label: 'My role', content: 'Research, Analysis, Workshop Hosting, Website Design, Usability Testing' },
      { label: 'Timeline', content: 'March - May, 2024' },
      { label: 'Scope', content: 'User Experience Design' }
    ],
    abstract: "An UX team project in Victoria University of Wellington, cooperating with the Ministry of Justice, involving information architecture, design system and website design.",
    tags: ['UX Case Study'],
    gallery: [
      { url: '/temp/img/moj/moj6.png', alt: '' },
      { url: '/temp/img/moj/moj2.png', alt: '' },
      { url: '/temp/img/moj/moj5.png', alt: '' },
      { url: '/temp/img/moj/moj4.png', alt: '' },
      { url: '/temp/img/moj/moj1.png', alt: '' },
      { url: '/temp/img/moj/moj9.png', alt: '' },
      { url: '/temp/img/moj/moj11.png', alt: '' },
      { url: '/temp/img/moj/moj3.png', alt: '' },
      { url: '/temp/img/moj/moj8.png', alt: '' },
      { url: '/temp/img/moj/moj10.png', alt: '' },
    ],
    article_blocks:[
      [
        { type: 'heading1', content: 'Background' },
        { type: 'paragraph', content: 'In the university’s Capstone project, our client was the Digital Channels team of the Ministry of Justice. They recently completed the redesign and development of the “Care of Children” area within Family section of the ministry’s website. Because the redesign was outsourced, the Digital Channels team was eager to learn the strategies for extending the new design to the entire Family section, including applying the new visual style and reorganizing the web page structure.' },
      ],
      [
        { type: 'heading1', content: 'Problems' },
        { type: 'card', content: `
          <q>I have to jump around a lot (between the website pages), and my attention is in all other places.</q>
          <p class="quote_cite">-- participant A</p>`,
        },
        { type: 'paragraph', content: 'We conducted a comparative usability testing to identify the pros and cons in both new and old design of the ministry’s website, and the main challenges were identified as bellow:' },
        { type: 'list', content: [
          { heading: 'Complicated information architecture', content: 'From our comparative usability test between new and old parts of website, we noticed the newly designed Care of Children area has a more complicated IA structure, which frustrated participants.' },
          { heading: 'Text-heavy content and legal terms', content: 'The old parts of the website contains dense legal instructions, leading to a lack of comprehension among users.' },
          { heading: 'Interconnected links and navigational dead ends', content: 'The website’s workflow is not smooth, requiring users to click through several links to complete a task or find desired information. Besides, users tended to encounter dead ends, forcing them to backtrack and search for more hints.' },
        ]},
      ],
      [
        { type: 'heading1', content: 'Goals' },
        { type: 'paragraph', content: 'Based on the ministry’s needs for upgrading website and usability challenges, the objective of this project were narrowed down:' },
        { type: 'list', content: [
          { heading: 'Re-arrange the website structure with a better navigation experience.', content: ''},
          { heading: 'Initiate the ministry staff the technics of upgrading the website.', content: ''},
        ]}
      ],
      [
        { type: 'heading1', content: 'Solutions' },
        { type: 'heading2', content: 'Information architecture workshop (IA Workshop)' },
        { type: 'paragraph', content: 'To find out how people categorize Family section pages and prioritize page content, the IA workshop was conducted with the participation of the Digital Channels team and policy advisors.' },
        { type: 'card', content: `
          <h4>Card sorting</h4>
          <p>Categorize the cards with titles of web pages related to separation and divorce.</p>
          <h4>Title renaming</h4>
          <p>Ensure consistency in wording and grammar across the titles.</p>
          <h4>Content rearrangement</h4>
          <p>Rearrange the paragraphs of key pages.</p>
        `},
        { type: 'divider' },
        { type: 'heading2', content: 'Information architecture principles : based on the IA workshop' },
        { type: 'list', content: [
          { heading: 'Categorize by tasks', content: 'Organize the pages by grouping relevant tasks together, making it easier for users to find the information they need based on the task they want to accomplish.' },
          { heading: 'Consistency', content: 'Make sure the consistency in the titles and contents across all pages, helping users understand and navigate the website more easily.' },
          { heading: 'Focus the user on the task', content: 'Ensure all relevant information for task completion is on a single page, eliminating the need to navigate to additional pages for supplementary information.' },
        ]},
        { type: 'divider' },
        { type: 'heading2', content: 'Design system : built upon optimized Care of Children design' },
        { type: 'paragraph', content: 'A comprehensive design system was created by my team members Nicolette, Matias and Julia, incorporating components from the previous outsourced design of the Care of Children section.' },
        { type: 'buttons', content: [
          { type: 'primary', label: 'Design System Figma', icon: 'material-symbols-light:open-in-new-rounded', href: 'https://www.figma.com/proto/arauwmGZDzv7KuQXNSxB2D/MOJ-Design-System-%26-Website-Prototype-(Copy)?page-id=2180%3A37633&node-id=2180-37635&viewport=663%2C461%2C0.02&t=zQ5eIVM2li6ysAK2-1&scaling=min-zoom&starting-point-node-id=2180%3A37635' },
        ]},
        { type: 'divider' },
        { type: 'heading2', content: 'Website prototype : showcasing our design system and IA principles' },
        { type: 'paragraph', content: 'To demonstrate the usage of the design system and IA principles, we created a website prototype for the two areas within Family section: Separation & Divorce and Relationship Property. These areas were selected because they are the most visited pages according to Google Analytics.' },
        { type: 'paragraph', content: 'An usability testing was conducted with our low-fidelity wireframe. Participants still found some wording hard to understand. To address this issue, we consulted with the ministry’s policy content experts and developed the guidelines of writing titles and page overviews.' },
        { type: 'buttons', content: [
          { type: 'primary', label: 'Website Prototype Figma', icon: 'material-symbols-light:open-in-new-rounded', href: 'https://www.figma.com/proto/arauwmGZDzv7KuQXNSxB2D/MOJ-Design-System-%26-Website-Prototype-(Copy)?page-id=671%3A5308&node-id=665-8701&viewport=88%2C422%2C0.03&t=muI098NpwF5rRdlY-1&scaling=min-zoom&starting-point-node-id=665%3A8701&show-proto-sidebar=1' },
        ]},
      ],
      [
        { type: "heading1", content: 'Key Features' },
        { type: "heading2", content: "Simplified section map"},
        { type: 'paragraph', content:  'The section map was re-arranged into a simpler and more consistent structure' },
        { type: "image", img_url: '/temp/img/moj/simplified_structure.png', alt: 'Simplified section map' },
        { type: "heading2", content: 'Consistent titles'},
        { type: 'paragraph', content: 'The titles have been renamed into a more consistent manner while maintain the original title’s wording, ensuring minimal transition effort for returning users.' },
        { type: "image", img_url: "/temp/img/moj/rename.png", alt:  "Consistent titles" },
        { type: "heading2", content: 'Task-focused pages'},
        { type: 'paragraph', content: 'The necessary information for each task was collected into a single page to avoid extra navigations for users.' },
        { type: "image", img_url: "/temp/img/moj/moj3.png", alt: "Task-focused pages" },
        { type: "heading2", content: 'Self-descriptive links'},
        { type: 'paragraph', content: 'Links were made more self-descriptive so that users can easily understand the destination and purposes of each link, aiding their decision on whether to click.' },
        { type: "image", img_url: "/temp/img/moj/self_desc_link.png", alt: "Self-descriptive links" },
      ],
      [
        { type: "heading1", content: 'Future Steps' },
        { type: "list", content: [
          { heading: "User testing with target users", content: "Conduct usability test with target users, such as people seeking separation-related legal supports, to evaluate the effectiveness of the new structure and wording." },
          { heading: "Online form", content: "Convert all forms in the ministry’s website to digital format, allowing users to complete without the need to print. Digital forms streamline the application process, keeping it  online and efficient. Additionally, online forms with progressive disclosure will prevent cognitive overload by presenting questions gradually." },
          { heading: "Branching logic", content: "Implement branching logic to provide a custom path based on a user's response. This will ensure users see the content relevant to their specific situation. The information gathered can be automatically brought into application forms, saving users time  and effort on replying repetitive questions." },
        ]}
      ]
    ],
    related_links: [
      { type: 'primary', label: 'Design System Figma', icon: 'material-symbols-light:open-in-new-rounded', href: 'https://www.figma.com/proto/arauwmGZDzv7KuQXNSxB2D/MOJ-Design-System-%26-Website-Prototype-(Copy)?page-id=2180%3A37633&node-id=2180-37635&viewport=663%2C461%2C0.02&t=zQ5eIVM2li6ysAK2-1&scaling=min-zoom&starting-point-node-id=2180%3A37635' },
      { type: 'primary', label: 'Website Prototype Figma', icon: 'material-symbols-light:open-in-new-rounded', href: 'https://www.figma.com/proto/arauwmGZDzv7KuQXNSxB2D/MOJ-Design-System-%26-Website-Prototype-(Copy)?page-id=671%3A5308&node-id=665-8701&viewport=88%2C422%2C0.03&t=muI098NpwF5rRdlY-1&scaling=min-zoom&starting-point-node-id=665%3A8701&show-proto-sidebar=1' },
    ],
  },
  {
    id: 'Kronos_Research',
    title: "Kronos Research Website with Web3D",
    category: "Front-end",
    abstract: "This freelance front-end project was a collaboration with the design company Brand Aspects. It utilized Nuxt3 framework and 3D effects using Three.js.",
    metadata: [
      { label: "Project Timeline and Team", content: "2023-2024. A team consisting of a project manager, designers, a front-end developer, and a back-end developer." },
      { label: "My Role", content: "Front-end development of the official website, writing API specification." },
      { label: "Techniques", content: "Nuxt3, Three.js, GSAP, TypeScript." },
    ],
    tags: [ "Web3D" ],
    gallery: [
      { url: '/temp/img/kronos/kronos_home.png', alt: '' },
      { url: '/temp/img/kronos/kronos_globe.png', alt: '' },
      { url: '/temp/img/kronos/kronos_mile.png', alt: '' },
      { url: '/temp/img/kronos/kronos_mile_s.png', alt: '' },
      { url: '/temp/img/kronos/kronos_particle_s.png', alt: '' },
      { url: '/temp/img/kronos/kronos_life.png', alt: '' },
      { url: '/temp/img/kronos/kronos_career.png', alt: '' },
      { url: '/temp/img/kronos/kronos_select.png', alt: '' },
      { url: '/temp/img/kronos/kronos_card.png', alt: '' },
      { url: '/temp/img/kronos/kronos_figure.png', alt: '' },
    ],
    article_blocks: [
      [
        { type: "heading1", content: 'Key Features' },
        { type: "heading2", content: 'Background distortion' },
        { type: 'paragraph', content: "credits: Daniel Velasquez" },
        { type: "video", size: 'l', video_url: '/temp/video/kronos_bg_distort.mp4', alt: 'Background distortion' },
        { type: "heading2", content: 'Earth and location pin' },
        { type: 'paragraph', content: "credits: GhostCatcg" },
        { type: "video", size: 'l', video_url: '/temp/video/kronos_earth.mp4', alt: 'Earth and location pin' },
        { type: "heading2", content: 'Particle blob animation' },
        { type: 'paragraph', content: "credits: Eli Fitch" },
        { type: "video", size: 'l', video_url: '/temp/video/kronos_particle_blob.mp4', alt: 'Particle blob animation' },
      ]
    ],
    related_links: [
      { label: "Launch Website", href: "https://kronosresearch.com/", type: "primary", icon: "material-symbols-light:open-in-new-rounded" },
    ]
  },
  {
    id: "Environmental_Information_Open_Platform_and_CMS",
    title: "Environmental Information Open Platform and CMS",
    category: "Front-end",
    abstract: "While working at BluePlanet Inc., our team developed an open data system. I was responsible for building the website with Nuxt2 and its content management system (CMS) with Vue2, ensuring accessibility and fetching API data for both the website and the CMS.",
    metadata: [
      { label: "Project Timeline and Team", content: "2021 - 2022. A team consisting of project managers, designers, front-end developers, and back-end developers."},
      { label: "My Role", content: "Front-end development of the platform and its CMS."},
      { label: "Techniques", content: "Nuxt2, Vue2, TypeScript, A11y" }
    ],
    tags: [ "A11y", "CMS" ],
    gallery: [
      { url: '/temp/img/epa/epa_ranking.png', alt: '' },
      { url: '/temp/img/epa/epa_detail.png', alt: '' },
      { url: '/temp/img/epa/epa_category.png', alt: '' },
      { url: '/temp/img/epa/epa_api.png', alt: '' },
      { url: '/temp/img/epa/epa_search.png', alt: '' },
      { url: '/temp/img/epa/epa_home.png', alt: '' },
      { url: '/temp/img/epa/epa_list.png', alt: '' },
      { url: '/temp/img/epa/epa_meta.png', alt: '' },
      { url: '/temp/img/epa/epa_qa.png', alt: '' },
      { url: '/temp/img/epa/bpgcms.png', alt: '' },
    ],
    article_blocks: [
      [
        { type: "heading1", content: 'Key Features' },
        { type: "heading2", content: 'Search and filter' },
        { type: 'paragraph', content: 'Flexible search and filter interface allow users to find target dataset by keywords, categories, tag, etc.' },
        { type: "image", img_url: '/temp/img/epa/epa_search.png', size: 'l', alt: 'search screen' },
        { type: "heading2", content: 'Accessibility' },
        { type: 'paragraph', content: 'The platform has level AA web content accessibility, enabling the usage of keyboards and screen readers.' },
        { type: "image", img_url: '/temp/img/epa/epa_sitemap.png', size: 'l', alt: 'sitemap' },
        { type: "heading2", content: 'Content management system' },
        { type: 'paragraph', content: 'The CMS is based on BluePlanet General Content Management System(BPGCMS). BPGCMS allows effective developing with the modularized components. It also ensures the usability and consistency.' },
        { type: "image", img_url: '/temp/img/epa/bpgcms.png', size: 'l', alt: 'bpgcms' },
      ]
    ],
    related_links: [
      { label: "Visit EPA Open Platform", href: "https://data.moenv.gov.tw/en", type: "primary", icon: "material-symbols-light:open-in-new-rounded" },
    ]
  },
  {
    id: "Taipei_Citizen_Dashboard",
    title: "Taipei Citizen Dashboard",
    category: "Front-end",
    abstract: "While working at BluePlanet Inc., I collaborated with our RD leader on the Taipei Citizen Dashboard project. In addition to fetching data and building the website with Nuxt, I was responsible for writing the API specifications. The charts on the website were created using BluePlanet's in-house chart plugin, Bpchart.",
    metadata: [
      { label: "Project Timeline and Team", content: "2021 - 2023. A team consisting of project managers, a designer, a front-end developer, and a back-end developer."},
      { label: "My Role", content: "Front-end development of the website and Writing API specification"},
      { label: "Techniques", content: "Nuxt2, TypeScript" }
    ],
    tags: [ "Nuxt", "Charts" ],
    gallery: [
      { url: '/temp/img/dashboard/dashboard_4charts.png', alt: '' },
      { url: '/temp/img/dashboard/dashboard_airmap.png', alt: '' },
      { url: '/temp/img/dashboard/dashboard_bubble.png', alt: '' },
      { url: '/temp/img/dashboard/dashboard_chart1.png', alt: '' },
      { url: '/temp/img/dashboard/dashboard_chart2.png', alt: '' },
      { url: '/temp/img/dashboard/dashboard_echarts.png', alt: '' },
      { url: '/temp/img/dashboard/dashboard_hotspot.png', alt: '' },
      { url: '/temp/img/dashboard/dashboard_map.png', alt: '' },
      { url: '/temp/img/dashboard/dashboard_tabble.png', alt: '' },
      { url: '/temp/img/dashboard/dashboard_pyramid.png', alt: '' },
    ],
    article_blocks: [
      [
        { type: "heading1", content: 'Key Features' },
        { type: "heading2", content: 'Various charts by Bpchart & Echarts' },
        { type: 'paragraph', content: 'The majority of charts in the Taipei Citizen Dashboard were created using BpChart, an in-house chart plugin developed by BluePlanet Inc., while a few others utilized ECharts.js.' },
        { type: "image", img_url: '/temp/img/dashboard/dashboard_chart1.png', size: 'l', alt: 'The pie chart and bar and line graph by Bpchart' },
        { type: "image", img_url: '/temp/img/dashboard/dashboard_chart2.png', size: 'l', alt: 'The line chart and bar chart by Bpchart' },
        { type: "image", img_url: '/temp/img/dashboard/dashboard_echarts.png', size: 'l', alt: 'The treemap by Echarts' },
        { type: "heading2", content: 'Graphical information layered on a leaflet map' },
        { type: "paragraph", content: 'Maps using Leaflet as the base visualizes target locations with points, lines, and areas based on the data type, accompanied by info cards that provide detailed information.' },
        { type: "image", img_url: '/temp/img/dashboard/dashboard_map.png', size: 'l', alt: 'the Taipei City map with road construction info' },
        { type: "heading2", content: 'Interactive svg ward map' },
        { type: "paragraph", content: 'SVG ward maps with interactive elements that display information for each ward, as well as for the entire Taipei City.' },
        { type: "image", img_url: '/temp/img/dashboard/dashboard_svg.png', size: 'l', alt: 'Taipei City ward map on Youbike 2.0 info' },
      ]
    ],
    related_links: [
      { label: "Visit Taipei Citizen Dashboard", href: "https://dashboard.gov.taipei/", type: "primary", icon: "material-symbols-light:open-in-new-rounded" },
    ]
  }
]

export interface Work {
  id: string;
  title: string;
  category: string;
  abstract: string;
  metadata: Metadatum[];
  tags: string[];
  gallery: { url: string, alt?: string }[]
  article_blocks: Articleblock[][];
  related_links?: Button[];
}

interface Articleblock {
  type: string;
  content?: Button[] | Content[] | string;
  img_url?: string;
  video_url?: string;
  alt?: string;
  heading?: string;
  size?: string;
}

interface Content {
  heading: string;
  content: string;
}

interface Button {
  type: "primary";
  label: string;
  icon: "material-symbols-light:open-in-new-rounded";
  href: string;
}

interface Gallery {
  url: string;
  size: 'l'|'s';
  alt: string;
}

interface Metadatum {
  label: string;
  content: string;
}