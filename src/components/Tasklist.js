import React from 'react';
import style from 'styled-components';
import { Card } from './Card';

const Heading1 = style.h2`
text-align : center;
color: Black;
margin-top: 3%;`
const Tasklist = (props) => {

    return <div>
        <Heading1>Tasks List Page</Heading1>
        <Card newarr={props.taskArray} />
    </div>;
};

export default Tasklist;
