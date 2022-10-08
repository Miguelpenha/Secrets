import useShowEmoji from '../../contexts/emojiContext'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import usePassword from '../../contexts/passwordContext'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useVerifiedAccess } from '../../contexts/verifiedAccessContext'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import ContainerPd from '../../components/ContainerPd'
import Header from './Header'
import HeaderBack from '../../components/HeaderBack'
import { Title, EmojiTitle, Field, ButtonIconShow, IconShow, Input, ButtonSubmit, TextButtonSubmit } from './style'
import handleSubmit from './handleSubmit'
import { Inavigation } from '../../types'
import objectives from './objectives'

function Password() {
  const { showEmoji } = useShowEmoji()
  const [showPassword, setShowPassword] = useState(true)
  const [password, setPassword] = useState('')
  const theme = useTheme()
  const { password: passwordDefault, mutatePassword } = usePassword()
  const { objective } = useRoute().params as Inavigation['Password']
  const navigation = useNavigation()
  const { setVerifiedAccess } = useVerifiedAccess()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ContainerPd>
        {objectives[objective].hideButtonBack && <>{objectives[objective].buttonBack ? <HeaderBack onClick={() => navigation.goBack()}/> : <Header/>}</>}
        <Title top={objectives[objective].hideButtonBack}>{objectives[objective].title} {showEmoji && <EmojiTitle>&#x1F92B;</EmojiTitle>}</Title>
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
              objectives[objective].initial && setVerifiedAccess(true)

              await handleSubmit(password, passwordDefault, mutatePassword, objective, navigation as any)
            }}
          />
        </Field>
        <ButtonSubmit onPress={async () => {
          objectives[objective].initial && setVerifiedAccess(true)

          await handleSubmit(password, passwordDefault, mutatePassword, objective, navigation as any)
          navigation
        }}>
          <TextButtonSubmit>Criar</TextButtonSubmit>
        </ButtonSubmit>
      </ContainerPd>
    </TouchableWithoutFeedback>
  )
}

export default Password