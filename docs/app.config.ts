// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'Muhammad Azlan Shah',
    description: 'Documentation for my projects.',
    image: 'https://avatars.githubusercontent.com/u/80623330?v=4',
    socials: {
      github: 'babyyoda777',
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'Docs',
      owner: 'babyyoda777',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
