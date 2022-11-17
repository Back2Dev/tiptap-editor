# tiptap-editor

### Install

```
npm i tiptap-editor
```

### Usage

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import TiptapEditor from "tiptap-editor";

const App = () => {
  return <TiptapEditor />;
};
export default App;
```

### Local development

Pull the repository to local
cd to 'tiptap-editor' folder

```
npm i
npm link
npm link  'test react folder'/node_modules/react
```

Then go to Test folder

```
npm link tiptap-editor
```

When you finish test remember to unlink by use

```
npm unlink tiptap-editor
```
