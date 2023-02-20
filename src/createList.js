import { useDispatch,useSelector } from "react-redux"
import { useState } from "react"
import { storeData } from './store';
function CreateList() {
    let storeState = useSelector((state) => { return state.data })
    let dispatch = useDispatch()
  
    let [title, setTitle] = useState('')
    let [author,setAuthor] = useState('')
    let [date, setDate] = useState('')
    let [text, setText] = useState('')
  
    let titleContent = (e) => {
      setTitle( e.target.value)
    }
    let authorContent = (e) =>{
        setAuthor(e.target.value)
    }
    let dateContent = (e) => {
      setDate( e.target.value)
    }
    let textContent = (e) => {
      setText( e.target.value)
    }
    let newData = {
      title: title,
      author: author,
      date: date,
      text: text
    }
    let add = () => {
      let data = [...storeState, newData]
  
      dispatch(storeData(data));
    }
  
    return (
      <div className='modal-info'>
        <h3>글 쓰기</h3>
        <br />
        제목:<br />
        <input onChange={titleContent} /><br />
        작성자:<br />
        <input onChange={authorContent} /><br />
        날짜<br />
        <input onChange={dateContent} /><br />
        내용<br />
        <textarea rows="4" cols="50" onChange={textContent} /><br /><br />
        <button onClick={add}>글작성</button>
      </div>
    )
  }
  
  export default CreateList