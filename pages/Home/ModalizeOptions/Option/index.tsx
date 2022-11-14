import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'
import useAnimations from './useAnimations'
import { Button, Icon, Text } from './style'

interface Iprops extends TouchableOpacityProps {
    size?: number
    onPress: () => void
    icon: keyof typeof MaterialIcons.glyphMap
}

const Option: FC<Iprops> = ({ onPress, icon, size, children }) => {
    const { animationButton, animationTextButton, animationIconButton, events } = useAnimations()

    return (
        <Button {...events(onPress)} style={animationButton}>
            <Icon name={icon} size={size || 30} style={animationIconButton}/>
            <Text style={animationTextButton}>{children}</Text>
        </Button>
    )
}

export default Option