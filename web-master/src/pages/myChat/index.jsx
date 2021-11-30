import React, { Fragment } from 'react'
import { Chat, ContactItem, ContactList } from '../Chat'
import {  my,messageList,msg,contactList } from '../../fackData'
import { connect } from 'react-redux'
import AddFriend from '../addFriend'
import Nav from '../Nav'

const contact = {
    id: '',
    avatar: '',
    nickname: '',
    desc: '',
  }

class MyChat extends React.Component{

    

    state ={
        me:{},
        isEnd:false,
        friends:[],
        contact:{},
        messageList:[]
    }

  
    componentWillMount (){
        console.log('111我要进来了哦')
        console.log('真的要进来了哦'+this.state.me)
        this.setState({
            me:this.props.user
        })
        console.log('进来了'+this.props.user)
        console.log('真的进来了'+this.state.me)
    }
    
    

    componentDidUpdate(){
        console.log('2')
        if(!this.state.isEnd){
        this.setState(
            {    isEnd:true,
                friends: this.props.friends.friend
            }
        );
        }
    }
    componentDidCatch(){
       console.log('3');
       if(this.setState.isEnd){
        this.setState(
            {    isEnd:false,
                friends: this.props.friends.friend
            }
        );
       }

    }

   

    render(){

        return(

        <Fragment>
          <AddFriend/>
            <div
            style={{
              background: '#2BA245',
              padding: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '90vh',
            }}>
        
            <ContactList
              onSelect={(contact)=>this.setState(
                  {
                    contact:contact   
                  }
              )}
           //   onSelect = {this.onSelectFriend}
              data={ this.state.friends }
              style={{
                marginRight: 10,
                height: 500,
                borderRadius: 5,
                overflow: 'hidden',
                width: 240,
              }}
            />
            <Chat
              contact={ this.state.contact }
              me={this.state.me}
              chatList={messageList}
              style={{
                width: 600,
                height: 500,
                borderRadius: 5,
              }}
            />
         
          
          </div>
          <button onClick={() =>{
             console.log( this.state);
          }}>测试当前的list</button>
 <button onClick={() =>{
             console.log( contactList);
          }}>测试当前的默认的list</button>


          </Fragment>


        )
    }

}

const mapStateToProps = (state) =>{

    console.log(state);
    return{
        friends:state.friends,
        user:state.login.user
    }
}
export default connect( mapStateToProps)(MyChat)