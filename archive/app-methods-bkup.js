

function getUserDetails(userId, url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('readystatechange', () => {
                   if ( xhr.status === 200 && xhr.readyState === 4 ) {
                       const data = JSON.parse(xhr.responseText)
                       const element = data.find( el => el.id === userId)	
                       callback('undefined', element)
                   }
                   else if ( xhr.readyState === 4 ) { callback('Unable to fetch data!', 'undefined')}
               }
           )
    xhr.open('GET',url )
    xhr.send()	 
}


function getUserDetailsPromise(userId, url){
   const promiseObj = new Promise( (resolve, reject) => {
       if (userId == 1) {resolve('Success')}
       else {
           reject('error')}
   } )
   return promiseObj
}


function promiseAdder(num){
   return new Promise( (resolve, reject) => {
       if (num === 2) { resolve(num + 2) }
       else {reject(console.log('Reject occured in promiseAdder'))}
   } )
}


function promiseMultiplier(num){
   return new Promise( (resolve, reject) =>{
       resolve(num * 10)
   } )
}

/************GET ALL TO-DOs BASED ON USER-NAME********/
//Leanne Graham

function getUserId(userName, urlName){
   return new Promise( (response , reject) => {
           
           const xhr = new XMLHttpRequest()
       
           xhr.addEventListener('readystatechange', () => {
                   if(xhr.status === 200 && xhr.readyState ===4 ) { 
                       const data = JSON.parse(xhr.responseText).find(el => el.name === userName)
                       response(data.id)	
                   }else if(xhr.readyState === 4) {
                       reject('Unable to fetch data')
                   }
               }  
           ) 
           xhr.open('GET', urlName) 
           xhr.send(null)
   } )
} 

function getTodos(userId, urlTodos){
   urlTodos += `/?userId=${userId}`
   console.log(urlTodos)
   return new Promise( (response , reject) => {
           const xhr = new XMLHttpRequest()
           
           xhr.addEventListener('readystatechange', () => {
                   if(xhr.status === 200 && xhr.readyState ===4 ) { 
                       const data = JSON.parse(xhr.responseText)
                       console.log(data)
                       response(data)	
                   }else if(xhr.readyState === 4) {
                       reject('Unable to fetch data')
                   }
               }  
           )
           xhr.open('GET', urlTodos) 
           xhr.send(null)
   } )
} 



