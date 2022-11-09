import { Dispatch, SetStateAction, FC } from 'react'
import { Menu } from './style'
import MenuItem from './MenuItem'

interface Iprops {
    openMenu: boolean
    setOpenMenu: Dispatch<SetStateAction<boolean>>
}

const ContainerMenu: FC<Iprops> = ({ children, openMenu, setOpenMenu }) => {
    return (
        <Menu anchor={children} visible={openMenu} onRequestClose={() => setOpenMenu(false)}>
            <MenuItem>Editar</MenuItem>
            <MenuItem>Excluir</MenuItem>
            <MenuItem>Compartilhar</MenuItem>
        </Menu>
    )
}

export default ContainerMenu