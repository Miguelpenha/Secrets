import { FC } from 'react'
import useAnimations from './useAnimations'
import { Container, Text, Icon } from './style'

interface Iprops {
    type: string
    onPress: () => void
    onLongPress: () => void
    openModalizeSelectType: boolean
}

const SelectTypeAnimated: FC<Iprops> = ({ onLongPress, onPress, type, openModalizeSelectType }) => {
    const { animationContainer, animationRotateIcon, events } = useAnimations(type)

    return (
        <Container style={animationContainer} {...events(onPress, onLongPress)}>
            <Text>{type || 'Nenhum tipo selecionado'}</Text>
            <Icon name="expand-more" size={35} style={animationRotateIcon(openModalizeSelectType)}/>
        </Container>
    )
}

export default SelectTypeAnimated