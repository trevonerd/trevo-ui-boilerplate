import React, { Fragment } from 'react';

const Title = props => {
    return (
        <Fragment>
            <h1>{props.children}</h1>
            <style jsx>
                {`
                    h1 {
                        color: orange;
                        font-size: 42px;
                        text-align: center;
                    }
                `}
            </style>
        </Fragment>
    );
};

export default Title;
