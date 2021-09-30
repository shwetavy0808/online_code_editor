import react, { useState, useEffect } from "react";
import { clearTimeout } from "timers";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";


function App() {
  const [html, setHtml]  = useLocalStorage('html','')
  const [css, setCss]  = useLocalStorage('css','')
  const [javascript, setJavascript]  = useLocalStorage('javascript','')
  const [srcDoc, setSourceDoc ] = useLocalStorage('')

  useEffect(()=>{
    //craete timeout
    //moved this timeout in useEffect
    //define source tag in 250ms 
    //what if we change html,css,javascript during 250ms 
    const timeout = setTimeout(()=>{
      //caling function 
      setSourceDoc(
        `
  <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${javascript}</script>
  </html>
  `
  )

    },250)// after 250ms it will run the code if as user will chnage while typing each time browser need to  restart
    //and it will slow down app process

    //return () => {clearTimeout(timeout)}
   },//for html, css,js changes
  [html,css,javascript]
  )

  //To render down above html, css, js in below iframe we need source doc
  //const srcDoc = 

  return (
    <>
    <div className = "pane top-pane">
 
     <Editor
     language = "xml"
     displayName = "HTML"
     value = {html}
     onChange = {setHtml}
     />  

     <Editor
     language = "xml"
     displayName = "CSS"
     value = {css}
     onChange = {setCss}
     />

     <Editor
     language = "xml"
     displayName = "javaScript"
     value = {javascript}
     onChange = {setJavascript}
     />
    </div>
    <div className = "pane">
      <iframe
      srcDoc = {srcDoc}
      title="Output"
      sandbox="allow-Scripts"//It's for security ,it should not accept other thing like doc cookies such like that
      frameBorder= "0"
      width="100%"
      height= "100%"
      />
    </div>
    </>
  )
}

export default App;
