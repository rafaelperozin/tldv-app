import { observer } from 'mobx-react-lite';
import React from 'react';
import { StoreProvider } from './context/store.context';
import LanguageController from './i18n/LanguageController';
import AppRoutes from './routes';

import './styles/main.scss';

const App = observer(() => {
  return (
    <StoreProvider>
      <LanguageController>
        <AppRoutes />
      </LanguageController>
    </StoreProvider>
  );
})

export default App;
