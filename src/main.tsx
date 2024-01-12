import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.scss';
import NavContext from './contexts/NavContext';
import FoodContext from './contexts/FoodContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FoodContext>
      <NavContext>
        <App/>
      </NavContext>
    </FoodContext>
  </React.StrictMode>,
)
