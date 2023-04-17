import type {Meta} from '@storybook/react';
import React, {useState} from "react";

 const meta: Meta = {
    title: 'ReactMemoDemo',
}
export default meta;
const CounterMemo = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const Counter = React.memo(CounterMemo)

const UsersMemo = (props: { users: string[] }) => {
    console.log('render Users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersMemo)

export const Example = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Anton', 'Jenya', 'Pezdyk'])

    const addUser = ()=> {
        setUsers([...users, 'hulk '+ new Date().getTime()])
    }


    return (
        <>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={addUser}>add user</button>
        <Counter count={count}/>
        <Users users={users}/>
    </>)
}