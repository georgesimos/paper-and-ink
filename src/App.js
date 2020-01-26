import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import ThemeProvider from './theme';
import history from './history';
import Routes from './routes/Routes';
import ThemeContext from 'theme/ThemeContext';

function App() {
  const [theme, setTheme] = useState('reply');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider>
        <HashRouter basename="/" history={history}>
          <Routes />
        </HashRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
