import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';

const InputUrl = (props) => {

  const {count, setCount, setDataLink} = props;
  const [fail, setFail] = useState(false);
  const [input, setInput] = useState({value: ""});
  
  useEffect(() => { 
    const fetchData = async () => {
        if(count > 0){

          try{
            if(/^https:/gi.test(input.value)){
              
              const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${input.value}`);
              const datas = await response.json();
              setDataLink(prev => {
                return [
                  {
                  original_link: datas.result.original_link,
                  short_link: datas.result.short_link,
                  id: nanoid(),
                  isCopy: false
                  },
                  ...prev
                ]
                  
              });
            }
            else{
              
            }
          }
          catch(error){
            console.log(`name of error: ${error}`);
          }
        }
         
        console.log("call effect");
      }
      fetchData();
  }, [count]);
  
  const handleChange = (event) => {
    setInput(prev => {
      return {
        ...prev,
        value: event.target.value
      }
    })
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    setCount(prev => prev + 1);
    !/^https:/gi.test(input.value) ? setFail(true) : setFail(false)
    
  }

  return (
    <section className='inputUrl__container'>
      <div className='inputUrl'>
        <form className={fail ? "form__fail" : null}>
          <div className='form__container'>
            <input 
              type="text" 
              placeholder='Shorten a link here...' 
              value={input.value}
              onChange={handleChange}
              className={fail ? "input__fail" : null}
            />
            <button 
              className='button button--small--radius'
              onClick={handleSubmit}
            >
              Shorten It!
            </button>
          </div>
          {fail ? <p className='fail__link'>please add a link</p> : null}
        </form>
      </div>
    </section>
  )
}

export default InputUrl