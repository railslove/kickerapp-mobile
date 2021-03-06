import React from 'react'
import {View, Text} from 'react-native'
import PlayerAvatar from './PlayerAvatar'
class PlayerAvatarStory extends React.Component {
  render () {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text></Text>
        <Text>Inactive Avatar</Text>
        <Text></Text>
        <PlayerAvatar
          name='Nicola Tesla'
          imageUri='http://www.mapadoceu.com.br/var/site/cache/public/images-alias/astro/photo/n/nikola-tesla-medium.jpg'
        />
        <Text></Text>
        <Text></Text>
        <Text>Active Avatar</Text>
        <Text></Text>
        <PlayerAvatar
          name='Nicola Teslas'
          imageUri='http://www.mapadoceu.com.br/var/site/cache/public/images-alias/astro/photo/n/nikola-tesla-medium.jpg'
          active={true}
        />
        <Text></Text>
        <Text></Text>
        <Text>Active Avatar</Text>
        <Text></Text>
        <PlayerAvatar
          name='Nicola Tesla 2 with some extra text'
          imageUri='http://www.mapadoceu.com.br/var/site/cache/public/images-alias/astro/photo/n/nikola-tesla-medium.jpg'
          active={true}
        />
        <Text></Text>
        <Text></Text>
        <Text>caption false</Text>
        <Text></Text>
        <PlayerAvatar
          name='Nicola Tesla 2 with some extra text'
          imageUri='http://www.mapadoceu.com.br/var/site/cache/public/images-alias/astro/photo/n/nikola-tesla-medium.jpg'
          captionVisible={true}
        />
        <Text></Text>
        <Text></Text>
      </View>
    )
  }
}

export default PlayerAvatarStory
