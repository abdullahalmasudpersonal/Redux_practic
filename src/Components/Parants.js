import React, { useContext, useState } from 'react';
import { COUNTER_CONTEXT } from '../App';
import Child from './Child';

const Parants = () => {

    const { count, setCount } = useContext(COUNTER_CONTEXT);

    return (
        <div>
            <div>
                <div>
                    <div>
                        <h1>Parants: {count}</h1>
                    </div>
                </div>

                <Child /* count={count} setCount={setCount} */ />
            </div>
        </div>
    );
};

export default Parants;