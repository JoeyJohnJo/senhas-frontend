import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css';

function AdminPage() {
  const [pass, setPass] = useState('00000')

  function reset() {
    fetch('https://joeyjohnjo-senhas.herokuapp.com/gerente/senha/redefinir')
    .then(res => res.text())
    .then((data) => {
      console.log(data)
    })
    .catch(console.log)
  }
  function callNext() {
    fetch('https://joeyjohnjo-senhas.herokuapp.com/gerente/senha/proxima')
    .then(res => res.text())
    .then((data) => {
      setPass(data)
    })
    .catch(console.log)
  }
  function callAgain() {
    fetch('https://joeyjohnjo-senhas.herokuapp.com/gerente/senha/rechamado')
    .then(res => res.text())
    .then((data) => {
      setPass(data)
    })
    .catch(console.log)
  }

  return (
    <div className='grid'>
      <div className='left'>
        <div className='callboard'>
          <h3>Senha chamada:</h3>
          <p>{pass}</p>
        </div>
      </div>
      <div className='center'>
        <div className='top'>
          <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className='icon'/></Link>
          <h1>Gerente</h1>
        </div>
        <div className='buttonContainer'>
          <div className='button normal' onClick={callNext}>
            Chamar Proximo
          </div>
          <div className='button preferential' onClick={reset}>
            Reiniciar
          </div>
        </div>
        <div className='buttonContainer'>
          <div className='button normal' onClick={callAgain}>
            Chamar Novamente
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage;