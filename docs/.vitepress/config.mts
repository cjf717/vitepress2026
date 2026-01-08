import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "blog2026 project",
  description: "vitepress2026示例",
  // base: "/vitepress2026/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "示例", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "示例",
        items: [
          { text: "Markdown 示例", link: "/markdown-examples" },
          { text: "Runtime API 示例", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://cjf717.github.io/vitepress2026/" }],
  },
});
