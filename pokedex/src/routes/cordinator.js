export const goToDetailPage = ((history, id) => {
    history.push(`/details/${id}`)
})

export const goToPokedexPage = ((history) => {
    history.push("/pokedex")
})

export const goToHomePage = ((history) => {
    history.push("/")
})