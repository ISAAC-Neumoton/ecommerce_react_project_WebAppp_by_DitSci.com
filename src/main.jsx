import react from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ShopContextProvider from './Components/Context/ShopContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ShopContextProvider>
    <App />
  </ShopContextProvider>
  );


