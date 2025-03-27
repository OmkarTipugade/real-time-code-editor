import React, { useEffect, useRef } from "react";
import "codemirror/theme/monokai.css";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/addon/edit/closebrackets.js";
import "codemirror/addon/edit/closetag.js";
import "codemirror/lib/codemirror.css";
import CodeMirror from "codemirror";
import ACTIONS from "../../actions";

const CodeEditor = ({ socketRef, roomId, onCodeChange }) => {
  const editorRef = useRef(null);
  useEffect(() => {
    // Initialize CodeMirror
    const init = () => {
      const editor = CodeMirror.fromTextArea(
        document.getElementById("editor"),
        {
          mode: { name: "javascript", json: true },
          theme: "monokai",
          tabSize: 4,
          autoCloseBrackets: true,
          autoCloseTags: true,
          lineNumbers: true,
        }
      );
      editorRef.current = editor;
      editorRef.current.on(ACTIONS.CHANGE, (instance, changes) => {
        const { origin } = changes;
        const code = instance.getValue();
        onCodeChange(code);
        if (origin !== "setValue") {
          socketRef.current.emit(ACTIONS.CODE_CHANGE, {
            roomId,
            code,
          });
        }
      });
    };

    init();

    // Cleanup function
  }, []);

  // sync code when the roomId changes
  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null) {
          editorRef.current.setValue(code);
        }
      });
    }
    return () => {
      if (socketRef.current) {
        socketRef.current.off(ACTIONS.CODE_CHANGE);
      }
    };
  }, [socketRef.current]);

  return (
    <>
      <textarea
        id="editor"
        className="border border-black p-2 rounded-md h-full .CodeMirror-scroll .CodeMirror"
      ></textarea>
    </>
  );
};

export default CodeEditor;
