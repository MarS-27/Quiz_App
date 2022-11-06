import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import useColorTheme from "./hooks/useColorTheme";
import ColorModeContext from "./context/themeContext";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Header from './components/header/Header';
import QuizPage from './pages/QuizPage';
import CreateQuestionPage from './pages/CreateQuestionPage';

function App() {
  const { colorMode, theme } = useColorTheme();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
            <Provider store={store}>
              <BrowserRouter>
                <Header />  
                <Routes>
                  <Route path='/' element={<QuizPage />} />
                  <Route path='createQuestion' element={<CreateQuestionPage />} />
                </Routes>
              </BrowserRouter>
            </Provider> 
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
