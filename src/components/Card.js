import React from 'react';
import styled from 'styled-components';
const UL = styled.ul`
list-style-type: none;
margin:0% 30%;
padding: 20px;
`
const LI = styled.li`
font-size:25px;
font-family: Arial, Helvetica, sans-serif;
margin-top: 5%;
`

export const Card = (props) => {
    return <div>
        <UL>
            {props.newarr.map((e, ind) => (
                <React.Fragment key={e.id}>
                    <LI > {ind + 1}:  {e.name}</LI>
                    <hr />

                </React.Fragment>
            )
            )}
        </UL>

    </div >
};
