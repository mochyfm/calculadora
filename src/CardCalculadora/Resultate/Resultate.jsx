import PropTypes from 'prop-types'

const Resultate = ({ operationValues }) => {

  const Operate = (typeOfOperation, output=false) => {
      switch(typeOfOperation) {
        case 'sum':
          return (output ? <span>El resultado de la suma es {parseInt(operationValues.numero1) + parseInt(operationValues.numero2)}</span> 
          : <span>{parseInt(operationValues.numero1) + parseInt(operationValues.numero2)}</span>)
        case 'sus':
          return (output ? <span>El resultado de la resta es {parseInt(operationValues.numero1) - parseInt(operationValues.numero2)}</span> 
          : <span>{parseInt(operationValues.numero1) - parseInt(operationValues.numero2)}</span>)
        case 'mult':
          return (output ? <span>El resultado de la multiplicacion es {parseInt(operationValues.numero1) * parseInt(operationValues.numero2)}</span> 
          : <span>{parseInt(operationValues.numero1) * parseInt(operationValues.numero2)}</span>)
        case 'div':
          return (output ? <span>El resultado de la division es {parseInt(operationValues.numero1) / parseInt(operationValues.numero2)}</span> 
          : <span>{parseInt(operationValues.numero1) / parseInt(operationValues.numero2)}</span>)
      }
  }
 
  return (
        <>
          <div className='boxResult col-12'>
               {Operate(operationValues.operationType)}
          </div>
          <div className='col-12'>{Operate(operationValues.operationType, true)}</div> 
        </>
  )
}

Resultate.propTypes = {
  operationValues: PropTypes.object,
}

export default Resultate