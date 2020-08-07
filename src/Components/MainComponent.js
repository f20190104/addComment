import React, {Component} from 'react';
import AddComment from './AddCommentComponent';
import Comment from './CommentComponent';
import {Switch, Route, Redirect, withRouter, NavLink} from 'react-router-dom';
import {post_comment} from '../redux/ActionCreator';
import {connect } from 'react-redux';

const mapStateToProps = (state)=>{
  return({
    comments: state.comments
  });
}
const mapDispatchToProps = (dispatch) =>{
  return({
    post_comment: (name,image,comment)=> {dispatch(post_comment(name,image,comment))}
  });
}

class MainComponent extends Component {
 render(){
      return(
        <div className='container' style={{marginTop:20}}>
            <div className="card text-center">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/comments">Comments</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/addcomment">Add Comment</NavLink>
                </li>
              </ul>
            </div>
            <div className="card-body">
                <Switch>
                    <Route  path='/addcomment' component={()=>{
                      return(<AddComment post_comment={this.props.post_comment}/>);
                    }}/>
                    <Route path='/comments' component={()=>{
                      return(<Comment data={this.props.comments.data} isLoaded={this.props.comments.isLoaded}/>);
                    }}/>
                    <Redirect to='/comments'/>
                </Switch>
            </div>
          </div>
        </div>
                );
      }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainComponent));