import getAllEpisodes from "../api/getAllEpisodes.js"
import displayEpisodes from "../components/displayEpisodes.js"

let page = 1
window.addEventListener("DOMContentLoaded", async () => {
  let url = "https://rickandmortyapi.com/api/episode"

  console.log("working on episode page")

  let episodes = await getAllEpisodes(url)
  console.log(episodes)
  let episodesWrapper = document.querySelector(".episodes-wrapper")
  displayEpisodes(episodesWrapper, episodes)
})