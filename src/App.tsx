import React from 'react';
import './App.css';
import { useRoutes,BrowserRouter as Router} from 'react-router-dom';
import { router } from './router/router';


function App() {
const content=useRoutes(router);

  return (
    <>
    {content}
    </>
  );
}

export default App;

