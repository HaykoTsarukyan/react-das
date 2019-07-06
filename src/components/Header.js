import React from 'react';
import './Header.css';
import { Button } from "reactstrap"

function Header(props) {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Content</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                </ul>
            </nav>
            <div>
                <Button
                    onClick={props.onToggleHandler}
                    type="button"
                    color="primary"
                >
                    burger
                </Button>
            </div>
        </>
    )
}
export default Header;