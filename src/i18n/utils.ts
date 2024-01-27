import { defaultLang } from "./ui";

export const getLangFromUrl = (url: URL): string => {
  const lang = url.pathname.split("/")[0];
  return lang ?? defaultLang;
};
