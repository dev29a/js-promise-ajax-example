

const url = 'http://jsonplaceholder.typicode.com/users'
const urlTodos = 'http://jsonplaceholder.typicode.com/todos'
const inputEl = document.querySelector('input')
	
					
inputEl.addEventListener('input', (e) => {
	const userId = e.target.valueAsNumber
	//Promise object as getUserDetails returns a Promise
	varUserDetails = new getUserDetails(userId, url) 
	//Promise Chaining --->
	varUserDetails.then( (data) => 	{	//console.log(data.name)
										clearRenderUserTodosTitles('#user-name')
										renderUserNames(data.name)
										return getTodos(data.id, urlTodos )
									}
				 ).then( (data) =>  {//console.log(data)
										clearRenderUserTodosTitles('#todo-title-holder')
										data.forEach( el => renderUserTodosTitles(el.title))
									}
				).catch( (err)	=> { console.log(err)
									}
				)  
		}
	)
				

function clearRenderUserTodosTitles(clearElement){
	document.querySelector(clearElement).textContent = ''
}

function renderUserNames(userName){
	const usernameEl = document.createElement('h2')
	usernameEl.textContent = userName
	document.querySelector('#user-name').appendChild(usernameEl)
}
				
function renderUserTodosTitles(titleText){
	const h4TitleEl = document.createElement('h4')
	h4TitleEl.textContent = titleText
	document.querySelector('#todo-title-holder').appendChild(h4TitleEl)
}




	
