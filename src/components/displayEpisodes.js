import displayCharactersImage from "./displayCharactersImage.js"

function displayEpisodes(wrapper, episodes) {
  wrapper.innerHTML = ``

  for (let i = 0; i < episodes.length; i++){
    let current = episodes[i]

    wrapper.innerHTML += `
      <div class="episode">
        <h2>${current.name}</h2>
        <h5>${current.air_date}</h5>
        <h3>${current.episode}</h3>
        <h4>Characters casted in the episode</h4>
        <div class="casts-wrapper">
            ${displayCharactersImage(current.characters)}
        </div>
      </div>
    `
  }

  
  
}

export default displayEpisodes