async function getAllEpisodes(url) {

    try {
        let response = await fetch(url)
        let data = await response.json()
        
        let results = data.results
        
        return results

      } catch (error) {
        console.log("some error occured")
      }

}

export default getAllEpisodes