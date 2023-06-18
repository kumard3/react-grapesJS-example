// import React, { useState, useEffect } from "react";
// //@ts-ignore
// import grapesjs from "grapesjs";
// //@ts-ignore
// import gjsPresetWebPage from "grapesjs-preset-webpage";

// export default function Editor() {
//   const [editors, setEditor] = useState<any>();
//   let [htmlFileString, setHtmlFileString] = useState<any>();

// async function fetchHtml() {
//   setHtmlFileString(await (await fetch(`/test.html`)).text());
// }
// useEffect(() => {
//   fetchHtml();
// }, []);
//   useEffect(() => {
//     const editor = grapesjs.init({
//       height: "100%",
//       showOffsets: true,
//       noticeOnUnload: false,
//       storageManager: false,
//       container: "#gjs",
//       fromElement: true,
//       plugins: ["grapesjs-preset-webpage"],
//       pluginsOpts: {
//         "grapesjs-preset-webpage": {},
//       },
//       blockManager: {},
//     });
//     setEditor(editor);
//   }, []);

//   console.log(editors);
//   // console.log(htmlFileString);
//   return (
//     <div>
//       <div>
//         <div id="gjs"></div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useRef, useState } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import grapesjsPresetWebpage from "grapesjs-preset-webpage";
import PluginOptions from "./elements";
import grapesjsMJML from "grapesjs-mjml";

const App = () => {
  const editorRef = useRef(null);
  let [htmlFileString, setHtmlFileString] = useState<any>();

  async function fetchHtml() {
    setHtmlFileString(await (await fetch(`/test.html`)).text());
  }
  useEffect(() => {
    fetchHtml();
  }, []);
  // useEffect(() => {
  //   const editor = grapesjs.init({
  //     container: editorRef.current || undefined,
  //     plugins: [grapesjsPresetWebpage, PluginOptions],
  //     // Configuration options go here
  //   });

  //   return () => {
  //     editor.destroy();
  //   };
  // }, []);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#test",
      plugins: [grapesjsMJML, PluginOptions],

      // Configuration options go here
    });

    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <>
      <div id="test"> </div>
    </>
  );
};

export default App;
