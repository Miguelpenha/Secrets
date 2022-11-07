import { FC } from 'react'
import useAnimations from './useAnimations'
import { Container, Icon } from './style'

interface Iprops {
    onPress: () => void
}

const ButtonShareAnimated: FC<Iprops> = ({ onPress }) => {
    const { animationButtonDelete, animationIconButtonDelete, events } = useAnimations()

    return (
        <Container {...events(onPress)} style={animationButtonDelete}>
            <Icon name="share" size={28} style={animationIconButtonDelete}/>
        </Container>
    )
}

export default ButtonShareAnimated