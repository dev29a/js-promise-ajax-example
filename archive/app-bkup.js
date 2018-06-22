

const url = 'http://jsonplaceholder.typicode.com/users'
const inputEl = document.querySelector('input')

inputEl.addEventListener('input', (e) => {
	
	const userId = e.target.valueAsNumber
		
	getUserDetails(userId,url, (error, userDetails) => {
					if (error === 'undefined') {
						console.log(userDetails.name)
						let h3El = document.querySelector('h3')
						h3El.textContent = userDetails.name
						}
					else if (userDetails === 'undefined') {
						console.log(error)
					}	
				})		
				
				
				
	} 
)

const promise = getUserDetailsPromise(2, url)
promise.then( (success)=> {console.log(`Success: ${success}`)},
			  (error) => {console.log(`Error: ${error}`)})


/* 
 promiseAdder(21).then(
	(data)=>{console.log(data)}
 ,  (error)=>{console.log(error)}
 )
*/
 
 promiseAdder(21).then(
	(data) => promiseMultiplier(data)
 ).then( 
	(data) => console.log(data)
 ).catch( 
	(err) => console.log(err)
  )
 
  
 console.log('This should print later')
 
 
 //based on User Name, print all To Dos
 getUserId('Patricia Lebsack', 'http://jsonplaceholder.typicode.com/users'
		).then(
			data => getTodos(data, 'http://jsonplaceholder.typicode.com/todos')
		).then(
			(data) => {//console.log(data)
			data.forEach( (el) => { //console.log(el.title) 
				const h3El = document.createElement('h3')
				h3El.textContent = el.title
				document.querySelector('body').appendChild(h3El)
			})}
		).catch(
			error => console.log(error))
 
		 
