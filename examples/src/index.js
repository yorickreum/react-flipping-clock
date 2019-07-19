import React from 'react';
import { render} from 'react-dom';

import {FlippingCountdown} from "../../dist/bundle";

const App = () => (
    <FlippingCountdown />
);
render(<App />, document.getElementById("root"));
