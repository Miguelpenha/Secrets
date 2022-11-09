import { FC } from 'react'
import useAnimations from './useAnimations'
import { Container, Text, Icon } from './style'

interface Iprops {
    type: string
    onPress: () => void
    openModalizeSelectType: boolean
}

const SelectTypeAnimated: FC<Iprops> = ({ type, onPress, openModalizeSelectType }) => {
    const { animationContainer, animationText, animationIcon, animationRotateIcon, events } = useAnimations()

    return (
        <Container style={animationContainer} {...events(onPress)}>
            <Text style={animationText}>{type || 'Nenhum tipo selecionado'}</Text>
            <Icon name="expand-more" size={35} style={[animationIcon, animationRotateIcon(openModalizeSelectType)]}/>
        </Container>
    )
}

export default SelectTypeAnimated