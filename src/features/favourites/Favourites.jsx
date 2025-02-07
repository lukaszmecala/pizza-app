import { useSelector } from 'react-redux'
import FavouritesItem from './FavouritesItem'
import LinkButton from '../../ui/LinkButton'

function Favourites() {
    const favourites = useSelector((state) => state.favourites.favourites)
    console.log(favourites)

    return (
        <div className="px-4 py-3">
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>
            <h2 className="text-md py-5 text-center font-semibold md:text-xl">
                Favourites Pizza
            </h2>
            <ul className="mt-4 divide-y divide-stone-200 px-2">
                {favourites.map((pizza) => (
                    <FavouritesItem key={pizza.id} pizza={pizza} />
                ))}
            </ul>
        </div>
    )
}

export default Favourites
