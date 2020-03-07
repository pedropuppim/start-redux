export function toggleLesson(module, lesson){
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson
    }

}

export function newModule(){

    return {
        type: 'NEW_MODULE'
    }

}