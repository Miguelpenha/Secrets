import { MutableRefObject, Dispatch, SetStateAction, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { useTheme } from 'styled-components'
import { Modalize } from 'react-native-modalize'
import optionsModalize from '../../../components/optionsModalize'
import { Types } from './style'
import Type from './Type'
import useTypes from '../../../contexts/typesContext'

interface Iprops {
    modalize: MutableRefObject<IHandles>
    setTypeSelect: Dispatch<SetStateAction<string>>
    setOpenModalize: Dispatch<SetStateAction<boolean>>
}

const ModalizeSelectType: FC<Iprops> = ({ modalize, setOpenModalize, setTypeSelect }) => {
    const theme = useTheme()
    const { types } = useTypes()

    return (
        <Modalize
          ref={modalize}
          {...optionsModalize(theme, 90, 64)}
          onOpen={() => setOpenModalize(true)}
          onClose={() => setOpenModalize(false)}
        >
            <Types>
                <Type modalize={modalize} setType={setTypeSelect} value="">Nenhum tipo</Type>
                {types && types.map((type, index) => (
                    <Type key={index} modalize={modalize} setType={setTypeSelect}>{type}</Type>
                ))}
            </Types>
        </Modalize>
    )
}

export default ModalizeSelectType