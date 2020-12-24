import React, {Fragment, useEffect, useState} from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';
import {LoginScreen, SplashScreen} from './src/screens';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSplashLoaded, setIsSplashLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 5000);
  });

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsSplashLoaded(true);
      }, 1500);
    }
  }, [isLoaded]);

  return (
    <Fragment>
      {!isLoaded ? (
        <SplashScreen />
      ) : (
        <Fragment>
          <AnimatedSplash
            translucent={true}
            isLoaded={isSplashLoaded}
            logoImage={require('./assets/img/logo-main.png')}
            logoHeight={150}
            logoWidth={150}>
            <LoginScreen />
          </AnimatedSplash>
        </Fragment>
      )}
    </Fragment>
  );
};

export default App;
