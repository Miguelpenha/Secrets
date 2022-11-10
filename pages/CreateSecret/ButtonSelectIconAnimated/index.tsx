import { FC, memo } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import useAnimations from './useAnimations'
import { Container, Icon } from './style'

interface Iprops {
    big?: boolean
    icon: keyof typeof MaterialIcons.glyphMap
    onPress: (icon: keyof typeof MaterialIcons.glyphMap) => void
}

const ButtonSelectIconAnimated: FC<Iprops> = ({ big, icon, onPress }) => {
    const { animationButtonSelectIcon, animationIconSelect, events } = useAnimations()

    return (
        <Container big={big} style={animationButtonSelectIcon} {...events(() => onPress(icon))}>
            <Icon name={icon} size={35} style={animationIconSelect}/>
        </Container>
    )
}

export default memo(ButtonSelectIconAnimated)