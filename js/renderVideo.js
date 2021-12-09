import { getTrends } from './services.js'

const filmWeek = document.querySelector('.film-week')

const firstRender = ({
  backdrop_path,
  original_name,
  title,
  name,
  vote_average
}) => {
  filmWeek.innerHTML = `

  <div class="container film-week__container" data-rating="${vote_average}">
  <div class="film-week__poster-wrapper">
    <img
      class="film-week__poster"
      src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}"
      alt="${name}"
    />
    <p class="film-week__title_origin">${original_name}</p>
  </div>
  <h2 class="film-week__title">${name ?? title}</h2>
  <a
    class="film-week__watch-trailer tube"
    href="https://youtu.be/V0hagz_8L3M"
    aria-label="смотреть трейлер"
  ></a>
</div>
  `
}

const renderVideo = async () => {
  const data = await getTrends()
  console.log(data)
  firstRender(data.results[0])
}

export default renderVideo
