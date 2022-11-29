import { FC, Dispatch, SetStateAction, useEffect } from 'react'
import useAnimations from './useAnimations'
import useTypes from '../../../contexts/typesContext'
import { useFocusEffect } from '@react-navigation/native'
import { Container, Text, Icon } from './style'

interface Iprops {
    type: string
    onPress: () => void
    onLongPress: () => void
    openModalizeSelectType: boolean
    setType: Dispatch<SetStateAction<string>>
}

const SelectTypeAnimated: FC<Iprops> = ({ onLongPress, onPress, type, openModalizeSelectType, setType }) => {
    const { animationContainer, animationRotateIcon, events } = useAnimations(type)
    const { types } = useTypes()

    useFocusEffect(() => {
        if (!types.includes(type)) {
            setType('')
        }
    })

    useEffect(() => setType(type), [type])

    return (
        <Container style={animationContainer} {...events(onPress, onLongPress)}>
            <Text>{type || 'Nenhum tipo selecionado'}</Text>
            <Icon name="expand-more" size={35} style={animationRotateIcon(openModalizeSelectType)}/>
        </Container>
    )
}

export default SelectTypeAnimated