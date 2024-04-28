import {increment,decrement} from "./actions&reducers/counterSlice";
import {incByNum} from "./actions&reducers/actions";
import {useSelector,useDispatch} from "react-redux";
const Count1 = () => {
    const {count} = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();
    return(
        <>
            <h1>{count}</h1>
            <button type="button" onClick={() => dispatch(increment())}>Increment</button>
            <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
            <button type="button" onClick={() => dispatch(incByNum(5))}>Inc By Num</button>
        </>
    )
}
export default Count1;