
//fetch() method returns an promise and takes api link as a prarameter in this method.
//fetch ek promise jo inbuilt hi resolve() and reject() call ho jatha hai 
//Fetch() method starts a proccess of fetching a data from the network returning a promise which 
//fullfiled once response is available 
/*
fetch() method only rejects when a network error is encountered. A fetch() method doesn't reject an error
on HTTP ERRORS(404,401...ETC)
 */
const res =fetch('https://pokeapi.co/api/v2/pokemon/ditto')
res.then((response)=>{
    return response.json()
})
.then((response)=>{
    console.log(response['abilities'][0]['ability']['url'])
})
//2nd type
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((response)=>{
    return response.json()
})
.then((response)=>{
    console.log(response)
})