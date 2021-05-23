import React from 'react';

import Header from './components/header/header-component';
import ModulesPreview from './components/modules/modules-component' ;


import './App.css';

function App() {
  return (
    <div className="body">
      <Header />
      <ModulesPreview className="modulesPreview"></ModulesPreview>
    </div>
  );
}

export default App;
