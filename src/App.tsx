import React, {useRef, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
    const [count, setCount] = useState(0)

    const myBox = useRef(null);
    console.log(myBox);

    const changeBoxColor = () => {
        // @ts-ignore
        myBox.current.style.background = "black";
    }

    const handleClickBox = () => {
        setCount(count + 1)
    }

    useEffect(()=>{
        document.title = `Box was click ${count} times`
    },[count])

    return (
        <div className="App">
            <div className="box" ref={myBox} onClick={handleClickBox}>
                <h1 className="text">{count}</h1>
            </div>
            <button onClick={changeBoxColor}>Change Color</button>
        </div>
    );
}

export default App;