import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

/**
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vitepress2026",
  description: "vitepress2026示例",
  base: "/",
  head: [["link", { rel: "icon", href: "/vitepress-logo-mini.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "示例", link: "/markdown-examples" },
      { text: "新闻", link: "/news/" },
      { text: "packages示例", link: "/packages/" },
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
    socialLinks: [{ icon: "github", link: "https://vitepress.dev/zh/" }],
  },
});
*/

const vitePressOptions = {
  // VitePress's options here...
  title: "vitepress2026",
  description: "vitepress2026示例",
  base: "/",
  // head: [["link", { rel: "icon", href: "/vitepress-logo-mini.svg" }, ""]],
  head: [["link", { rel: "icon", href: "/vitepres-logo-mini.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "示例", link: "/markdown-examples" },
      { text: "新闻", link: "/news/" },
      { text: "packages示例", link: "/packages/" },
    ],
  },
};

const vitePressSidebarOptions = [
  // VitePress Sidebar's options here...
  {
    documentRootPath: "/docs/",
    collapsed: true,
    capitalizeFirst: true,
  },
  {
    documentRootPath: "docs",
    scanStartPath: "news",
    basePath: "/news/",
    resolvePath: "/news/",
    useTitleFromFileHeading: true,
    collapsed: true,
    capitalizeFirst: true,
  },
];

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
