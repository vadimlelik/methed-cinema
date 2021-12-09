const API_KEY = '7c066fe0d4b9a831e12a5c288c0aa752'
const BASE_URL = 'https://api.themoviedb.org/3/'
const LANGUAGE = '&language=ru-RU'
//trending/all/day?api_key=<<api_key>>

const getData = (url) => {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw `Что-та пошло не так ${response.status}`
    })
    .catch((e) => console.log(e))
}

export const getTrends = async (type = 'all', period = 'week', page = 2) => {
  const url = `${BASE_URL}/trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`
  return await getData(url)
}
