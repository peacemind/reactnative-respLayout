import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//default size screen for mobile device
const baseWidth = 340;
const baseHeight = 650;

const scale = size => width / baseWidth * size;
const verticalScale = size => height / baseHeight * size;
const scaleFactor = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, scaleFactor};
