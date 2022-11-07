import React, { FC, useCallback, memo } from 'react'
import { ViewStyle, TextStyle, Dimensions } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { Container, Row1, ButtonBack, ContainerHeader, Title, Row2 } from './style'
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { useShowPageTitle } from '../../contexts/showPageTitleContext'

interface Iprops {
    title?: string
    style?: ViewStyle
    onClick: () => void
    buttonBack?: boolean
    styleTitle?: TextStyle
    iconSizeButtonBack?: number
    styleButtonBack?: ViewStyle
    styleButtonBackIcon?: TextStyle
    styleContainerHeader?: ViewStyle
}

const HeaderBack: FC<Iprops> = ({ style, onClick, buttonBack=true, styleButtonBack, iconSizeButtonBack, styleButtonBackIcon, styleContainerHeader, title, styleTitle }) => {
    const { showPageTitle } = useShowPageTitle()

    if (!styleButtonBack) {
        styleButtonBack = {
            alignSelf: 'center'
        }
    }
    const borderWidth = useSharedValue(0)

    const animationBorder = useAnimatedStyle(() => ({
        width: borderWidth.value
    }))

    useFocusEffect(useCallback(() => {
        borderWidth.value = 0
        borderWidth.value = withTiming(Dimensions.get('screen').width, { duration: 600 })
    }, []))

    return (
        <Container style={style}>
            <Row1>
                {buttonBack && (
                    <ButtonBack
                        onClick={onClick}
                        style={styleButtonBack}
                        iconSize={iconSizeButtonBack}
                        styleIcon={styleButtonBackIcon}
                    />
                )}
                <ContainerHeader style={styleContainerHeader}>
                    <Title style={styleTitle}>{showPageTitle && title && title}</Title>
                </ContainerHeader>
            </Row1>
            {showPageTitle && <Row2 style={animationBorder}/>}
        </Container>
    )
}

export default memo(HeaderBack)