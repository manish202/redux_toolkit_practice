import {incByNum} from "./actions&reducers/actions";
import {increment,decrement2} from "./actions&reducers/counterSlice2";
import {useSelector,useDispatch} from "react-redux";
const Count2 = () => {
    const {count2} = useSelector(state => state.counterReducer2);
    const dispatch = useDispatch();
    return(
        <>
            <h1>{count2}</h1>
            <button type="button" onClick={() => dispatch(increment())}>Increment</button>
            <button type="button" onClick={() => dispatch(decrement2())}>Decrement</button>
            <button type="button" onClick={() => dispatch(incByNum(10))}>Inc By Num</button>
        </>
    )
}
export default Count2;