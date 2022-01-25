import React, { useState } from 'react';
import style from 'styled-components';
//In react-router-dom v6 useHistory() is replaced by useNavigate()
import { useNavigate } from "react-router-dom";
import { nanoid } from 'nanoid'


const Taskcreate = (prop) => {

    const [task, setTask] = useState("");
    const hist = useNavigate();

    const postTask = (e) => {
        e.preventDefault();

        prop.pushdata({ id: nanoid(), name: task })
        hist("/list-tasks")   //replace history.push('/path') with navigate('/path')
    }


    return <div>
        <Heading1>Create Task Page</Heading1>

        <form onSubmit={postTask}>
            <Label>Enter Task`s Name</Label>
            <Input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <Button type="submit" >Add Task</Button>
        </form>

    </div>
};


const Heading1 = style.h2`
text-align : center;
color: Blue;
margin-top: 3%;
`
const Label = style.label`
width: 40%;
padding: 12px 20px;
margin-left: 28%;
display: block;
font-size:20px;
font-weight: 900;
font-family: "Georgia", Times, serif;
`
const Input = style.input`
width: 40%;
padding: 12px 20px;
margin: auto;
display: block;
border: 1px solid #ccc;
border-radius: 4px;
font-size:25px;
font-family: Arial, Helvetica, sans-serif;

`
const Button = style.button`
width: 20%;
background-color: #4CAF50;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 20px;
margin: 3% 40%;
cursor: pointer;
`

export default Taskcreate;
