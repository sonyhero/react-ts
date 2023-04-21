import type {Meta} from '@storybook/react';
import React, {useMemo, useState} from "react";

const meta: Meta = {
    title: 'UseMemo',
}
export default meta;
export const DifficultCountExample = () => {
    const [a, setA] = useState(1)
    const [b, setB] = useState(1)
    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempA = 1
        for (let i = 1; i < a; i++) {
            let fakeValue = 0
            while (fakeValue < 1000000) {
                fakeValue += Math.random()
            }
            tempA *= i
        }
        return tempA
    }, [a])


    for (let i = 1; i < b; i++) {
        resultB *= i
    }

    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result a: {resultA}
            </div>
            <div>
                Result b: {resultB}
            </div>
        </div>
    )
}

const UsersMemo = (props: { users: string[] }) => {
    console.log('render Users Memo')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersMemo)
export const HelpForReactMemoExample = () => {
    console.log('HelpForReactMemoExample')
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Anton', 'Jenya', 'Pezdyk'])

    const newUsers = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = ()=> {
        setUsers([...users, 'Asya'+ new Date().getTime()])
    }

    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            {count}
            <Users users={newUsers}/>
        </>)
}