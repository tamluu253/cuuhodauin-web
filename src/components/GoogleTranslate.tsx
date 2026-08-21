'use client';

import { useEffect } from 'react';

export default function GoogleTranslate() {
  useEffect(() => {
    // Inject Google Translate Script
    const addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);

    // Initialization callback
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: 'vi',
          includedLanguages: 'vi,en,zh-CN,ja,km,ko,lo,th',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };
  }, []);

  return <div id="google_translate_element" className="hidden"></div>;
}
