import useShowEmoji from '../../contexts/emojiContext'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import usePassword from '../../contexts/passwordContext'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import ContainerPd from '../../components/ContainerPd'
import Header from './Header'
import { Title, EmojiTitle, Field, ButtonIconShow, IconShow, Input, ButtonSubmit, TextButtonSubmit } from './style'
import Toast from 'react-native-toast-message'
import { green } from '../../utils/colorsLogs'

export default function Password() {
  const { showEmoji } = useShowEmoji()
  const [showPassword, setShowPassword] = useState(true)
  const [password, setPassword] = useState('')
  const theme = useTheme()
  const { mutatePassword } = usePassword()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ContainerPd>
        <Header/>
        <Title>Crie uma senha {showEmoji && <EmojiTitle>&#x1F92B;</EmojiTitle>}</Title>
        <Field>
            <ButtonIconShow onPress={() => setShowPassword(!showPassword)}>
                <IconShow name={`visibility${showPassword ? '-off' : ''}`} size={28}/>
            </ButtonIconShow>
            <Input
              value={password}
              autoCapitalize="none"
              placeholder="Senha..."
              onChangeText={setPassword}
              autoCompleteType="password"
              secureTextEntry={showPassword}
              selectionColor={theme.primary}
              placeholderTextColor={theme.primary}
              keyboardType={!showPassword ? 'visible-password' : 'default'}
            />
        </Field>
        <ButtonSubmit
          onPress={async () => {
            if (password) {
              await mutatePassword(password)

              console.log(green('>> Created password'))

              Toast.show({
                type: 'success',
                text1: 'Senha criada com sucesso',
                onPress() {
                  Toast.hide()
                }
              })
            } else {
              Toast.show({
                type: 'error',
                text1: 'Senha não preenchida',
                onPress() {
                  Toast.hide()
                }
              })
            }
          }}
      >
          <TextButtonSubmit>Criar</TextButtonSubmit>
      </ButtonSubmit>
      </ContainerPd>
    </TouchableWithoutFeedback>
  )
}