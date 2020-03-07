import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as CourseActions from './../../store/actions/course';

const SideBar = ({modules, toggleLesson, newModule}) => (

    <aside >
    {
        modules.map(module =>(
            <div key={module.id}>
                <strong>{module.title}</strong>
                <ul>
                    {module.lessons.map(lesson => (
                        <li key={lesson.id}>
                            {lesson.title}
                            <button onClick={()=> 
                                toggleLesson(module, lesson) 
                                }>
                            Selectionar</button>
                        </li>
                    ))}
                </ul>
            </div>
        ))
    }

                    <button onClick={()=> 
                                newModule() 
                                }>
                            NEW RAND</button>
</aside>

);


const mapStateToProps = state => ({
    modules: state.course.modules
});

// const mapDispatchToProps = dispatch => ({
//     toggleLesson: (module, lesson) =>  dispatch(CourseActions.toggleLesson(module, lesson))
// })

const mapDispatchToProps = dispatch => (
      bindActionCreators(CourseActions,dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
