import React from 'react';
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import router from './route/Routes';


function App() {
  return (
    <div id={'app-container'}>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
