import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(1);
    const plus = () => {
        setCount(count + 1);
    };

    const minus = () => {
        setCount(count - 1);
    };

    return (
        <div  className='border-solid border-2 border-inherit'>
            <button onClick={minus} className=''>
                 <img className='' src='/img/minus.svg'/>
            </button>
   <p>{count}</p>
            <button onClick={plus} className=''>
                 <img className='' src='/img/plus.svg'/>
            </button>

           

        </div>
    )
};

export default Counter;




