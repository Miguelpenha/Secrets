import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'
import useAnimations from './useAnimations'
import { Container, Icon } from './style'

interface Iprops {
    onPress: () => void
    icon: keyof typeof MaterialIcons.glyphMap
}

const ButtonHeaderAnimated: FC<Iprops> = ({ onPress, icon }) => {
    const { animationButton, animationIcon, events } = useAnimations()

    return (
        <Container style={animationButton} {...events(onPress)}>
            <Icon name={icon} size={28} style={animationIcon}/>
        </Container>
    )
}

export default ButtonHeaderAnimated