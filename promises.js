// const promose1=new Promise((resolve, reject)=>{
// setTimeout(()=>{
//    console.log('Promise1 started')
//    resolve('promise 1 reolved')
// },1000)
// })
// promose1
// .then((user)=>{
//    console.log(user)
// })
// .catch((error)=>{
//    console.log(error)
// })
// //2nd Promise
// new Promise((resolve, reject)=>{
//    setTimeout(() => {
//       console.log('Promise2 started')
//       resolve([1,2,3,4])
//    }, (1000));
// })
// .then((a)=>{
//    console.log(a, 'promise 2 resolved')
// })
// .catch((error)=>{
//    console.log(error)
// })

// //3rd Promise
// new Promise((resolve, reject)=>{
//    setTimeout(()=>{
//       console.log('3rd Promise started')
//       resolve({name:'sachin', id:2179})
//    },1000)
// })
// .then((obj)=>{
//    console.log(obj,'promise 3 resolved')
// })
// .catch(()=>{
//    console.log('error')
// })

// //4th promise
// const promise4=new Promise((resolve, reject)=>{
//    setTimeout(()=>{
//      console.log('4th Promise started')
//      let error=true
//      if(!error){
//       resolve({username:'Lord_PUNK', password:'123'})
//      }
//      else{
//       reject('ERROR: Something went wrong.')
//      }
//    }, 1000)
// })
// promise4.then((user)=>{
//    console.log(user)
//    return user.username})
// .then(username=>console.log(username))
// .catch(error=>console.log(error))
// .finally(()=>console.log('Promises either resolved or rejected.'))


//5th Promise
// promise5 = new Promise((resolve, reject)=>{
//     let error=false
//     console.log('Promise 5 started');
//     if(!error){
//       resolve({id:'20179', username:'sachinusers'})
//     }
//     else{
//       reject('ERRRO Something went wrong with async')
//     }
// })
// async function password5Consumed(){
  
//   try {
//    const response= await promise5
//    console.log(response);
//   } catch (error) {
//    console.log(error);
//   }
// }
// password5Consumed()

//6th Promise
async function getAllUsers(){
 try {
  const reponse= await fetch('https://api.fxratesapi.com/latest')
  //data Fetch krne ke liye thoda time lgta hai isiliye await keyword ki help se excution flow ko rok deta hai
  //beacuse reponse data baki ke line pr depended hai.
  console.log(reponse);
  const data = await reponse.json()
  console.log(data)
  console.log('################################################################');
 } catch (error) {
  console.log(error);
 }
}
getAllUsers()

//7th with fetch():fetch() method returns an promise and takes api link as a prarameter in this method.
//'https://ipapi.co/json'
// async function fun(){
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>console.log(err))
// }
// fun()