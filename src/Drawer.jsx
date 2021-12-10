import React, { useState } from "react";

const Drawer = () => {
    const [state, setState] = useState(false);

    function change() {
        setState(!state);
        console.log(state);
    }
    return (
        <>
            <button onClick={change}>Click</button>

        </>
    );
}

export default Drawer;