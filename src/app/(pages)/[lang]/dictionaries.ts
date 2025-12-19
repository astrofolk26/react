import "server-only";

const dictionaries = {
  "en-in": () =>
    import("../../../dictionaries/en.json").then((module) => module.default),
  hi: () =>
    import("../../../dictionaries/hi.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en-in" | "hi") =>
  dictionaries[locale]();
