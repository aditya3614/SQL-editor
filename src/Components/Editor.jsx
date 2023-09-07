import React from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-min-noconflict/ext-language_tools";

const Editor = ({ setValue, value }) => {
  console.log(value+" editor called");
  return (
    <div className='w-full sm:mb-8 h-40   font-medium rounded-lg text-sm text-center bg-white'>
        <div className=''>
        <AceEditor
        id="editor"
        aria-label="editor"
        mode="mysql"
        theme="twilight"
        name="editor"
        width="100%"
        fontSize={25}
        minLines={6}
        maxLines={6}
        
        showPrintMargin={false}
        showGutter
        placeholder="Write your query here..."
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        value={value}
        onChange={(value) => setValue(value)}
        showLineNumbers
      />     
        </div>
       
       
    </div>
  )
}

export default Editor