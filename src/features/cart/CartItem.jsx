import { useSelector } from 'react-redux'
import { formatCurrency } from '../../utils/helpers'
import DeleteItem from './DeleteItem'
import UpdateItemQuantity from './UpdateItemQuantity'
import {
    getCurrenttQuantityById,
    getIngredients,
    getOtherIngredients,
} from './cartSlice'
import EditItem from './EditItem'

function CartItem({ item }) {
    const { pizzaId, name, quantity, totalPrice } = item
    const currentQuantity = useSelector(getCurrenttQuantityById(pizzaId))
    const ingredients = useSelector(getIngredients(pizzaId))
    const addedIngredients = useSelector(getOtherIngredients(pizzaId))

    const ingredientsToDisplay = [...ingredients, ...addedIngredients]
    return (
        <li>
            <div className="py-3 sm:flex sm:items-center sm:justify-between">
                <EditItem pizzaId={pizzaId} />
                <p className="mb-1 sm:mb-0">
                    {quantity}&times; {name}
                </p>
                <div className="flex items-center justify-between sm:gap-6">
                    <p className="text-sm font-bold">
                        {formatCurrency(totalPrice)}
                    </p>
                    <UpdateItemQuantity
                        pizzaId={pizzaId}
                        currentQuantity={currentQuantity}
                    />
                    <DeleteItem pizzaId={pizzaId} />
                </div>
            </div>
            <p className="text-sm capitalize italic text-stone-500">
                {ingredientsToDisplay?.join(', ')}
            </p>
        </li>
    )
}

export default CartItem
