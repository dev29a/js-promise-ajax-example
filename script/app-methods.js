

// Callback : Function only used to get User Name
/*
function getUserDetailsOld(userId, url, callback) {
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
*/

//Above callback made into promise, used to get User Name for a given User Id. 
function getUserDetails(userId,url) {
	return new Promise((response, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.addEventListener('readystatechange', () => {
			if ( xhr.status === 200 && xhr.readyState === 4 ) {
				 const data = JSON.parse(xhr.responseText)
				 const element = data.find( el => el.id === userId)	
				 response(element)
				}
				else if ( xhr.readyState === 4 ) {  reject('Unable to fetch user details!', 'undefined')}
				})
		xhr.open('GET',url )
		xhr.send()
	})
}


/************GET ALL TO-DOs BASED ON USER-ID********/
function getTodos(userId, urlTodos){
	urlTodos += `/?userId=${userId}`
	//console.log(urlTodos)
	return new Promise( (response , reject) => {
			const xhr = new XMLHttpRequest()
			xhr.addEventListener('readystatechange', () => {
					if(xhr.status === 200 && xhr.readyState ===4 ) { 
						const data = JSON.parse(xhr.responseText)
						//console.log(data)
						response(data)	
					}else if(xhr.readyState === 4) {
						reject('Unable to fetch Todos')
					}
				}  
			)
			xhr.open('GET', urlTodos) 
			xhr.send(null)
	} )
} 


//Experimental: This is a function I used earlier to to return User Id for a User Name.
/*
	function getUserId(userName, urlName){
		return new Promise( (response , reject) => {
				const xhr = new XMLHttpRequest()
				xhr.addEventListener('readystatechange', () => {
						if(xhr.status === 200 && xhr.readyState ===4 ) { 
							const data = JSON.parse(xhr.responseText).find(el => el.name === userName)
							response(data.id)	
						}else if(xhr.readyState === 4) {
							reject('Unable to fetch User Id')
						}
					}  
				) 
				xhr.open('GET', urlName) 
				xhr.send(null)
		} )
	} 
*/


