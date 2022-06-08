import CardCalculadora from './CardCalculadora';
import { useState } from 'react';

const App = () => {

  const [operationValues, setOperationValues] = useState({
    numero1: 0,
    numero2: 0,
    operationType: null
  })

  return (
    <div className='structure-box container'>
      <CardCalculadora operationValues={operationValues} setOperationValues={setOperationValues}/>
    </div>
  );
};

export default App;
