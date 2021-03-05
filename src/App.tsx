import React from 'react';
import { Global } from '@emotion/react';
import { globalStyles } from './App.styled';
import SearchScreen from './Pages/SearchScreen';

const App: React.FC = () => (
  <>
    <Global styles={globalStyles} />
    <SearchScreen />
  </>
);

export default App;
