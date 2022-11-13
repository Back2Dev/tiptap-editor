import React from "react";
import Split from "react-split";

const TiptapEditor = () => {
  return (
    <div className="container">
      <Split className="split" sizes={[50, 50]} minSize={0}>
        <div className="tiptap">tiptap</div>
        <div className="preview">preview</div>
      </Split>
    </div>
  );
};

export default TiptapEditor;
