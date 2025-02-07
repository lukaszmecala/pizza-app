import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import UserName from '../features/user/UserName'
import Button from './Button'

function Header() {
    return (
        <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
            <Link to="/" className="tracking-widest">
                Fast Pizza React Co.
            </Link>
            <SearchOrder />
            <Button type="favourite" to="/favourites">
                Favourites
            </Button>
            <UserName />
        </header>
    )
}

export default Header
