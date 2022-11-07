import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'
import useAnimations from './useAnimations'
import { Button, Icon, Text } from './style'

interface Iprops extends TouchableOpacityProps {
    size?: number
    loading?: boolean
    onPress: () => void
    iconForward?: boolean
    icon: keyof typeof MaterialIcons.glyphMap
}

const ButtonAnimated: FC<Iprops> = ({ onPress, icon, size, iconForward, children, loading }) => {
    const { animationButton, animationTextButton, animationIconButton, events } = useAnimations(loading)

    return (
        <Button {...events(onPress)} disabled={loading} loading={loading} style={animationButton}>
            <Icon loading={loading} name={icon} size={size || 30} style={animationIconButton}/>
            <Text style={animationTextButton}>{children}</Text>
            {iconForward && <Icon right name="arrow-forward-ios" size={25} style={animationIconButton}/>}
        </Button>
    )
}

export default ButtonAnimated