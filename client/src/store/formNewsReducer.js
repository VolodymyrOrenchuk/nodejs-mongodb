const initialState = []

const formNewsReducer = (state= initialState, action) => {
    console.log(action.payload)
    switch(action.type) {
        case "ADD_NEWS": {
            return [...state,action.payload]
        }
        default:
            return state
    }
}

export default formNewsReducer