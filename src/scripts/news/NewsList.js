import { News } from './News.js'
import { getNews, useNews } from './NewsProvider.js'
import { useUsers } from './UsersProvider.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.news')

let visibility = true

eventHub.addEventListener('newsStateChanged', (customEvent) => {
  render()
})

eventHub.addEventListener('allNewsClicked', (customEvent) => {
  visibility = !visibility

  if (visibility) {
    contentTarget.classList.remove('hide')
  } else {
    contentTarget.classList.add('hide')
  }
})

const render = () => {
  if (visibility) {
    contentTarget.classList.remove('hide')
  } else {
    contentTarget.classList.add('hide')
  }

  getNews().then(() => {
    const allTheNews = useNews()
    const allTheUsers = useUsers()

    contentTarget.innerHTML = allTheNews
      .map((currentNewsObject) => {
        // Find the criminal for the current news
        const theFoundUser = allTheUsers.find((currentUserObject) => {
          return currentNewsObject.criminal === currentUserObject.id
        })

        return News(currentNewsObject, theFoundUser)
      })
      .join('')
  })
}

export const NewsList = () => {
  render()
}
