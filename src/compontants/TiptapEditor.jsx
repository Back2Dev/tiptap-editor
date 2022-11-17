import React from "react";
import Split from "react-split";

// icons
import {
  RiBold,
  RiItalic,
  RiStrikethrough,
  RiCodeSSlashLine,
  RiH1,
  RiH2,
  RiH3,
  RiH4,
  RiH5,
  RiH6,
  RiParagraph,
  RiListOrdered,
  RiListUnordered,
  RiCodeBoxLine,
  RiSeparator,
  RiTextWrap,
  RiFormatClear,
  RiArrowGoBackLine,
  RiArrowGoForwardLine,
} from "react-icons/ri";
// tiptap
import {
  FloatingMenu,
  BubbleMenu,
  useEditor,
  EditorContent,
  Editor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// html-to-pdfmake
import htmlToPdfmake from "html-to-pdfmake";
import pdfMake from "pdfmake/build/pdfmake";
pdfMake.fonts = {
  // download default Roboto font from cdnjs.com
  Roboto: {
    normal:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
    bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
    italics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
    bolditalics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
  },
};

const TiptapEditor = () => {
  const initHtml = `
    <h1>My title</h1>
    <p>
      This is a sentence with a <strong>bold word</strong>, <em>one in italic</em>,
      and <u>one with underline</u>. And finally <a href="https://www.somewhere.com">a link</a>.
    </p>
  `;
  const [code, setCode] = React.useState(initHtml);

  // Setup editor
  const editor = useEditor({
    extensions: [StarterKit],
    content: code,
    onUpdate: ({ editor }) => {
      setCode(editor.getHTML());
    },
  });

  // Convert html to pdfmake
  const makePdf = () => {
    let html = htmlToPdfmake(`<div>${code}</div>`);
    const docDefinition = { content: [html] };
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getDataUrl((dataUrl) => {
      const targetElement = document.getElementById("pdfView");
      targetElement.src = dataUrl;
    });
  };

  React.useEffect(() => {
    makePdf();
    console.log(code);
  }, [code]);

  return (
    <div className="container">
      <Split
        className="split"
        sizes={[60, 40]}
        minSize={200}
        expandToMin={false}
        gutterSize={8}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <div className="tiptap">
          {editor && (
            <BubbleMenu editor={editor} className="BubbleMenu">
              <div
                className="icon"
                onClick={() => editor.chain().focus().toggleBold().run()}
              >
                <RiBold />
              </div>
              <div
                className="icon"
                onClick={() => editor.chain().focus().toggleItalic().run()}
              >
                <RiItalic />
              </div>
              <div
                className="icon"
                onClick={() => editor.chain().focus().toggleStrike().run()}
              >
                <RiStrikethrough />
              </div>
            </BubbleMenu>
          )}
          <ToolBar editor={editor} />
          <EditorContent editor={editor} />
        </div>
        <iframe className="preview" id="pdfView" src="" />
      </Split>
    </div>
  );
};

export default TiptapEditor;

const ToolBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="Toolbar">
      <div
        className="icon"
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <RiBold />
      </div>
      <div
        className="icon"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <RiItalic />
      </div>
      <div
        className="icon"
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <RiStrikethrough />
      </div>
      <div className="divider"></div>
      <div
        className="icon"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <RiH1 />
      </div>
      <div
        className="icon"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <RiH2 />
      </div>
      <div
        className="icon"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        <RiH3 />
      </div>
      <div
        className="icon"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
      >
        <RiH4 />
      </div>
      <div
        className="icon"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
      >
        <RiH5 />
      </div>
      <div
        className="icon"
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
      >
        <RiH6 />
      </div>
      <div
        className="icon"
        onClick={() => editor.chain().focus().setParagraph().run()}
      >
        <RiParagraph />
      </div>
      <div className="divider"></div>
      <div
        className="icon"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <RiListOrdered />
      </div>
      <div
        className="icon"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <RiListUnordered />
      </div>
      <div
        className="icon"
        onClick={() => editor.chain().focus().toggleCode().run()}
      >
        <RiCodeSSlashLine />
      </div>
      <div
        className="icon"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        <RiCodeBoxLine />
      </div>
      <div
        className="icon"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <RiSeparator />
      </div>
      <div className="divider"></div>
      <hr />
      <div
        className="icon"
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        <RiTextWrap />
      </div>
      <div
        className="icon"
        onClick={() =>
          editor.chain().focus().unsetAllMarks().clearNodes().run()
        }
      >
        <RiFormatClear />
      </div>
      <div className="divider"></div>
      <div className="icon" onClick={() => editor.chain().focus().undo().run()}>
        <RiArrowGoBackLine />
      </div>
      <div className="icon" onClick={() => editor.chain().focus().redo().run()}>
        <RiArrowGoForwardLine />
      </div>
    </div>
  );
};
