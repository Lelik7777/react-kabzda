import React, {useState} from 'react';
//use for component
export default {
    title: 'React meme demo',
}

const CounterUsers = ({count}: { count: number }) => {
    console.log('render count')
    return <div>{count}</div>
}

const Users = ({users}: { users: string[] }) => {
    console.log('render users')
    return <div>
        {users.map(x => <div>{x}</div>)}
    </div>
}

const UsersContainer = React.memo(Users);

export const Example = () => {
    const [count, setCount] = useState(0);
    const [names, setNames] = useState(['alex', 'nick', 'ann', 'tom', 'jon']);

    const onClick = () => setCount(count + 1);
    return <>
        <button onClick={onClick}>add user</button>
        <CounterUsers count={count}/>
        <UsersContainer users={names}/>
    </>
}