export const getUsersRequest = () => {
    return {
        type: "GET_USERS_REQUEST"
    }
}
export const getUsersSuccess = (users) => {
    return {
        type: "GET_USERS_SUCCESS",
        payload: users
    }
}
export const getUsersFailure = (error) => {
    return {
        type: "GET_USERS_FAILURE",
        payload: error
    }
}

const url = "https://api.github.com/users"

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(getUsersRequest())
        fetch(url, {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => {
                const users = data
                dispatch(getUsersSuccess(users))
            })
            .catch(error => {
                const errorMessage = error.errorMessage
                dispatch(getUsersFailure(errorMessage))
            })
    }
}
