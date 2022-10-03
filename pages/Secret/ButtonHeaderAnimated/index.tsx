import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'
import useAnimations from './useAnimations'
import { Container, Button, IconButton } from './style'
import Animated from 'react-native-reanimated'

interface Iprops {
    icon: keyof typeof MaterialIcons.glyphMap
    onPress: () => void
}

const ButtonHeaderAnimated: FC<Iprops> = ({ onPress, icon }) => {
    const { animationButtonDelete, animationIconButtonDelete, events } = useAnimations()

    return (
        <Container style={animationButtonDelete}>
            <Button {...events(onPress)}>
                <Animated.View style={animationIconButtonDelete}>
                    <IconButton name={icon} size={28}/>
                </Animated.View>
            </Button>
        </Container>
    )
}

export default ButtonHeaderAnimated