import React, { Fragment } from 'react';

const Button = props => {
    return (
        <Fragment>
            <button className="Button" type="button">
                {props.children}
            </button>
            <style jsx>
                {`
                    .Button {
                        background: light-grey;
                        border: 1px solid 333;
                        border-radius: 5px;
                    }
                `}
            </style>
        </Fragment>
    );
};

export default Button;
