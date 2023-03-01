import React from 'react';
import { createRoot } from 'react-dom/client';
import Editor from './components/editor';

// ReactDOM.createRoot(<Editor />, document.getElementById('root'));
const root = createRoot(document.getElementById("root"));
root.render(<Editor />);