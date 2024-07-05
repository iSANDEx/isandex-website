import * as React from 'react';
// import FlagIconFactory from 'react-flag-icon-css';
import { MDBIcon } from 'mdb-react-ui-kit';

// Please only use `FlagIconFactory` one time in your application, there is no
// need to use it multiple times (it would slow down your app). You may place the
// line below in a `FlagIcon.js` file in your 'components' directory, then
// write `export default FlagIcon` as shown below and import it elsewhere in your app.
// const FlagIcon = FlagIconFactory(React);
// If you are not using css modules, write the following:
function FlagIcon () {
    return (
        <MDBIcon />
    )
}
 
export default FlagIcon;