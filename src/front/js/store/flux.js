const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			syncTokenFromSessionStore: () => {
                   const token = sessionStorage.getItem("token")
				   console.log("app just loaded, sync session storage token")
				  if(token && token != "" && token != undefined) setStore({token: token})

			},
			logout: () => {
				sessionStorage.removeItem("token");
				console.log("Login out")
				setStore({ token: null });
			},
             //New action to use Login
			 login: async (email, password) => {
			    const postFetch = {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify({
					  email: email,
					  password: password
					}),
				  };
				  
				try{
					const resp = await fetch("https://3001-nox1do-helloflaskreactb-sav6ai6v9bo.ws-us72.gitpod.io/api/token",postFetch)
					if (resp.status !== 200) {
						alert("There has been some error");
						return false;
					}
					const data = await resp.json();
					  console.log("this comes from the end", data);
					  sessionStorage.setItem("token", data.access_token);
					  setStore({token: data.access_token})
					  return true;
				}
				catch(error){
					console.error("there has been an error login in")
				}
			},
			 
				
				
			
			 
                      

			getMessage: () => {
				   const store = getStore();
                   const opts = {
					headers: {
						Authorization: "Bearer " + store.token
					}
				   };


				
					// fetching data from the backend
					fetch("https://3001-nox1do-helloflaskreactb-sav6ai6v9bo.ws-us72.gitpod.io/api/hello", opts)
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message}))
					// don't forget to return something, that is how the async resolves
					.catch(error => console.log("Error loading message from backend", error))
				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				// const demo = store.demo.map((elm, i) => {
				// 	if (i === index) elm.background = color;
				// 	return elm;
				// });

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
