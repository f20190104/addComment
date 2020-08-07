import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import {LocalForm, Control} from 'react-redux-form';
import { Row, Label, Button, Col } from 'reactstrap';
class AddComment extends Component{
    constructor(props){
        super(props);
        this.state={
            currentName: null,
            currentImage: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values){
        this.props.post_comment(this.state.currentName,this.state.currentImage, values.comment);
    }
    responseGoogle = (response)=>{
        this.setState({
            currentImage: response.profileObj.imageUrl,
            currentName: response.profileObj.name
        });
    }
    render(){

        const form = <LocalForm onSubmit={(values)=>{this.handleSubmit(values)}} className="p-2">
                        <Row className='form-group'>
                            <Label htmlFor='comment'>Comment</Label>
                            <Control.textarea model=".comment" className='form-control' rows={3}/>
                        </Row>
                        <Button role='submit' color='primary'>Submit Comment</Button>
                    </LocalForm> ;
        
        if (!this.state.currentName){
            return(<div>
                <Row>
                    <Col xs='10'>
                        Please Login To continue.
                    </Col>
                    <Col>
                        <GoogleLogin 
                        clientId= "1077525685462-v2hvtumvh61uc5ia1k8e4sllq2f1qbgh.apps.googleusercontent.com"
                        buttonText='Login'
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        />
                    </Col>
                </Row>
            </div>);
        }
        else {
            return(<div>
                <Row>
                    <Col xs='4'>
                        <img src={this.state.currentImage} width={70} height={70} referrerPolicy='no-referrer'></img>
                    </Col>
                    <Col xs='4'>
                        {this.state.currentName}
                    </Col>
                    <Col>
                        <GoogleLogin 
                        clientId= "1077525685462-v2hvtumvh61uc5ia1k8e4sllq2f1qbgh.apps.googleusercontent.com"
                        buttonText='Login with another account'
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        />
                    </Col>
                </Row>
                {form}
            </div>);
        }
       
    }
}
export default AddComment;