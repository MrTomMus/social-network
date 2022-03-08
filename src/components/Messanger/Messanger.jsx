import React from 'react';
import classes from './Messanger.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageUser  from './Message/MessageUser';
import MessageFriend from './Message/MessageFriend';
import { createAddMessage, createUpdateNewMessageText } from '../redux/messanger-reducer'



const Messanger = (props) =>{
    
    console.log(props)

    let dialogsElements = props.store.messangerPage.dialogsData.map(elem => <DialogItem name={elem.name} id={elem.id} ava={elem.ava}/>)    
    let messagesElementsUser = props.store.messangerPage.messageDataUser.map(elem => <MessageUser text={elem.message} ava={elem.ava}/> )
    let messageElementsFriend = props.store.messangerPage.messageDataFriend.map(elem => <MessageFriend text={elem.message} ava={elem.ava}/>)

    let textAreaRef = React.createRef();

    let addMessage = () => {
        props.dispatch(createAddMessage());
    }

    let messageText = () =>{
        let text = textAreaRef.current.value;
        props.dispatch(createUpdateNewMessageText(text))

    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>
                 {dialogsElements}    
            </div>
            <div className={classes.messages}>
                {messagesElementsUser}
                {messageElementsFriend}
                <div className={classes.addMessage}>
                    <input onChange={messageText} ref={textAreaRef} value={props.store.messangerPage.newMessageText} />
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}


export default Messanger;