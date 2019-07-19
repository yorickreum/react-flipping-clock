import React from 'react';
import {render} from 'react-dom';

import {FlippingClock, FlippingCountdown} from "../../dist/bundle";

const App = () => (
    <React.Fragment>
        Clock:
        <FlippingClock/>
        <hr />
        Countdown:
        <FlippingCountdown/>
    </React.Fragment>
);
render(<App/>, document.getElementById("root"));
