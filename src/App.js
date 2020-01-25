import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import ThemeProvider from './theme';
import history from './history';
import Routes from './routes/Routes';
import ThemeContext from 'theme/ThemeContext';

function App() {
  const [theme, setTheme] = useState('reply');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
