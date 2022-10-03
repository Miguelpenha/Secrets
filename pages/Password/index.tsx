import useShowEmoji from '../../contexts/emojiContext'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import usePassword from '../../contexts/passwordContext'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import ContainerPd from '../../components/ContainerPd'
import Header from './Header'
import HeaderBack from '../../components/HeaderBack'
import { Title, EmojiTitle, Field, ButtonIconShow, IconShow, Input, ButtonSubmit, TextButtonSubmit } from './style'
import handleSubmit from './handleSubmit'

interface IParams {
  initial: boolean
}

export default function Password() {
  const { showEmoji } = useShowEmoji()
  const [showPassword, setShowPassword] = useState(true)
  const [password, setPassword] = useState('')
  const theme = useTheme()
  const { mutatePassword } = usePassword()
  const { initial } = useRoute().params as IParams
  const navigation = useNavigation()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ContainerPd>
        {initial ? <Header/> : <HeaderBack onClick={() => navigation.goBack()}/>}
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
            onSubmitEditing={async () => {
              await handleSubmit(password, mutatePassword)

              !initial && navigation.navigate('Home')
            }}
          />
        </Field>
        <ButtonSubmit onPress={async () => {
          await handleSubmit(password, mutatePassword)

          !initial && navigation.navigate('Home')
        }}>
          <TextButtonSubmit>Criar</TextButtonSubmit>
        </ButtonSubmit>
      </ContainerPd>
    </TouchableWithoutFeedback>
  )
}