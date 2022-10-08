interface IObjetive {
    title: string
    initial: boolean
    buttonBack: boolean
    hideButtonBack?: boolean
}

const objectives = {
    create: {
        initial: true,
        buttonBack: false,
        title: 'Crie uma senha'
    } as IObjetive,
    change: {
        initial: false,
        buttonBack: true,
        hideButtonBack: true,
        title: 'Mude sua senha'
    } as IObjetive,
    check: {
        initial: false,
        buttonBack: false,
        title: 'Verifique sua senha'
    } as IObjetive
}

export default objectives