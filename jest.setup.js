import {NativeModules as RNNativeModules} from 'react-native';
/* eslint-disable no-undef */

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native', () => require('dl-react-native-mock-render'), {
  virtual: true,
});

RNNativeModules.UIManager =
  {
    ...RNNativeModules.UIManager,
    getViewManagerConfig: jest.fn(),
  } || {};
RNNativeModules.UIManager.RCTView =
  {
    ...RNNativeModules.UIManager.RCTView,
    getViewManagerConfig: jest.fn(),
  } || {};
RNNativeModules.RNGestureHandlerModule =
  RNNativeModules.RNGestureHandlerModule || {
    State: {BEGAN: 'BEGAN', FAILED: 'FAILED', ACTIVE: 'ACTIVE', END: 'END'},
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
  };
RNNativeModules.PlatformConstants = RNNativeModules.PlatformConstants || {
  forceTouchAvailable: false,
};

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter', () =>
  require('react-native/Libraries/EventEmitter/__mocks__/NativeEventEmitter'),
);
