import { SharedValue, withTiming } from 'react-native-reanimated'

function onPressInOrOut(pressedContainer: SharedValue<number>, pressedText: SharedValue<number>, pressedIcon: SharedValue<number>, valueContainer: number, valueText: number, valueIcon: number) {
    pressedContainer.value = withTiming(valueContainer, {
        duration: 200
    })

    pressedText.value = withTiming(valueText, {
        duration: 200
    })

    pressedIcon.value = withTiming(valueIcon, {
        duration: 200
    })
}

export default onPressInOrOut