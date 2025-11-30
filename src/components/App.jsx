import Container from './Container'
import TeladeResultado from './TeladeResultado'
import Botao from './Botao'
import Digito from './Digito'

import { useState } from 'react'

const App = () => {

  const [digito, setDigito] = useState('0') 

  return (
    <>
    <Container
    style='w-[30%] h-[80%] bg-purple-100 rounded-2xl
    flex flex-col p-4 gap-2'
    >
      <TeladeResultado
      style='w-[100%] h-[20%] border rounded-2xl flex justify-end pr-3 pb-1 items-end border-purple-300 border-2'
      >
        <Digito 
        style='text-5xl'
        text={digito}
        />
      </TeladeResultado>
      <Container
      style='p-2 grid grid-cols-4 grid-flow-row gap-2 h-[80%]'
      >
        <Botao
        style='button bg-purple-500'
        text='('
        setDigito={setDigito}
        />
        <Botao
        style='button bg-purple-500'
        text=')'
        setDigito={setDigito}
        />
        <Botao
        style='button bg-purple-500'
        text='%'
        setDigito={setDigito}
        />
        <Botao
        style='button bg-purple-500'
        text='/'
        setDigito={setDigito}
        />
        <Botao
        style='button-2 bg-purple-200 text-sky-900'
        text='7'
        setDigito={setDigito}
        />
        <Botao
        style='button-2 bg-purple-200 text-sky-900'
        text='8'
        setDigito={setDigito}
        />
        <Botao
        style='button-2 bg-purple-200 text-sky-900'
        text='9'
        setDigito={setDigito}
        />
        <Botao
        style='button bg-purple-500'
        text='*'
        setDigito={setDigito}
        />
        <Botao
        style='button-2 bg-purple-200 text-sky-900'
        text='4'
        setDigito={setDigito}
        />
        <Botao
        style='button-2 bg-purple-200 text-sky-900'
        text='5'
        setDigito={setDigito}
        />
        <Botao
        style='button-2 bg-purple-200 text-sky-900'
        text='6'
        setDigito={setDigito}
        />
        <Botao
        style='button bg-purple-500'
        text='-'
        setDigito={setDigito}
        />
        <Botao
        style='button-2 bg-purple-200 text-sky-900'
        text='1'
        setDigito={setDigito}
        />
        <Botao
        style='button-2 bg-purple-200 text-sky-900'
        text='2'
        setDigito={setDigito}
        />
        <Botao
        style='button-2 bg-purple-200 text-sky-900'
        text='3'
        setDigito={setDigito}
        />
        <Botao
        style='button bg-purple-500'
        text='+'
        setDigito={setDigito}
        />
        <Botao
        style='button bg-purple-500 text-sky-900'
        text='CE'
        setDigito={setDigito}
        />
        <Botao
        style='button-2 bg-purple-200 text-sky-900'
        text='0'
        setDigito={setDigito}
        />
        <Botao
        style='button-2 bg-purple-200 text-sky-900'
        text='.'
        setDigito={setDigito}
        />
        <Botao
        style='button bg-purple-500'
        text='='
        setDigito={setDigito}
        />
      </Container>
    </Container>
    
    </>
  );
}

export default App;
