import axios from 'axios'

export const setLoaded = (val) => ({
    type: 'SET_LOADING',
    payload: val,
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    console.log(sortBy, category)
    dispatch(setLoaded(false))
    axios
        .get(
            `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${
                sortBy.type
            }&_order=${sortBy.order}`
        )
        .then(({ data }) => {
            dispatch(setPizzas(data))
        })
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
})
