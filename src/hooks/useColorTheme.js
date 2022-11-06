import { useState, useMemo } from "react";
import { createTheme } from '@mui/material/styles';

function useColorTheme() {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light' ? 
            { 
              primary: { main: '#3f51b5', },
              secondary: { main: '#f50057', },
              background: {
                paper: '#eaeaea',
                default: '#fafafa',
              },
            } : {
              primary: { main: '#ef6c00', },
              secondary: { main: '#388e3c', },
              background: {
                default: '#100e17',
                paper: '#464545',
              },
            })
        },
      }),
    [mode],
  );

  return {colorMode, theme};
}

export default useColorTheme;