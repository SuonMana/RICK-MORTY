import getAllCharacters from "../api/getAllCharacters.js"
import displayCharacters from "../components/displayCharacters.js"

let page = 1
window.addEventListener("DOMContentLoaded", async () => {
  let url = "https://rickandmortyapi.com/api/character"

  console.log("working on character page")

  let characters = await getAllCharacters(url)
  console.log(characters)
  const charactersWrapper = document.querySelector(".characters-wrapper")
  console.log(charactersWrapper)
  displayCharacters(charactersWrapper, characters)

  const title = document.querySelector(".section-title")
  title.textContent = `ALL CHARACTERS (${page}/42)`

  const btnGroup = document.querySelector(".btn-group")
  btnGroup.addEventListener("click", async (e) => {

    let btn = e.target

    if (btn.id == "nextBtn") {
      page = page + 1
      if (page > 42) {
        page = 42
        //btn.disabled = true
      }
    }

    if (btn.id == "prevBtn") {
      page = page - 1
      if (page < 1) {
        page = 1
        //btn.disabled = true
      }
    }

    console.log(page)
    let nextUrl = url + `?page=${page}`
    characters = await getAllCharacters(nextUrl)
    displayCharacters(charactersWrapper, characters)
    title.textContent = `ALL CHARACTERS (${page}/42)`
  })
})
