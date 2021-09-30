import React , {useState} from 'react';
import 'codemirror/lib/codemirror.css';// css needed to create editor 
import 'codemirror/theme/material.css'; // all css needed for material thing
//import packages for language needed for creating editor
import 'codemirror/mode/xml/xml'; //in  codemiror xml treat as HTML
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import {Controlled as CodeMirror} from 'react-codemirror2' /*Controller is editor which has controll over 
input and output onCHnge handlers*/
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompressAlt, faExpandAlt} from '@fortawesome/free-solid-svg-icons'

export default function Editor(props){
   

    //destructering from props
    const {language, displayName, value, onChange, } = props;
    const [open, setOpen] = useState('')
    function handleChange(editor, data, value){
        onChange(value)

    }
    return(
        // ${open ? '' : 'collapsed'} => is for open/ closed button 
        <div className= {`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                {displayName}
                <button 
                type = "button"
                className = "expand-collapsed-btn"
                onClick = {()=> setOpen(prevOpen => !prevOpen)} >
                    < FontAwesomeIcon icon = {open ? faCompressAlt :  faExpandAlt} />
                </button>

            </div>
            <CodeMirror
              value={value}
              options={{
                  lineWrapping : true,
                  lint : true,
                  mode : language,
                  lineNumbers : true,
                  theme : 'material',
                }}
              onBeforeChange={handleChange}
        />
            
    </div>
    )
 
}
