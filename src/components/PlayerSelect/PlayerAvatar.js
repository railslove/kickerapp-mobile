import React from 'react'
import {Text, View } from 'react-native'
import ImageLoad from 'react-native-image-placeholder'
import {imageSize, imageMargin} from './utils'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'
const playerPlaceholderImage = require('../../assets/images/loading-image-placeholder.png')

type Props = {
  imageUri: PropTypes.string,
  name: PropTypes.string
}

const PlayerSelectableAvatar = ({imageUri, name}: Props) => (
  <View style={styles.avatarContainer}>
    <View style={styles.imageContainer}>
      <ImageLoad
        source={{uri: imageUri}}
        loadingStyle={imageLoadStyles.loadingStyle}
        placeholderSource={playerPlaceholderImage}
        customImagePlaceholder={imageLoadStyles.customImagePlaceholder}
        placeholderStyle={imageLoadStyles.placeholderStyle}
        style={imageLoadStyles.avatarImage} />
    </View>
    <View style={styles.textContainer}>
      <View style={styles.textwrapper}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  </View>
)

const imageLoadStyles = {
  placeholderStyle: {
    width: imageSize - 2 * imageMargin,
    height: imageSize - 2 * imageMargin,
    flex: 1,
    opacity: 0.5
  },
  customImagePlaceholder: {
    opacity: 0.2
  },
  avatarImage: {
    flex: 1,
    width: imageSize - 2 * imageMargin,
    height: imageSize - 2 * imageMargin,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingStyle: {
    size: 'large',
    color: colors.white
  }
}

const styles = {
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: imageSize,
    height: imageSize
  },
  textContainer: {
    width: imageSize,
    height: imageSize
  },
  textwrapper: {
    backgroundColor: colors.blackTransparent4,
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: fonts.sizeBase,
    lineHeight: fonts.sizeBase,
    color: colors.whiteTransparent8
  },
  imageContainer: {
    overflow: 'hidden',
    flex: 1,
    position: 'absolute',
    bottom: 0
  }
}

export default PlayerSelectableAvatar
