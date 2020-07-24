import { StatusBar } from 'react-native';
import React, { useState } from 'react';
import Home from './src/pages/home'

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

export default function App() {

  const fetchFonts = async () => {
    await Font.loadAsync({
      'Roboto-medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
      'Roboto-thin': require('./src/assets/fonts/Roboto-Thin.ttf'),
    });
  };

  const [dataLoaded, setDadaLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDadaLoaded(true)}
      onError={(err) => err}
    />;
  }

  return (
    <>
      <StatusBar
        backgroundColor="#081C81"
        barStyle="light-content"
      />

      <Home />
    </>
  )

}


