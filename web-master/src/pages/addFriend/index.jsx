import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import add from '../../asset/images/add.png'
import { getAllFriend } from "../../actions/addFriend"

class AddFriend extends React.Component {
        

  state = {
       friendId:'',
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
}

onSubmit = (e) =>{
  e.preventDefault();
  console.log('添加好友开始')

  this.props.getAllFriend().then(
    (res)=>{
      console.log('执行结束啦')
    }
    ,
    (err)=>{
      console.log('执行失败啦')
    }
  )
 

}

    render() {
    

        return (

            <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                  
                <a className="navbar-brand"  >
                   添加好友
                  <img alt="Brand" src= {add} onClick = {this.onSubmit}/>
                <input
                    value={this.state.friendId}
                    onChange={this.onChange}
                    type="text"
                    name="friendId"
                />
                <button onClick={this.onSubmit}>点击添加</button>
                 </a>
          
              </div>
            </div>
          </nav>       
 

        )
    }
}



export default connect( null,{ getAllFriend })(AddFriend)