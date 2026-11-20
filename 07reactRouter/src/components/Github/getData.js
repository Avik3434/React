const GetData = function (URL) {
    return fetch(URL).then((response) => {
        return response.json()
    })
        .catch((error) => {
            console.log(`Error while fetching data from url ${error}`)
  
        })
        
    }

export default GetData;