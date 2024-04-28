import {increment,decrement,multiply,divide} from "./actions/index";
import {useSelector,useDispatch} from "react-redux";
const ReduxApp = () => {
    const num = useSelector(state => state.updownReducer);
    const count = useSelector(state => state.multDivReducer);
    const dispatch = useDispatch();
    return(
        <>
            <h1>I am ReduxApp</h1>
            <h1>{num}</h1>
            <button type="button" onClick={() => dispatch(increment())}>Increment</button>
            <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
            <button type="button" onClick={() => dispatch(increment(5))}>Increment by 5</button>
            <br/><br/>
            <button type="button" onClick={() => dispatch(divide())}>Divide</button>
            <h1>{count}</h1>
            <button type="button" onClick={() => dispatch(multiply())}>Multiply</button>
        </>
    )
}
export default ReduxApp;