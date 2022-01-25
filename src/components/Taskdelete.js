import React from 'react';
import styled from 'styled-components';

const Taskdelete = (props) => {
    const taskIds = [];
    const changehandler = (event, id) => {
        if (event.target.checked) {
            taskIds.push(id)
        }
        else {
            const index = taskIds.indexOf(id);
            if (index > -1) {
                taskIds.splice(index, 1);
            }
        }
    }

    return <div>
        <Heading1>Delete Task Page</Heading1>
        <UL>
            {props.taskArray.map((e) => (
                <React.Fragment key={e.id}>

                    <LI > <INPUT type="checkbox"
                        onChange={(event) => changehandler(event, e.id)}
                    />
                        {e.name}
                    </LI>
                    <hr />

                </React.Fragment>
            )
            )}
        </UL>
        <Button type='submit' onClick={() => props.removeTasks(taskIds)}>Delete</Button>
    </div>;
};


const Heading1 = styled.h2`
text-align : center;
color: red;
margin-top: 3%;
`
const UL = styled.ul`
list-style-type: none;
margin: 1% 30%;
padding: 20px;
`
const LI = styled.li`
font-size:25px;
font-family: Arial, Helvetica, sans-serif;
margin-top: -3%;
`
const Button = styled.button`
width: 17%;
background-color: #85141f;
border: none;
color: white;
padding: 15px 32px;
display: inline-block;
font-size: 20px;
margin: 3% 40%;
cursor: pointer;
`
const INPUT = styled.input`
width: 20px;
height: 20px;
margin: 5% 6%;
`

export default Taskdelete;
