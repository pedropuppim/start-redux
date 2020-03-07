const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules:[
        {
            id: 1,
            title: 'Iniciando React',
            lessons: [
                {id: 1, title: 'Aula 1'},
                {id: 2, title: 'Aula 2'}
            ]
        },
        {
            id: 2,
            title: 'Aprendendo',
            lessons: [
                { id: 3, title: 'Aula 3' },
                { id: 4, title: 'Aula 4'}
            ]
        }
    ]
};

export default function course(state=INITIAL_STATE, action){

    if (action.type === 'TOGGLE_LESSON'){

        return {
            ...state,
            activeLesson: action.lesson,
            activeModule: action.module
        }
    }

    if (action.type === 'NEW_MODULE'){

        const new_module={
            id: 3,
            title: 'Iniciando Redux',
            lessons: [
                {id: 5, title: 'Aula 1'},
                {id: 6, title: 'Aula 2'}
            ]
        };
        
        return {
            ...state,
            modules: [...state.modules, new_module]
        }
    }


    return state;
     
}
