import React from 'react';
import style from 'styled-components';

const Heading1 = style.h2`
text-align : center;
color: green;
margin-top: 3%;
`
const Home = () => {
    return <div>
        <Heading1>Task Home Page</Heading1>
    </div>
};

export default Home;
