const initialState = []

const formNewsReducer = (state= initialState, action) => {
    switch(action.type) {
        case "ADD_NEWS": {
            return [...state,action.payload]
        }
        default:
            return state
    }
}

export default formNewsReducer