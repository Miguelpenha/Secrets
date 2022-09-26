import { useNavigation } from '@react-navigation/native'
import useShowEmoji from '../../../contexts/emojiContext'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { Container, ContainerSettings, Settings, Title, EmojiTitle, ContainerButtonCreate, ButtonCreate, IconButtonCreate } from './style'
import { memo } from 'react'

function Header() {
    const navigation = useNavigation()
    const { showEmoji } = useShowEmoji()
    const pressed = useSharedValue(1)
    const pressedIcon = useSharedValue(1)

    const styleAnimationButtonCreate = useAnimatedStyle(() => ({
        transform: [{ scale: pressed.value }]
    }), [])
  
    const styleAnimationIconButtonCreate= useAnimatedStyle(() => ({
        transform: [{ scale: pressedIcon.value }]
    }), [])

    return (
        <Container>
            <ContainerSettings onPress={() => navigation.navigate('Settings')}>
                <Settings name="settings" size={40}/>
            </ContainerSettings>
            <Title>Segredos {showEmoji && <EmojiTitle>&#x1F92B;</EmojiTitle>}</Title>
            <ContainerButtonCreate style={styleAnimationButtonCreate}>
                <ButtonCreate
                    onPress={() => {
                        pressed.value = withTiming(0.8, {
                          duration: 100
                        })
          
                        pressedIcon.value = withTiming(0.8, {
                          duration: 200
                        })
                        
                        setTimeout(() => {
                            navigation.navigate('CreateSecret')
          
                            pressed.value = withTiming(1, {
                                duration: 100
                            })
            
                            pressedIcon.value = withTiming(1, {
                                duration: 200
                            })
                        }, 200)
                      }}
                      activeOpacity={0.5}
                      onPressIn={() => {
                          pressed.value = withTiming(0.8)
          
                          pressedIcon.value = withTiming(0.8, {
                              duration: 900
                          })
                      }}
                      onPressOut={() => {
                          pressed.value = withTiming(1)
          
                          pressedIcon.value = withTiming(1, {
                              duration: 900
                          })
                      }}
                >
                    <Animated.View style={styleAnimationIconButtonCreate}>
                        <IconButtonCreate name="add" size={40}/>
                    </Animated.View>
                </ButtonCreate>
            </ContainerButtonCreate>
        </Container>
    )
}

export default memo(Header)