import useShowEmoji from '../../../../contexts/emojiContext'
import { Message } from './style'

function ListEmpty() {
    const { showEmoji } = useShowEmoji()

    return (
        <Message>Você não possui segredos cadastrados ainda{showEmoji && <> &#x1F615;</>}</Message>
    )
}

export default ListEmpty