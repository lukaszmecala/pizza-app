import { useDispatch, useSelector } from 'react-redux'
import Button from '../../ui/Button'
import { formatCurrency } from '../../utils/helpers'
import { addItem, getCurrenttQuantityById } from '../cart/cartSlice'
import DeleteItem from '../cart/DeleteItem'
import UpdateItemQuantity from '../cart/updateItemQuantity'
import { addFavourite, removeFavourite } from '../favourites/favouritesSlice'

function MenuItem({ pizza }) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza
    const dispatch = useDispatch()

    const currentQuantity = useSelector(getCurrenttQuantityById(id))

    const favourites = useSelector((state) => state.favourites.favourites)
    const isFavorite = favourites.some((pizza) => pizza.id === id)
    const isInCart = currentQuantity > 0

    const handleAddToCart = () => {
        const newItem = {
            pizzaId: id,
            name,
            ingredients,
            otherIngredients: [],
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice * 1,
        }
        dispatch(addItem(newItem))
    }

    const handleAddToFavourites = () => {
        const newFavourite = {
            id,
            imageUrl,
            name,
            ingredients,
            unitPrice,
        }
        dispatch(addFavourite(newFavourite))
    }

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
                    <div>
                        {!soldOut ? (
                            <p className="text-sm">
                                {formatCurrency(unitPrice)}
                            </p>
                        ) : (
                            <p className="text-sm font-medium uppercase text-stone-500">
                                Sold out
                            </p>
                        )}
                    </div>
                    <div className="flex gap-4">
                        {isInCart && (
                            <div className="flex items-center gap-3 sm:gap-8">
                                <UpdateItemQuantity
                                    pizzaId={id}
                                    currentQuantity={currentQuantity}
                                />
                                <DeleteItem pizzaId={id} />
                            </div>
                        )}
                        {!soldOut && !isInCart && (
                            <Button type="small" onClick={handleAddToCart}>
                                Add to cart
                            </Button>
                        )}{' '}
                        {!isFavorite ? (
                            <Button
                                type="round"
                                onClick={handleAddToFavourites}
                            >
                                ♡
                            </Button>
                        ) : (
                            <Button
                                type="favourite"
                                onClick={() => dispatch(removeFavourite(id))}
                            >
                                ♡
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default MenuItem
