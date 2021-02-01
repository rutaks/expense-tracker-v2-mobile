import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeHasViewedOnboardingScreen = async (value: boolean) => {
  try {
    await AsyncStorage.setItem('@has_viewed_onboarding_2', String(value));
  } catch (e) {
    // saving error
    console.log(e);
    return false;
  }
};
export const getHasViewedOnboardingScreen = async () => {
  try {
    const value = await AsyncStorage.getItem('@has_viewed_onboarding_2');
    return JSON.parse(value || 'false') || false;
  } catch (e) {
    // error reading value
    return false;
  }
};
