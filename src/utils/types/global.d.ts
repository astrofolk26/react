// types/global.d.ts
export {};

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (
          opts: unknown,
          elementId: string | HTMLElement
        ) => void;
      };
    };
    googleTranslateElementInit: () => void;
  }
}
