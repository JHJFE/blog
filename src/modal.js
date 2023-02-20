function Modal({author, title, date, text }) {
    return (
      <div className='modal-info'>
        <h2>{title}</h2>
        <div className="list-info" style={{marginBottom:'25px'}}>
            <div>{author}</div>
            <div style={{marginRight:'10px'}}>{date}</div>
        </div>
        <div>{text}</div>
      </div>
    )
  }

 export default Modal