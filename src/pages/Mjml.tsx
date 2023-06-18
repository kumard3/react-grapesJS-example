import React, { useEffect, useRef, useState } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import PluginOptions from "./elements";
import grapesjsMJML from "grapesjs-mjml";
//@ts-ignore
// import templateHTML from "../test.html";
const MJML = () => {
  const editorRef = useRef(null);
  const [templateHTML, setTemplateHTML] = useState("");
  let [htmlFileString, setHtmlFileString] = useState<any>();

  async function fetchHtml() {
    setHtmlFileString(await (await fetch(`/test.html`)).text());
  }
  useEffect(() => {
    fetchHtml();
  }, []);

  useEffect(() => {
    const editor = grapesjs.init({
      storageManager: false,
      container: "#gjs",
      fromElement: true,
      plugins: [grapesjsMJML],
      pluginsOpts: {
        "grapesjs-preset-newsletter": {
          modalLabelImport: "Paste all your code here below and click import",
          modalLabelExport: "Copy the code and use it wherever you want",
          importPlaceholder:
            '<table class="table"><tr><td class="cell">Hello world!</td></tr></table>',
          cellStyle: {
            "font-size": "12px",
            "font-weight": 300,
            "vertical-align": "top",
            color: "rgb(111, 119, 125)",
            margin: 0,
            padding: 0,
          },
        },
      },
    });

    return () => {
      editor.destroy();
    };
  }, []);
  console.log(htmlFileString);
  return (
    <div id="gjs">
      <div  dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
    </div>
  );
};

export default MJML;

// import React, { useEffect, useRef, useState } from "react";
// import grapesjs from "grapesjs";
// import "grapesjs/dist/css/grapes.min.css";

// const MJML = () => {
//   const editorRef = useRef(null);
// const [templateHTML, setTemplateHTML] = useState("");
// let [htmlFileString, setHtmlFileString] = useState<any>();

// async function fetchHtml() {
//   setHtmlFileString(await (await fetch(`/test.html`)).text());
// }
// useEffect(() => {
//   fetchHtml();
// }, []);

//   useEffect(() => {
//     const editor = grapesjs.init({
//       //@ts-ignore
//       container: "#gjs",
//       fromElement: true,
//       plugins: ["grapesjs-preset-newsletter"],
//       pluginsOpts: {
//         "grapesjs-preset-newsletter": {
//           modalLabelImport: "Paste all your code here below and click import",
//           modalLabelExport: "Copy the code and use it wherever you want",
//           importPlaceholder:
//             '<table class="table"><tr><td class="cell">Hello world!</td></tr></table>',
//           cellStyle: {
//             "font-size": "12px",
//             "font-weight": 300,
//             "vertical-align": "top",
//             color: "rgb(111, 119, 125)",
//             margin: 0,
//             padding: 0,
//           },
//         },
//       },
//       // Additional configuration options for GrapesJS
//     });

//     return () => {
//       editor.destroy();
//     };
//   }, []);

//   return (
//     <div>
//       <div id="#gjs">
//         {/* <div dangerouslySetInnerHTML={{ __html: htmlFileString }} /> */}
//       </div>
//     </div>
//   );
// };

// export default MJML;
