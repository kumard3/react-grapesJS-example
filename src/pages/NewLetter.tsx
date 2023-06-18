import "grapesjs-preset-newsletter";
import  "grapesjs-mjml";
import { GrapesjsReact } from "grapesjs-react";
import PluginOptions from "./elements";

export const Newsletter = () => {
  return (
    <GrapesjsReact
      id="grapesjs-react"
      plugins={["grapesjs-mjml",PluginOptions]}
      // dragMode="translate"

      blockManager={{
        blocks: [],
      }}
      children={
        <div>
          <h1>Newsletter</h1>
        </div>
      }
    />
  );
};
