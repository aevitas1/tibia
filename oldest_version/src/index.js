import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { NextUIProvider, createTheme } from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';

const lightTheme = createTheme({
    type: 'light',
})

const darkTheme = createTheme({
    type: 'dark',
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <NextThemesProvider
          defaultTheme="system"
          attribute="class"
          value={{
              light: lightTheme.className,
              dark: darkTheme.className
          }}
      >
      <NextUIProvider>
        <Router>
            <App/>
        </Router>
      </NextUIProvider>
      </NextThemesProvider>
  </React.StrictMode>
);

