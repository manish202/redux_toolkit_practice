const initialState = 0;
const updownReducer = (state=initialState,action) => {
    switch(action.type){
        case "INC":
            return state + (action.payload ?? 1);
        case "DEC":
            return state - 1;
        default:
            return state;
    }
}
export default updownReducer;