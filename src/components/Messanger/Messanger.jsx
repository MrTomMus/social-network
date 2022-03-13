import React from 'react';
import classes from './Messanger.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageUser  from './Message/MessageUser';
import MessageFriend from './Message/MessageFriend';




const Messanger = (props) =>{
    
    console.log(props)

    let dialogsElements = props.messangerPage.dialogsData.map(elem => <DialogItem key={elem.id} name={elem.name} id={elem.id} ava={elem.ava}/>)    
    let messagesElementsUser = props.messangerPage.messageDataUser.map(elem => <MessageUser key={elem.id}  text={elem.message} ava={elem.ava}/> )
    let messageElementsFriend = props.messangerPage.messageDataFriend.map(elem => <MessageFriend key={elem.id}  text={elem.message} ava={elem.ava}/>)

    let textAreaRef = React.createRef();

    let addMessage = () => {
        props.createAddMessage();
    }

    let messageText = () =>{
        let text = textAreaRef.current.value;
        props.createUpdateNewMessageText(text);

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
                    <input onChange={messageText} ref={textAreaRef} value={props.messangerPage.newMessageText} />
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}


export default Messanger;