import React,{useState,useEffect} from 'react';
//@ts-ignore
import grapesjs from 'grapesjs'
export default function Editor() {

    const [editor ,setEditor] = useState(null);
useEffect(()=>{
const editor = grapesjs.init({
    container:"#editor",
})
    setEditor(editor);

},[])
  return (
  <div>
<div id="editor"></div>
  </div>)
}
