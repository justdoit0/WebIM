import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import brand from '../../image/emoji_light.png'
import add from '../../asset/images/add.png'

class Nav extends React.Component {


    render() {
    

        return (

            <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                  
                <Link className="navbar-brand" to='/chat' >
                    欢迎回家啊
                  <img alt="Brand" src= {add}/>
                 </Link>
          
              </div>
            </div>
          </nav>       
 

        )
    }
}



export default Nav