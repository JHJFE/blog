import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { rememberData,storeData } from './store';

function List({ author,title, date, text, id }) { //κΈ μμ±
    let list = useSelector((state) => {return state.data})
    let dispatch = useDispatch()

    let [count, setCount] = useState(0);
    let addThumb = () => {
      return setCount(pre => pre += 1)
    }
    let remove = () => {

      let data = list.filter((obj)=>{
        return obj.id !== id 
      })
      
      dispatch(storeData(data));
    }
    let payload = { title: title, date: date, text: text,author : author, id: list.length}
    return (
  
      <div className='list'>
        <div className='list-info'>
          <p className='list-title' onClick={() => {
            dispatch(rememberData(payload))
          }}>
            {title}
            <span onClick={addThumb}> π {count}</span>
          </p>
          <p>{date}</p>
        </div>
        <button className='delete-button' onClick={remove}>μ­μ </button>
      </div>
    )
  }
  export default List;