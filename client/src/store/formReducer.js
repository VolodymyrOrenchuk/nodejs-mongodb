const initialState = []

const formReducer = (state = initialState,action) => {
    // console.log(action.payload)
    switch (action.type) {

        case "ADD_USER": {
            return [...state,action.payload]
        }
        default:
            return state;
    }
}

export default formReducer