import React from 'react';
import Dummy from './Dummy';

import { GeneralProvider, useGeneralContext } from './GeneralContext';
const CounterComponent = React.lazy(() => import('./Counter.js'));

const App = () => {
    return (
        <React.Fragment>
            <GeneralProvider>
                <Dummy />
                <React.Suspense fallback={<div>...Loading</div>}>
                    <CounterComponent />
                </React.Suspense>
            </GeneralProvider>
        </React.Fragment>
    );
};

export default App;
