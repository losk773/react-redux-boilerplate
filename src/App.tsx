import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { store } from '@/common/redux';
import router from '@/common/router';
import { GlobalStyles, theme } from '@/common/theme';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
};
