import * as ActionTypes from './ActionTypes';

export const post_comment = (name,image,comment)=>{
    return({
        type: ActionTypes.POST_COMMENT,
        payload: {
            name: name,
            image: image,
            comment: comment
        }
    });
}