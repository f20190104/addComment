import * as ActionTypes from './ActionTypes';

export const Comments = (state={data: [], isLoaded: false} ,action) => {
    switch(action.type){
        case ActionTypes.POST_COMMENT: {
            const returning = {...state, data: state.data.concat(action.payload), isLoaded:true};
            console.log(returning);
            return(returning);
            }
        default: {
            return(state);
        }
    }
}