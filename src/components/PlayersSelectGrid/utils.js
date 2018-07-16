import { Dimensions } from 'react-native'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
const imageMargin = 1
const columnsNumber = 4
const imageSize = screenWidth/columnsNumber


export {
  screenWidth,
  screenHeight,
  columnsNumber,
  imageSize,
  imageMargin
}
