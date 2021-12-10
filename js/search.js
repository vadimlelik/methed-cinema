import renderCard from './renderCard.js'
import { search as searchGet } from './services.js'

const title = document.querySelector('.other-films__title')
const filmWeek = document.querySelector('.film-week')
const searchForm = document.querySelector('.header__search-form')
const searchInput = document.querySelector('.header__search-input')

const search = () => {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault()

    if (!searchInput.value) return

    searchGet(searchInput.value)
      .then((data) => {
        console.log(data)
        if (data.results.length) {
          renderCard(data.results)
        } else {
          throw ' К сожелению по вашему запросу ни чего не найдено ! '
        }
      })
      .then(() => {})
  })
}

export default search
