import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "代码笔记",
      icon: "note",
      prefix: "posts/",
      // collapsible: true,
      children: [
        {
          text: "跨平台开发",
          icon: "relation",
          prefix: "cross-platform/",
          link: "cross-platform/",
          // children: ["Flutter/", "ReactNative/"],
        },
        {
          text: "前端开发",
          icon: "code",
          prefix: "Web/",
          link: "Web/",
          // children: ["Browser/", "JavaScript/", "CSS/", "node/", "Vue/"],
        },
        {
          text: "Linux",
          icon: "linux",
          prefix: "Linux/",
          link: "Linux/",
        },
      ],
    },
    {
      text: "软件/工具教程",
      icon: "software",
      prefix: "tutorial/",
      link: "tutorial",
    },
    {
      text: "博客相关",
      icon: "blog",
      prefix: "blog/",
      link: "blog/",
    },
    {
      text: "站点收藏",
      icon: "sitemap",
      prefix: "site",
      link: "site",
      children: "structure",
    },
    {
      text: "随笔",
      icon: "flower",
      prefix: "private/",
      children: "structure",
    },
    {
      text: "关于",
      icon: "info",
      prefix: "about/",
      link: "about",
    },
  ],
  "/posts/Linux/": "structure",
  "/posts/cross-platform/Flutter/": "structure",
  "/posts/cross-platform/ReactNative/": "structure",
  "/posts/Web/": "structure",
  "/site/": "structure",
  "/blog": "structure",
  "/tutorial": "structure",
});
