import React from 'react';
import { useGeneralContext } from './GeneralContext';

const Dummy = () => {
    const [name, setName] = useGeneralContext();
    const addName = () => setName('Carlos');

    return (
        <div>
            <div>{name}</div>
            <button onClick={() => addName()}>Add Name</button>
        </div>
    );
};

export default Dummy;
