import React, {useEffect, useState} from 'react';
import {ResponseForTasks, ResponseMyType, TaskType, todoListApp, TodoType} from '../app/todoListApp';
import {Preloader2} from '../common components/preloader/Preloader2';

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
    //console.log(data)
    if (!data)  return <Preloader2/>
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
                todoListApp.deleteList(id).then(res => setState(res.data));
            }

        })

    }, []);
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateList = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let id;
        todoListApp.getLists().then(res => {
            if (res.data[0].id) {
                id = res.data[0].id;
                todoListApp.updateList(id, `name has changed at ${new Date().toLocaleTimeString()}`).then(res => setState(res.data));
            }
        });
    }, []);

    return <div>{JSON.stringify(state)}</div>
}
export const GetTasks = () => {
    const [state, setState] = useState<ResponseForTasks | null>(null);
    useEffect(() => {
        let id;
        todoListApp.getLists().then(res => {
            if (res.data[0].id) {
                //  console.log(res.data)
                id = res.data[0].id;
                todoListApp.getTasks(id).then(res => {
                    setState(res.data)
                    //console.log(res.data.items.map(x => x.id))
                });
            }
        });
    }, []);

    if (!state)  return <Preloader2/>
    return <div>
        <div>{state.items.map((x, i) => <div key={x.id}
                                             style={{marginBottom: '10px'}}>{i + 1}) {JSON.stringify(x)}</div>)}</div>
        <div> total count tasks: {JSON.stringify(state.totalCount)}</div>
        <div>error: {JSON.stringify(state.error)}</div>
    </div>
}

export const AddTask = () => {
    const [state, setState] = useState<ResponseMyType<{ item: TaskType }> | null>(null);
    useEffect(() => {
        let id;
        todoListApp.getLists().then(res => {
            if (res.data[0].id) {
                todoListApp.addTask(res.data[0].id, `task added: ${new Date().toLocaleTimeString()}`)
                    .then(res => setState(res.data));
            }
        });
    }, []);
    if (!state)  return <Preloader2/>
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<ResponseMyType | null>(null);
    useEffect(() => {
        let idL: string;
        todoListApp.getLists().then(res => {
            if (res.data[0].id) {
                idL = res.data[0].id;
                todoListApp.getTasks(res.data[0].id).then(res => {
                    if (res.data.items[0]?.id ?? null) {
                        todoListApp.deleteTask(idL, res.data.items[0].id)
                            .then(res => setState(res.data));
                    } else {
                        alert('list empty')
                    }
                })

            }
        });
    }, []);
    if (!state)  return <Preloader2/>
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<ResponseMyType<{ item: TaskType }> | null>(null);
    useEffect(() => {
        let idL: string;
        todoListApp.getLists().then(res => {
            if (res.data[0].id) {
                idL = res.data[0].id;
                todoListApp.getTasks(res.data[0].id).then(res => {
                    if (res.data.items[0]?.id ?? null) {
                        todoListApp.updateTask(idL, res.data.items[0].id,
                            `change task name at ${new Date().toLocaleTimeString()} `)
                            .then(res => setState(res.data));
                    } else {
                        alert('list empty')
                    }
                })

            }
        });
    }, []);
    if (!state) return <Preloader2/>
    return <div>{JSON.stringify(state)}</div>
}