import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TodosContextProvider } from './components/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodosContextProvider>
    <App/>
  </TodosContextProvider>
);

