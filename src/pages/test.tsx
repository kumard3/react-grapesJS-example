import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import grapesjsMJML from "grapesjs-mjml";
import React, { useEffect } from "react";
export default function Test() {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#email-editor",
      fromElement: true,
      avoidInlineStyle: false,
      panels: { defaults: [] },
      plugins: [grapesjsMJML],
      pluginsOpts: {
        [grapesjsMJML]: {},
      },
      height: "100%",
      blockManager: {
        appendTo: "#email-editor-blocks",
        

      },
    });
  }, []);
  return (
    <div className="grid grid-cols-[5fr,1fr] ">
      <div id="email-editor" className="h-full" />
      <div id="email-editor-blocks" />
    </div>
  );
}
