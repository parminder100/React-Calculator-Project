import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import "../UI/Ui.css";

const Ui = () =>{
    const [result, setResult] = useState("");

    const handleClick = (e) =>{
        setResult(result.concat(e.target.name));
    }

    const clear = () =>{
        setResult("");
    }

    const backSpace = () =>{
        setResult(result.slice(0,-1));
    }

    const calculate = () =>{
        setResult(eval(result).toString());
    }
    
    return(
        <>
            <div className="container text-center pt-4 main-container">
                <div className='calculator-container'>
                    <form className=''>
                        <input className='input-value' type="text" value={result} />
                    </form>
                    <div className='key-pads-container'>
                        <div className='key-pads'>
                            <button onClick={clear} className='clear-btn'>Clear</button>
                            <button onClick={backSpace} className='backspace-btn'>C</button>
                            <button onClick={handleClick} name='/' className='divide-btn'>/</button>
                        </div>
                        <div className='key-pads'>
                            <button onClick={handleClick} name='7' className='calculator-btn'>7</button>
                            <button onClick={handleClick} name='8' className='calculator-btn'>8</button>
                            <button onClick={handleClick} name='9' className='calculator-btn'>9</button>
                            <button onClick={handleClick} name='x' className='calculator-btn operator-btn'>×</button>
                        </div>
                        <div className='key-pads'>
                            <button onClick={handleClick} name='4' className='calculator-btn'>4</button>
                            <button onClick={handleClick} name='5' className='calculator-btn'>5</button>
                            <button onClick={handleClick} name='6' className='calculator-btn'>6</button>
                            <button onClick={handleClick} name='-' className='calculator-btn operator-btn'>-</button>
                        </div>
                        <div className='key-pads'>
                            <button onClick={handleClick} name='1' className='calculator-btn'>1</button>
                            <button onClick={handleClick} name='2' className='calculator-btn'>2</button>
                            <button onClick={handleClick} name='3' className='calculator-btn'>3</button>
                            <button onClick={handleClick} name='+' className='calculator-btn operator-btn'>+</button>
                        </div>
                        <div className='key-pads'>
                            <button onClick={handleClick} name='0' className='zero-btn'>0</button>
                            <button onClick={handleClick} name='.' className='dot-btn'>.</button>
                            <button onClick={calculate} className='submit-btn'>=</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Ui;