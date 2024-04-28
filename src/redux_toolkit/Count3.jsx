import {useSelector,useDispatch} from "react-redux";
import {increment,decrement,incrementByAmount} from "./actions&reducers/counterReducer3";
const Count3 = () => {
    const {count3} = useSelector(state => state.counterReducer3);
    const dispatch = useDispatch();
    return(
        <>
            <h1>{count3}</h1>
            <button type="button" onClick={() => dispatch(increment())}>Increment</button>
            <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
            <button type="button" onClick={() => dispatch(incrementByAmount(15))}>Inc By Num</button>
        </>
    )
}
export default Count3;