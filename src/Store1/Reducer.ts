import React from 'react';
 enum ACTIONS_TYPE {
    ADD_NAME = 'STORIES/REDUCER/ADD-NAME',
}

type AddNameType = {
    type: ACTIONS_TYPE.ADD_NAME;
    payload: {
        name: string;
    }
}
const initialState: Array<{ name: string }> = [{name:'alex'},{name:'bob'}];
type ActionTypeL = ReturnType<typeof addUser>;
export const reducer = (state = initialState, action: ActionTypeL):Array<{name:string}> => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_NAME:
            return [...state,{name:action.payload.name}];
        default:
            return state;
    }
}
export const addUser = (name: string): AddNameType => {
    return {
        type:ACTIONS_TYPE.ADD_NAME,payload:{name,},
    }

}