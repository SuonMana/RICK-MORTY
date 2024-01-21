function displayCharacters(wrapper, characters) {
  wrapper.innerHTML = ``

  for (let i = 0; i < characters.length; i++) {
    let current = characters[i]

    wrapper.innerHTML += `
      <div class="character">
        <div class="cover">
          <img src="${current.image}" alt="">
        </div>
        <div class="detail">
          <h4>${current.name}</h4>
          <p>${current.status} - ${current.species}</p>
          <div class="location">
            <p class="label">Last known location</p>
            <p><a href="#">${current.location.name}</a></p>
          </div>
          <div class="origin">
            <p class="label">First seen in</p>
            <p><a href="#">${current.origin.name}</a></p>
          </div>
          <div class="eps">
            <p class="label">Episodes</p>
            <p>${current.episode.length}</p>
          </div>
        </div>
      </div>
    `
  }
  
}

export default displayCharacters