import React from 'react'
import { useState } from 'react';
export default function Home() {
  //  let name = 'mario';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);
    function clickHandler() {
        if (name == 'mario') {
             setName('lugia');
            setAge(30);
        }
        else {
             setName('mario');
        setAge(25);
        }
       
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={clickHandler}>Click me</button>
            
        </div>
    )
}
