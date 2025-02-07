import LinkButton from '../../ui/LinkButton'
import Button from '../../ui/Button'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart, getEditMode, getSelectedId } from './cartSlice'
import { getUserName } from '../user/userSlice'
import IngredientsEdit from './IngredientsEdit'

function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector(getCart)

    const edit = useSelector(getEditMode)
    const selectedId = useSelector(getSelectedId)

    const userName = useSelector(getUserName)
    if (!cart.length) return <EmptyCart />
    return (
        <div className="px-4 py-3">
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>

            <h2 className="mt-7 text-xl font-semibold">
                Your cart, {userName}
            </h2>

            <ul className="divide-y divide-stone-200 border-b">
                {cart.map((item) => (
                    <CartItem item={item} key={item.pizzaId} />
                ))}
            </ul>

            {edit && (
                <div>
                    {cart
                        .filter((el) => el.pizzaId === selectedId)
                        .map((item) => (
                            <IngredientsEdit
                                key={item.pizzaId}
                                pizzaId={item.pizzaId}
                            />
                        ))}
                </div>
            )}
            <div className="mt-6 space-x-2">
                <Button to="/order/new" type="primary">
                    Order pizzas
                </Button>
                <Button type="secondary" onClick={() => dispatch(clearCart)}>
                    Clear cart
                </Button>
            </div>
        </div>
    )
}

export default Cart
