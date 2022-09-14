export const routes = {
  home: "/dvadesetjedan-web/",
  blog: "/dvadesetjedan-web/blog",
  community: "/dvadesetjedan-web/community",
  podcast: "/dvadesetjedan-web/podcast",
} as const;

export type Routes = keyof typeof routes;
