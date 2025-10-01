import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UserProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UserProvider>
  </BrowserRouter>
);
