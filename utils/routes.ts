export const routes = {
  home: "/",
  blog: "/blog",
  podcast: "/podcast",
} as const;

export type Routes = keyof typeof routes;
