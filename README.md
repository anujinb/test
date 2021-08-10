Used redux thunk middleware in this application.
Created action types and dispatch: getUsersRequest, getUsersSuccess and getUsersFailure.
Used fetch function to pass the user url and make GET request. Then turned response into json. 
Then stored the data into users variable and dispatch getUsersSuccess action. Then dispatch getUsersFailure and pass errorMessage.
Defined initialState: set users as empty array, loading as boolean and error as null.
Created user reducer that takes state as initial state and action and switch action types. In case Success return users as action payload. 
Used combine Reducers and Combine Actions. Used createStore that takes reducers and applyMiddleware. Then wrapped App inside the Provider to enable data through all components.
Used material ui list to show api and used pagination for list. 
