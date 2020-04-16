import { News } from './News.js'
import { NewsForm } from './NewsForm.js'
import { useNews } from './newsProvider.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.news')

eventHub.addEventListener('newsStateChanged', (customEvent) => {
  render()
})

// .news is wrap div
contentTarget.innerHTML = `
  <div class="headflexRow">
    <h2>News</h2>
    <button id="plusBtn">+</button>
  </div>
`
contentTarget.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.id === 'plusBtn') {
    // console.log('yeah')
    NewsForm()
    const contentTarget = document.querySelector('.newsForm')
    contentTarget.classList.remove('hide')
  }
})

const render = (newsToRender) => {
  return newsToRender
    .map((newsObject) => {
      return News(newsObject)
    })
    .join('')
}
export const NewsList = () => {
  const news = useNews()

  const currentUserId = sessionStorage.getItem('activeUser')

  const filteredUserNews = news.filter(
    (userNews) => userNews.userId === parseInt(currentUserId)
  )

  contentTarget.innerHTML += `
    <div class="newsForm"></div>
    <div class="newsList">${render(filteredUserNews)}</div>
  `
}
