import { useSelector, useDispatch } from "react-redux"


let sortByTitle = () => {
    let storeState = useSelector((state) => { return state.data })
let dispatch = useDispatch()

    let arr = [...storeState]
    arr.sort((a, b) => {
        return a.title.toLowerCase() < b.title.toLowerCase() ? -1 :
            a.title.toLowerCase() > b.title.toLowerCase() ? 1 : 0;
    });
    return dispatch(storeData(arr));
}
export default sortByTitle