# tiptap-editor

### Install

```
npm i tiptap-editor
```

### Usage

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import TiptapEditor from "b2b-tt-editor";

const App = () => {
  return <TiptapEditor />;
};
export default App;
```

### Local development

Pull the repository to local
cd to 'b2b-tt-editor' folder

```
npm i
npm link
npm link  'test react folder'/node_modules/react
```

Then go to Test folder

```
npm link b2b-tt-editor
```

When you finish test remember to unlink by use

```
npm unlink b2b-tt-editor
```
