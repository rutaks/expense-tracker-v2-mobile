/**
 * App's route configuartion
 * @param props
 * @author Rutakayile Sam
 * @version 1.0
 */
export const routingConfig = {
  screens: {
    Splash: 'Splash',
    Login: 'LoginScreen',
    Home: 'HomeScreen',
  },
  navigators: {
    Auth: 'Auth',
    Home: 'Home',
  },
};

export const linking = {
  prefixes: ['https://wove.rw/', 'http://wove.rw/', 'wove://'],
  config: {
    screens: {
      ResetPassword: 'reset-password/:token',
    },
  },
};
