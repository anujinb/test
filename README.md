Used redux-thunk middleware in this application.
Created action types and dispatch: getUsersRequest, getUsersSuccess and getUsersFailure.
Used fetch function to pass the user URL and make GET request. Then turned the response into JSON. Then store the data into users variable and dispatch getUsersSuccess action. Then dispatch getUsersFailure and pass errorMessage.
Defined initialState: set users as an empty array, loading as boolean and error as null.
Created user reducer that takes the state as initial state and action and switches action types. In case Success returns users as action payload. 
Used combine Reducers and Combine Actions. Used createStore that takes reducers and applyMiddleware. Then wrapped App inside the Provider to enable data through all components.
Used material-UI to show data. Used pagination for the list. 
