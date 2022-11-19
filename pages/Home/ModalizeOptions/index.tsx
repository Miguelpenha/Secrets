import { MutableRefObject, Dispatch, SetStateAction, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { useSecret } from '../../../contexts/secretsContext'
import { Modalize } from 'react-native-modalize'
import optionsModalize from '../../../components/optionsModalize'
import { Options } from './style'
import Option from './Option'

interface Iprops {
    openModalize: string | null
    modalize: MutableRefObject<IHandles>
    setOpenModalize: Dispatch<SetStateAction<string | null>>
}

const ModalizeOptions: FC<Iprops> = ({ modalize, openModalize, setOpenModalize }) => {
    const theme = useTheme()
    const navigation = useNavigation()
    const secret = useSecret(openModalize)
    
    return (
        <Modalize
          ref={modalize}
          {...optionsModalize(theme, 90, 64)}
          onClose={() => setOpenModalize(null)}
        >
            <Options>
                <Option icon="edit" onPress={() => {}}>Editar</Option>
                <Option icon="delete" onPress={() => {}}>Excluir</Option>
                <Option icon="file-copy" onPress={() => {}}>Copiar</Option>
                <Option icon="share" onPress={() => {}}>Compartilhar</Option>
                <Option icon="security"onPress={() => {}}>Deixar seguro</Option> 
                <Option icon="content-copy" onPress={() => {
                    navigation.navigate('CreateSecret', {
                        secret
                    })
                }}>Usar como modelo (Desenvolvimento)</Option>
                <Option icon="qr-code-scanner" onPress={() => {}}>QR code (Desenvolvimento)</Option>
            </Options>
        </Modalize>
    )
}

export default ModalizeOptions