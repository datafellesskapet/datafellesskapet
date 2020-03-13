module.exports = {
  // https://v1.vuepress.vuejs.org/config/#title
  title: "Datafellesskapet",
  // https://v1.vuepress.vuejs.org/config/#description
  description: "Datafellesskapet",
  // https://v1.vuepress.vuejs.org/config/#dest
  dest: "build",
  // https://v1.vuepress.vuejs.org/config/#base
  base: "/",
  // https://v1.vuepress.vuejs.org/config/#head
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Merriweather:300&display=swap"
      }
    ],
    // ["link", {
    //   rel: "shortcut icon",
    //   href: ""
    // }],
    [
      "meta",
      {
        name: "theme-color",
        content: "#00509e"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
      }
    ]
  ],
  // https://v1.vuepress.vuejs.org/theme/default-theme-config.html
  themeConfig: {
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#git-repo-and-edit-links
    docsDir: "docs"
    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html#navbar
    // nav: [{
    //   text: "Home",
    //   link: "/"
    // }]
  },
  // https://v1.vuepress.vuejs.org/plugin/
  plugins: [
    [
      "vuepress-plugin-sitemap",
      {
        hostname: "https://datafellesskapet.no"
      }
    ]
  ]
};
