import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"; //in whole project we will get the support of react router dom so thats why the app is wrapped.
import ShopContextProvider from './context/ShopContext.jsx';


// Setting of Route

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>   
  </BrowserRouter>,
)
