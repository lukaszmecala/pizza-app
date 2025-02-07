import { useDispatch } from 'react-redux'
import { formatCurrency } from '../../utils/helpers'

function FavouritesItem({ pizza }) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza
    const dispatch = useDispatch()

    // const handleAddToCart = () => {
    //     const newItem = {
    //         pizzaId: id,
    //         name,
    //         ingredients,
    //         otherIngredients: [],
    //         quantity: 1,
    //         unitPrice,
    //         totalPrice: unitPrice * 1,
    //     }
    //     dispatch(addItem(newItem))
    // }
    return (
        <li className="flex gap-4 py-2">
            <img
                src={imageUrl}
                alt={name}
                className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
            />
            <div className="flex flex-grow flex-col pt-0.5">
                <p className="font-medium">{name}</p>
                <p className="text-sm capitalize italic text-stone-500">
                    {ingredients.join(', ')}
                </p>
                <div className="mt-auto flex items-center justify-between">
                    {!soldOut ? (
                        <p className="text-sm">{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p className="text-sm font-medium uppercase text-stone-500">
                            Sold out
                        </p>
                    )}
                </div>
            </div>
        </li>
    )
}

export default FavouritesItem
