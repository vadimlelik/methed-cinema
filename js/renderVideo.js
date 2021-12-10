import renderCard from './renderCard.js'
import { getTrends, getVideo } from './services.js'

const filmWeek = document.querySelector('.film-week')

const firstRender = (data, video) => {
  const { key } = video
  filmWeek.innerHTML = `

  <div class="container film-week__container" data-rating="${
    data.vote_average
  }">
  <div class="film-week__poster-wrapper">
    <img
      class="film-week__poster"
      src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${
        data.backdrop_path
      }"
      alt="${data.name}"
    />
    <p class="film-week__title_origin">${data.original_name}</p>
  </div>
  <h2 class="film-week__title">${data.name ?? data.title}</h2>

  ${
    key
      ? `<a
        class="film-week__watch-trailer tube"
        href="https://youtu.be/${key}"aria-label="смотреть трейлер"></a>`
      : ''
  }

</div>
  `
}

const renderVideo = async () => {
  const data = await getTrends()

  const [ferstcard, ...otherCard] = data.results
  otherCard.length = 16

  const video = await getVideo(ferstcard.id, ferstcard.media_type)
  firstRender(ferstcard, video.results[0])
  renderCard(otherCard)
}

export default renderVideo
