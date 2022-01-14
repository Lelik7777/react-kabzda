import axios from 'axios';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.1`,
    withCredentials: true,
    headers: {
        'API-KEY': 'd159ee21-92e5-491f-8ae2-2ba43dfb0380',
    }
});
 export type TodoType = {
    id: string;
    addedDate: string;
    order: number;
    title: string;
}
export type ResponseMyType<D={}> = {
    data: D;
    resultCode: number;
    messages: string[];
    fieldsErrors:string[];
}
 export const todoListApp = {
    getLists() {
        return instance.get<TodoType[]>(`/todo-lists`);
    },
    createList() {
        return instance.post<ResponseMyType<{item:TodoType}>>(`/todo-lists`, {title: `new list from:${new Date().toLocaleTimeString()}`}).then(res=>res.data);
    },
     delete(id:string){
        return instance.delete<ResponseMyType>(`/todo-lists/${id}`)
     },
     updateList(id:string,title:string){
        return instance.put<ResponseMyType>(`/todo-lists/${id}`,{title})
     },
}