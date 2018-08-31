import { Dimensions } from 'react-native'
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
const imageMargin = 1
const columnsNumber = 5
const imageSize = screenWidth/columnsNumber

const suffleArrayElements = arr => arr.slice().sort(() => Math.random() - 0.5)

export {
  screenWidth,
  screenHeight,
  columnsNumber,
  imageSize,
  imageMargin,
  suffleArrayElements
}
