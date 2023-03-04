import React from "react";
export { wrapRootElement } from "./src/apollo/wrapper";

const MagicScriptTag = () => {
  let codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem('color-mode');
      const hasPersistedPreference = typeof persistedColorPreference === 'string';
      // If the user has explicitly chosen light or dark,
      // let's use it. Otherwise, this value will be null.
      if (hasPersistedPreference) {
        return persistedColorPreference;
      }
      // If they haven't been explicit, let's check the media
      // query
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPreference = typeof mql.matches === 'boolean';
      if (hasMediaQueryPreference) {
        return mql.matches ? 'dark' : 'light';
      }
      // If they are using a browser/OS that doesn't support
      // color themes, let's default to 'light'.
      return 'light';
    }

    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    root.style.setProperty('--initial-color-mode', colorMode);


    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-835368541');
    gtag('event', 'conversion', {'send_to': 'AW-835368541/MEc3CL2zvr8DEN3sqo4D'});

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-NWDHZYYH85');
})()`;
  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NWDHZYYH85"
      ></script>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-835368541"
      ></script>
    </>
  );
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};
