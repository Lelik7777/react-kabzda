import React, {useState} from 'react';

export default {
    title: 'React memo demo',
};

const CounterUsers =React.memo( ({count}: { count: number }) => {
    console.log('CounterUsers')
    return <>{count}</>
});

const Users = ({users}: { users: string[] }) => {
    console.log('Users')
    return <div>
        {users.map((x,i) => <div key={i}>{x}</div>)}
    </div>
}

const UsersContainerMemo = React.memo(Users);

export const Example = () => {
    console.log('Example')
    const [count, setCount] = useState(0);
    const [names, setNames] = useState(['alex', 'nick', 'ann', 'tom', 'jon']);

    const onClick = () => setCount(count + 1);
    return <>
        <button onClick={onClick}>add count of users</button>
        <CounterUsers count={count}/>
        <br/>
        <button onClick={()=>setNames([...names,'newUser'])}>add user</button>
        <UsersContainerMemo users={names}/>
    </>
}