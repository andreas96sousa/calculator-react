const Botao = ({ style, text, setDigito }) => {

  function execute(){
    if (text === 'CE'){
      setDigito('0')
      return
    } 
    
    if(text === '='){
      setDigito(previous => {
        return String(eval(previous))
      })

      return

    }

    setDigito(previous => {
      if(previous === '0'){
        return text
      }
      return previous + text
    })
  }

  return (
    <>
      <button onClick={execute} className={style}>{text}</button>
    </>
  );
};

export default Botao;
