import { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import './App.css';

function App() {
  const [data, setData] = useState('')
  const [showData, setShowData] = useState(false)
  return (
    <div>
      <button onClick={() => setShowData(!showData)}>{showData ? 'Hide' : 'Show'}</button>
      <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={ editor => {
              // You can store the "editor" and use when it is needed.
              console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event, editor ) => {
              const data = editor.getData();
              setData(data)
              console.log( { event, editor, data } );
          } }
          onBlur={ ( event, editor ) => {
              console.log( 'Blur.', editor );
          } }
          onFocus={ ( event, editor ) => {
              console.log( 'Focus.', editor );
          } }
      />
      <div>
        {showData ? ReactHtmlParser(data) : ''}
      </div>
    </div>
  );
}

export default App;
