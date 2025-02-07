import { useDispatch } from 'react-redux'
import Button from '../../ui/Button'
import { setEdit } from './cartSlice'

function EditItem({ pizzaId }) {
    const dispatch = useDispatch()
    return (
        <Button
            type="round"
            onClick={() => {
                dispatch(setEdit(pizzaId))
            }}
        >
            ✎
        </Button>
    )
}

export default EditItem
