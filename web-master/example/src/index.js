import React, { useState } from 'react'
import { render } from 'react-dom'
import { Chat, ContactItem, ContactList } from '../../src/components'
// import { Chat, ContactItem, ContactList } from 'react-jwchat'
import { contact, contactList, messageList, my } from './fackData'
import LoginPage from '../../src/pages/login/LoginPage'
import Nav from '../../src/pages/Nav'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import routes from '../../src/routers'
import App from '../../src/pages/App'
import AddFriends from '../../src/pages/addFriend'
import MyChat from '../../src/pages/myChat'

// const App = () => {
//   const [msgList, setMsgList] = useState(messageList)

//   const imageHandle = (imgs) => {
//     console.log(imgs)
//   }

//   return (

//     <div
//       style={{
//         background: '#2BA245',
//         padding: '20px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '90vh',
//       }}>
//       {/* <ContactItem
//         contact={contact}
//         onClick={(contact) => console.log(contact)}
//         border
//       /> */}
//       <ContactList
//         data={contactList}
//         style={{
//           marginRight: 10,
//           height: 500,
//           borderRadius: 5,
//           overflow: 'hidden',
//           width: 240,
//         }}
//       />
//       <Chat
//         contact={contact}
//         me={my}
//         chatList={msgList}
//         onSend={(msg) => setMsgList([...msgList, msg])}
//         onEarlier={() => console.log('EarlierEarlier')}
//         onImage={imageHandle}
//         style={{
//           width: 600,
//           height: 500,
//           borderRadius: 5,
//         }}
//       />
//    <LoginPage></LoginPage>

//     </div>
   
//   )
// }

render(


  
     <App/>


, document.getElementById('root'))
