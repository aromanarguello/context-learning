import React from 'react';

const GeneralContext = React.createContext();

/**
 * useGeneralContext throws error when context is
 * outside of provider range
 */
const useGeneralContext = () => {
    const context = React.useContext(GeneralContext);
    if (!context) throw new Error('No provider found');

    return context;
};

/**
 *
 */
const GeneralProvider = props => {
    const [state, setState] = React.useState('Alex');
    const value = React.useMemo(() => [state, setState], [state]);
    console.log({ props });
    return <GeneralContext.Provider value={value} {...props} />;
};

export { useGeneralContext, GeneralProvider };
