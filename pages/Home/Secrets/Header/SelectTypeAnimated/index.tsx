import { Dispatch, SetStateAction, FC } from 'react'
import useAnimations from './useAnimations'
import { Container, Text, Icon } from './style'

interface Iprops {
    type: string
    onPress: () => void
    openModalizeSelectType: boolean
    setType: Dispatch<SetStateAction<string>>
}

const SelectTypeAnimated: FC<Iprops> = ({ type, setType, onPress, openModalizeSelectType }) => {
    const { animationContainer, animationText, animationOnChangeText, animationIcon, animationRotateIcon, events } = useAnimations()

    return (
        <Container style={animationContainer} {...events(onPress)}>
            <Text style={[animationText, animationOnChangeText(type)]}>{type || 'Nenhum tipo selecionado'}</Text>
            <Icon name="expand-more" size={35} style={[animationIcon, animationRotateIcon(openModalizeSelectType)]}/>
        </Container>
    )
}

export default SelectTypeAnimated