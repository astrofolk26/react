// components/GoogleTranslate.tsx
"use client";

import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (document.getElementById("google-translate-script")) return;

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    const selectEl = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = lang;
      selectEl.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div>
      <select onChange={handleChange} className="p-2 rounded border">
        <option className="bg-[var(--background)]" value="">
          🌐 Select Language
        </option>
        <option className="bg-[var(--background)]" value="en">
          English
        </option>
        <option className="bg-[var(--background)]" value="hi">
          Hindi
        </option>
      </select>

      {/* Hidden native Google Translate widget */}
      <div id="google_translate_element" style={{ display: "none" }} />
    </div>
  );
}
