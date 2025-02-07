import { useEffect } from 'react'
import { useFetcher } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { getIngredients, getOtherIngredients } from './cartSlice'
import IngredientsEditItem from './IngredientsEditItem'

function IngredientsEdit({ pizzaId }) {
    const fetcher = useFetcher()
    useEffect(() => {
        if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu')
    }, [fetcher])

    console.log(fetcher.data)

    const allIngridients = fetcher?.data?.map((el) => el.ingredients)?.flat()

    const ingredients = useSelector(getIngredients(pizzaId))
    const otherIngredients = useSelector(getOtherIngredients(pizzaId))
    const uniqueIngridients = [...new Set(allIngridients)].filter(
        (el) => !ingredients.includes(el)
    )
    return (
        <>
            <h2 className="mt-5 text-center text-2xl font-semibold text-stone-500">
                {fetcher.state === 'loading' && 'Loading ingredients...'}
            </h2>
            <ul className="flex flex-wrap gap-6 px-2 py-5">
                {uniqueIngridients.map((uniqueIngridient) => (
                    <IngredientsEditItem
                        key={Math.random(0, new Date().getTime()) * 2435}
                        uniqueIngridient={uniqueIngridient}
                        otherIngredients={otherIngredients}
                        pizzaId={pizzaId}
                    />
                ))}
            </ul>
        </>
    )
}

export default IngredientsEdit
