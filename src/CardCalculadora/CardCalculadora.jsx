import PropTypes from 'prop-types'
import { useState } from 'react'
import Resultate from './Resultate'

const Calculo = ({ operationValues, setOperationValues }) => {

  const [mathForm, setMathForm] = useState(operationValues)

  const handleInput = ({ target }) => {
      setMathForm({
        ...mathForm,
        [target.name]: target.value
      })
  }

  const handleSubmit = (value) => {
        setOperationValues({
          ...mathForm,
          operationType: value
        })
        setMathForm({
          numero1: 0,
          numero2: 0,
          operationType: null
        })
      }
  

  return (
    <div className='card-calculadora row'>
        <header>Calculadora</header>
        <div className="col-12 number-reciber">
            <input type="number" name='numero1' onChange={handleInput} value={mathForm.numero1}/>
            <input type="number" name='numero2' onChange={handleInput} value={mathForm.numero2}/>
        </div>
        <div className='card-body col-12'>
            <button type='submit' className='btn-sum' onClick={() => handleSubmit('sum')}>+ Sumar</button>
            <button type='submit' className='btn-sus' onClick={() => handleSubmit('sus')}>- Restar</button>
            <button type='submit' className='btn-mult' onClick={() => handleSubmit('mult')}>* Multiplicar</button>
            <button type='submit' className='btn-div' onClick={() => handleSubmit('div')}>\ Dividir</button>
        </div>
        <div className='card-body row'>
            {operationValues.operationType !== null ? <Resultate operationValues={operationValues}/> : null}
        </div>
    </div>
  )
}

Calculo.propTypes = {
    operationValues: PropTypes.object,
    setOperationValues: PropTypes.func.isRequired
}

export default Calculo