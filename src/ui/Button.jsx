import { Link } from 'react-router-dom'
function Button({ children, disabled, to, type, onClick }) {
    const className =
        'inline-block text-sm rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 ring-offset-2 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed sm:px-6 sm:py-4'
    const base =
        'inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 ring-offset-2 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed '
    const styles = {
        primary: base + ' px-4 py-3 sm:px-6 sm:py-4',
        small: base + ' px-2 py-1 sm:px-5 sm:py-2.5 text-xs',
        round: base + ' px-2.5 py-1.5 sm:px-3.5 sm:py-2',
        favourite:
            'px-2.5 py-1.5 sm:px-3.5 sm:py-2 inline-block text-sm rounded-full bg-red-500  font-semibold uppercase tracking-wide text-stone-200 ring-offset-2 transition-colors duration-300 hover:bg-red-400 focus:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 disabled:cursor-not-allowed ',

        secondary:
            'inline-block text-sm rounded-full border border-2 border-stone-300 px-4 py-2.5 font-semibold uppercase tracking-wide text-stone-400 ring-offset-2 transition-colors duration-300 hover:text-stone-800 hover:bg-stone-300 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 disabled:cursor-not-allowed sm:px-6 sm:py-3.5',
    }
    if (to)
        return (
            <Link className={styles[type]} to={to}>
                {children}
            </Link>
        )

    if (onClick)
        return (
            <button
                disabled={disabled}
                className={styles[type]}
                onClick={onClick}
            >
                {children}
            </button>
        )

    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    )
}

export default Button
