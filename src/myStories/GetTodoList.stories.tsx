import React, {useEffect, useState} from 'react';
import {ResponseMyType, todoListApp, TodoType} from '../app/todoListApp';

export default {
    title: 'get request to todoList api',
}


export const GetLists = () => {
    const [data, setData] = useState<TodoType[]>([]);
    useEffect(() => {
        // debugger
        todoListApp.getLists().then(res => {
            setData(res.data)
        })

    }, [])
    console.log(data)
    // if(!data)  return <div>wait request</div>
    return <div>{data?.map((x: TodoType, i: number) => <div style={{marginBottom: '10px'}}
                                                            key={x.id}>{i + 1}) {JSON.stringify(x)}</div>)}</div>
}

export const AddList = () => {
    const [state, setState] = useState<ResponseMyType<{ item: TodoType }> | null>(null);
    useEffect(() => {
        todoListApp.createList().then(res => {
            if (res.resultCode === 0) {
                setState(res)
                console.log(res)
            }
        })
    }, [])
    if (!state) return <div>list of todoLists full. You need to delete one list</div>
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteList = () => {
    const [state, setState] = useState<ResponseMyType | null>(null)
    useEffect(() => {
        let id = '';
        todoListApp.getLists().then(res => {
            if (res.data[0].id) {
                id = res.data[0].id;
                todoListApp.delete(id).then(res => setState(res.data));
            }

        })

    }, []);
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateList = () => {
    const [state,setState]=useState<any>(null)
    useEffect(() => {
        let id;
        todoListApp.getLists().then(res => {
            if (res.data[0].id) {
                id = res.data[0].id;
                todoListApp.updateList(id, `name has changed at ${new Date().toLocaleTimeString()}`).then(res => setState(res.data));
            }
        });
    },[]);
       /* let id='5d76123f-7f93-4a0d-bbd5-16a99a459fcc';
        todoListApp.updateList(id).then(res=>setState(res.data));*/



    return <div>{JSON.stringify(state)}</div>
}