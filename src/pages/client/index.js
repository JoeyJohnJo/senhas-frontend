import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css';

function ClientPage() {
  const [myPass, setMyPass] = useState("00000")
  const [history, setHistory] = useState({"current":"00000","previous":"00000"})

  useEffect(() => {
    let eventSource = new EventSource("https://joeyjohnjo-senhas.herokuapp.com/cliente/acompanhamento")
    eventSource.onmessage = e => {
      setHistory(JSON.parse(e.data))
    }
  }, [])

  function requestPreferential() {
    fetch('https://joeyjohnjo-senhas.herokuapp.com/cliente/senha/preferencial')
    .then(res => res.text())
    .then((data) => {
      setMyPass(data)
    })
    .catch(console.log)
  }
  function requestNormal() {
    fetch('https://joeyjohnjo-senhas.herokuapp.com/cliente/senha/normal')
    .then(res => res.text())
    .then((data) => {
      setMyPass(data)
    })
    .catch(console.log)
  }
    return (
      <div className='grid'>
        <div className='left'>
          <div className='callboard'>
            <h3>Senha chamada:</h3>
            <p>{history.current}</p>
          </div>
          <div className='history'>
              <h3>Senha anterior: </h3>
              <p>{history.previous}</p>
          </div>
        </div>
        <div className='center'>
          <div className='top'>
            <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className='icon'/></Link>
            <h1>Retire sua senha e aguarde ser chamado</h1>
          </div>
          <div className='buttonContainer'>
            <div className='button normal' onClick={requestNormal}>
              Normal
            </div>
            <div className='button preferential' onClick={requestPreferential}>
              Preferencial
            </div>
          </div>
          <div className='yourPass'>
            <p>Sua senha: </p>
            <p>{myPass}</p>
          </div>
        </div>
      </div>
    )
  
}

export default ClientPage;