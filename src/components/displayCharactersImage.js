function displayCharactersImage(characters) {
  let html = ``

  for(let i = 0; i < characters.length; i++) {

    let c = characters[i]
    let number = c.split("/")
    let index = number[5]
    console.log(index)

    html += `
    <div class="cast">
      <img src="https://rickandmortyapi.com/api/character/avatar/${index}.jpeg" alt="">
    </div>
    `
  }
  


  return html
}

export default displayCharactersImage