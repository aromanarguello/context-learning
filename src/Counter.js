import React from 'react';
import { useGeneralContext } from './GeneralContext';

const Counter = () => {
    const [count, setCount] = useGeneralContext();

    const increment = () => setCount(c => c + 1);
    return (
        <div>
            {count}
            <button onClick={() => increment()}>Add</button>
        </div>
    );
};

export default Counter;
