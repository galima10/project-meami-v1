import 'react-native-reanimated/mock';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // Patch pour éviter les erreurs sur certaines méthodes
  Reanimated.default.call = () => {};

  return Reanimated;
});
