import React, {useEffect, useState} from 'react';
import {OnBoardedNavigator} from './src/navigators';
import {OnBoardingScreen} from './src/screens';
import {
  getHasViewedOnboardingScreen,
  storeHasViewedOnboardingScreen,
} from './src/utils/storage.util';

const App = () => {
  const [hasViewedOnboarding, setHasViewedOnboarding] = useState<boolean>();

  useEffect(() => {
    const checkHasViewedOnBoarding = async () => {
      setHasViewedOnboarding(await getHasViewedOnboardingScreen());
    };
    checkHasViewedOnBoarding();
  }, []);

  const changeHasViewedOnboarding = () => {
    storeHasViewedOnboardingScreen(true);
    setHasViewedOnboarding(true);
  };

  if (hasViewedOnboarding === null) {
    return null;
  }

  return hasViewedOnboarding ? (
    <OnBoardedNavigator />
  ) : (
    <OnBoardingScreen onDone={changeHasViewedOnboarding} />
  );
};

export default App;
