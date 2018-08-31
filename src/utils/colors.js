const baseColor = {
  white: '#FFFFFF',
  black: '#000000',
  whiteTransparent4: 'rgba(255, 255, 255, 0.4)',
  whiteTransparent8: 'rgba(255, 255, 255, 0.8)',
  blackTransparent8: 'rgba(000, 000, 000, 0.8)',
  blackTransparent4: 'rgba(000, 000, 000, 0.4)',
  seafoamBlue: '#62c69a',
  darkBlueGrey: '#101632',
  skyBlue: '#DDF9FD',
  peachyPink: '#fe8b8b',
  gray: '#9b9b9b',
  grayLight: '#eeeeee'
}
export default {
  ...baseColor,
  avatarPlaceholder: baseColor.grayLight,
  primary: baseColor.seafoamBlue,
  primaryInverted: baseColor.darkBlueGrey,
  primaryButtonBackground: baseColor.seafoamBlue,
  primaryButtonfontColor: baseColor.white
}
