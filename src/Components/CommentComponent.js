import React, {Component} from 'react';
import {Media} from 'reactstrap';

class Comment extends Component{
    componentWillReceiveProps(NextProps){
        console.log('these are next props');
        console.log(NextProps);
    }
render(){ 
    const comments = this.props.data.map((comment)=>{
        return(
        <Media style={{marginBottom:20}}>
            <Media left href='#'>
                <img className= 'rounded-circle'src={comment.image} height='80' width='80' referrerPolicy='no-referrer'/>
            </Media>
            <Media body style={{marginLeft:10}} className='text-left'>
                <Media heading style={{fontSize: 20 }}className='text-left'>
                    {comment.name}
                </Media>
               {comment.comment}
            </Media>
        </Media>);
    });
    if (this.props.isLoaded){
        return(
            <React.Fragment>
                {comments}
            </React.Fragment> 
        );
    }
    else return(<div></div>);
}
}
export default Comment;