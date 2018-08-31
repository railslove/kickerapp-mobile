import React from 'react'
import { TouchableOpacity } from 'react-native'
import PlatformButton from './PlatformIcon'
import colors from '../utils/colors'

type Props = {
  onpress: Function,
  androidIcon: String,
  iosIcon: String,
  size: Number,
  stickerUp: Boolean
}

const PlatformIcon = ({ onpress, androidIcon, iosIcon, size , stickerUp}: Props) => {
  const buttonSize = () => { return (size + 4) }
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {height: buttonSize()},
        stickerUp ? styles.containerStickerUp : {}
      ]}
      activeOpacity={0.5}
      onPress={onpress}
    >
      <PlatformButton
        androidIcon={androidIcon}
        iosIcon={iosIcon}
        size={size}
        color={colors.primaryButtonfontColor}
      />
    </TouchableOpacity>
  )
}
const styles = {
  container: {
    backgroundColor: colors.primaryButtonBackground,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerStickerUp: {
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  }
}
export default PlatformIcon
