
//import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import List from './list';
import Modal from './modal';
import CreateList from './createList';
import { storeData } from './store';



function App() {

  let modalState = useSelector((state) => { return state.modal }) // modal 상태
  let storeState = useSelector((state) => { return state.data }) //  전체 데이터 담은 상태
  let dispatch = useDispatch()

  let sortByTitle = () => { // 제목 순 정렬
    let arr = [...storeState]
    arr.sort((a, b) => {
      return a.title.toLowerCase() < b.title.toLowerCase() ? -1 :
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : 0;
    });
    return dispatch(storeData(arr));
  }

  return (
    <div className="App">
      <div className='logo'>
        <h3>농구 일기장</h3>
      </div>
      <CreateList />

      <ul>
        {storeState.map((obj, index) =>
          <List key={index} title={obj.title} date={obj.date} text={obj.text} author={obj.author} id={obj.id} />
        )}
      </ul>

      <div className='buttons'>
        <button onClick={sortByTitle}>가나다 정렬</button>
      </div><br /><br />{console.log(modalState)}
      <Modal author={modalState.author} title={modalState.title} date={modalState.date} text={modalState.text} /><br />

    </div>
  );
}


export default App;
