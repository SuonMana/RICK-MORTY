async function getAllCharacters(url) {

    console.log("fetch characters from api")

    try {
        let response = await fetch(url)
        let data = await response.json()
        //console.log(data)
        let results = data.results
        //console.log(results)
        return results
      } catch (error) {
        console.log("some error occured")
      }

}

export default getAllCharacters