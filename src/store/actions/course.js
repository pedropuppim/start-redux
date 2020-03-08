import axios from 'axios';



export const newStart = () => {
    return dispatch => {
      axios
        .get('https://gist.githubusercontent.com/pedropuppim/eb75fac815be2ecad35627be7c7aaa55/raw/7a727116445fad0063daff11dcea7bc5cec144d3/modules.json')
        .then(res => {
          dispatch(sendInitial(res.data));
        })
    };
};


export function toggleLesson(module, lesson){
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson
    }

}


export const newModule = () => {
    return dispatch => {
      axios
        .get('https://gist.githubusercontent.com/pedropuppim/eb75fac815be2ecad35627be7c7aaa55/raw/7a727116445fad0063daff11dcea7bc5cec144d3/modules.json')
        .then(res => {
          dispatch(sendNewModule(res.data.modules));
        })
    };
};

function sendNewModule(res){

    return {
        type: 'NEW_MODULE',
        payload: {
            ...res
        }
    }

}

function sendInitial(res){

    return {
        type: 'START_MODULE',
        payload: {
            ...res
        }
    }

}