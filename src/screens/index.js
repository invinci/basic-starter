import { Navigation } from 'react-native-navigation';
import SplashScreen from './splash';
import HomeScreen from './home';

export const Screens = new Map();

export const SPLASH_SCREEN = 'uenostarter.SplashScreen';

Screens.set(SPLASH_SCREEN, () => SplashScreen);

export const startApp = (root) => {
  switch (root) {
    case 'login':
      Navigation.startSingleScreenApp({
        screen: {
          screen: SPLASH_SCREEN, // unique ID registered with Navigation.registerScreen
          title: 'Welcome', // title of the screen as appears in the nav bar (optional)
          navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
          navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        },
      });
      return;

    case 'after-login':
      Navigation.startTabBasedApp({
        tabs: [
          {
            label: 'Home',
            screen: 'ReactNativeReduxExample.HomeTab',
            icon: require('./../img/checkmark.png'),
            selectedIcon: require('./../img/checkmark.png'),
            title: 'Hey',
            overrideBackPress: false,
            navigatorStyle: {},
          },

          {
            label: 'Search',
            screen: 'ReactNativeReduxExample.SearchTab',
            icon: require('./../img/checkmark.png'),
            selectedIcon: require('./../img/checkmark.png'),
            title: 'Hey Searchß',
            navigatorStyle: {},
          },
        ],
      });
      return;

    default:
      console.log('Not Root Found');
      Navigation.startSingleScreenApp({
        screen: {
          screen: SPLASH_SCREEN,
        },
      });
  }
};
