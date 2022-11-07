import { FC, memo } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import useAnimations from './useAnimations'
import { Container, ButtonSelectIcon, IconSelected } from './style'
import Animated from 'react-native-reanimated'

interface Iprops {
    big?: boolean
    icon: keyof typeof MaterialIcons.glyphMap
    onPress: (icon: keyof typeof MaterialIcons.glyphMap) => void
}

const ButtonSelectIconAnimated: FC<Iprops> = ({ big, icon, onPress }) => {
    const { animationButtonSelectIcon, animationIconSelect, events } = useAnimations()

    return (
        <Container big={big} style={animationButtonSelectIcon}>
            <ButtonSelectIcon big={big} {...events(() => onPress(icon))}>
                <Animated.View style={animationIconSelect}>
                    <IconSelected name={icon} size={35}/>
                </Animated.View>
            </ButtonSelectIcon>
        </Container>
    )
}

export default memo(ButtonSelectIconAnimated)