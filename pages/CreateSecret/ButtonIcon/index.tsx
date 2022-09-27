import { MaterialIcons } from '@expo/vector-icons'
import { Dispatch, SetStateAction, FC, memo } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Container, Button, Icon } from './style'

interface Iprops {
    onPress: () => void
    icon: keyof typeof MaterialIcons.glyphMap
    setIcon: Dispatch<SetStateAction<keyof typeof MaterialIcons.glyphMap>>
}

const ButtonIcon: FC<Iprops> = ({ icon, setIcon, onPress }) => {
    const pressed = useSharedValue(1)
    const pressedIcon = useSharedValue(1)

    const styleAnimationButtonSelectIcon = useAnimatedStyle(() => ({
        transform: [{ scale: pressed.value }]
    }), [])
  
    const styleAnimationIconSelected = useAnimatedStyle(() => ({
        transform: [{ scale: pressedIcon.value }]
    }), [])

    return (
        <Container style={styleAnimationButtonSelectIcon}>
            <Button
                onPress={() => {
                    pressed.value = withTiming(0.8, {
                        duration: 100
                    })
    
                    pressedIcon.value = withTiming(0.8, {
                        duration: 200
                    })
                    
                    setTimeout(() => {
                        setIcon(icon)
                        onPress()
    
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
                <Animated.View style={styleAnimationIconSelected}>
                    <Icon name={icon} size={45}/>
                </Animated.View>
            </Button>
        </Container>
    )
}

export default memo(ButtonIcon)