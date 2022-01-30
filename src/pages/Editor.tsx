import React, { useState, useEffect } from "react";
//@ts-ignore
import grapesjs from "grapesjs";
//@ts-ignore
import gjsPresetWebPage from "grapesjs-preset-webpage";

export default function Editor() {
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [gjsPresetWebPage],
      pluginsOpts: {
        gjsPresetWebPage: {},
      },
    });
    setEditor(editor);
  }, []);
  return (
    <div>
      <div id="editor"></div>
    </div>
  );
}
