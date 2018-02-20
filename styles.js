import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    backgroundColor: 'transparent'
  },
  topLeftContainer: {
    position: 'absolute',
    left: 15,
    top: 15
  },
  topRightContainer: {
    position: 'absolute',
    right: 15,
    top: 15,
    backgroundColor: 'transparent'
  },
  bottomLeftContainer: {
    position: 'absolute',
    left: 15,
    bottom: 15,
    backgroundColor: 'transparent'
  },
  bottomRightContainer: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    backgroundColor: 'transparent'
  },
  roundShape: {
    height: 16,
    width: 16,
    backgroundColor: 'red',
    borderRadius: 8
  }
});

export default styles;
