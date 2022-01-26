import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import modulesToEditor from '../../helpers/prepareOrganizations';

const TextEditorComponent = ({ editorTextChanges, setEditorTextChanges }) => {
  return (
    <ReactQuill
      theme='snow'
      value={editorTextChanges}
      onChange={setEditorTextChanges}
      modules={modulesToEditor.modules}
      formats={modulesToEditor.formats}
    />
  );
};
export default TextEditorComponent;
