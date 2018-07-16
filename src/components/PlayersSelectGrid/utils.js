import { Dimensions } from 'react-native'

const imageMargin = 1
const columnsNumber = 4
const imageSize = Dimensions.get('window').width/columnsNumber


export {
  columnsNumber,
  imageSize,
  imageMargin
}
