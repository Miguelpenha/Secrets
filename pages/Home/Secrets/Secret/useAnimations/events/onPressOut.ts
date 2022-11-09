import { SharedValue, withTiming } from 'react-native-reanimated'

function onPressOut(pressed: SharedValue<number>, pressedIcon: SharedValue<number>, pressedName: SharedValue<number>, pressedNext: SharedValue<number>) {
    const timingDefault = (timing:number = 1) => (
        withTiming(timing, {
            duration: 550
        })
    )

    pressed.value = withTiming(1)
    pressedIcon.value = timingDefault()
    pressedName.value = timingDefault()
    pressedNext.value = timingDefault(0)
}

export default onPressOut