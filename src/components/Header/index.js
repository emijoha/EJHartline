import React from 'react';
import "./style.css";

function Header(props) {
    return (
        <>
            <div>
                <h1><span class="bold">{props.pageName}</span>/EMILIA_JOSEFINA_HARTLINE</h1>
            </div>
        </>
    )
}

export default Header;