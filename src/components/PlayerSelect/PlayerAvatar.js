import React from 'react'
import {Image, Text, View } from 'react-native'
import ImageLoad from 'react-native-image-placeholder'
import {imageSize, imageMargin} from './utils'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'
const playerPlaceholderImage = require('../../assets/images/loading-image-placeholder.png')
type Props = {
  imageUri: PropTypes.string,
  name: PropTypes.string,
  active: PropTypes.bool
}

const PlayerSelectableAvatar = ({imageUri, name, active}: Props) => (
  <View style={styles.avatarContainer}>
    <View style={styles.imageContainer}>
      <ImageLoad
        source={{uri: imageUri}}
        loadingStyle={imageLoadStyles.loadingStyle}
        placeholderSource={playerPlaceholderImage}
        customImagePlaceholder={imageLoadStyles.customImagePlaceholder}
        placeholderStyle={imageLoadStyles.placeholderStyle}
        style={active ? imageLoadStyles.avatarImageActive : imageLoadStyles.avatarImage} />
    </View>
    <View style={styles.textContainer}>
      <View style={active ? styles.textwrapperActive : styles.textwrapper}>
        <Text style={active ? styles.textActive : styles.text}>
          {name}
        </Text>
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
  avatarImageActive: {
    flex: 1,
    width: imageSize - 20 * imageMargin,
    height: imageSize - 20 * imageMargin,
    margin: 10 * imageMargin,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
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
  textwrapperActive: {
    backgroundColor: colors.whiteTransparent4,
    flex: 1,
    justifyContent: 'flex-end'
  },
  text: {
    textAlign: 'center',
    fontSize: fonts.sizeBase,
    fontWeight: fonts.weightNormal,
    lineHeight: fonts.sizeBase,
    color: colors.whiteTransparent8
  },
  textActive: {
    textAlign: 'center',
    fontSize: fonts.sizeTitle,
    lineHeight: fonts.sizeTitle,
    color: colors.blackTransparent8
  },
  imageContainer: {
    overflow: 'hidden',
    flex: 1,
    position: 'absolute',
    bottom: 0
  }
}

export default PlayerSelectableAvatar
