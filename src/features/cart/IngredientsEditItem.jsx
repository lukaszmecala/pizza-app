import { useDispatch } from 'react-redux'
import Button from '../../ui/Button'
import { addIngredients, removeIngredients } from './cartSlice'

function IngredientsEditItem({ uniqueIngridient, otherIngredients, pizzaId }) {
    const dispatch = useDispatch() // Add your dispatch action here

    return (
        <li
            key={Math.random(0, new Date().getTime()) * 23}
            className="flex items-center gap-4"
        >
            <p className="md:text-md text-sm font-semibold">
                {uniqueIngridient}
            </p>

            {otherIngredients.includes(uniqueIngridient) ? (
                <Button
                    type="round"
                    onClick={() =>
                        dispatch(removeIngredients(pizzaId, uniqueIngridient))
                    }
                >
                    -
                </Button>
            ) : (
                <Button
                    type="round"
                    onClick={() =>
                        dispatch(addIngredients(pizzaId, uniqueIngridient))
                    }
                >
                    +
                </Button>
            )}
        </li>
    )
}

export default IngredientsEditItem
