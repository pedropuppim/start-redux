const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules:[]
};



export default function course(state=INITIAL_STATE, action){

    if (action.type === 'START_MODULE'){
        return action.payload;
    }

    if (action.type === 'TOGGLE_LESSON'){

        return {
            ...state,
            activeLesson: action.lesson,
            activeModule: action.module
        }
    }

    if (action.type === 'NEW_MODULE'){

        return {
            ...state,
            modules: [...state.modules, action.payload[1]]
        }
    }

    return state;
     
}
