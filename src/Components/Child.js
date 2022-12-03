import React, { useContext, useState } from 'react';
import { COUNTER_CONTEXT } from '../App';
import SubmitForm from './SubmitForm';

const Child = () => {

  const {count, setCount} = useContext(COUNTER_CONTEXT)

    return (
        <div>
            <div>
                <div>
                    <h1>Child: {count}</h1>
                    <div>
                        <button onClick={() => setCount(count - 1)}>Decrement</button>
                        <button className='' onClick={() => setCount((prevState) => prevState + 1)}>Increment</button>
                    </div>
                </div>
            </div>

            <SubmitForm />
        </div>
    );
};

export default Child;