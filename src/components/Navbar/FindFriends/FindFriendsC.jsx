import * as axios from "axios";
import React from "react";
import classes from './FindFriends.module.css';
import usersPhoto from '../../../assets/img/usersPhoto.png';


class FindFriends extends React.Component {
    constructor(props){
    super(props);
        
}
    clickPage(elem) {
        this.props.setPage(elem)
        console.log(elem)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countPage}&page=${elem}`).then(response => {
        this.props.setUsers(response.data)  
        
        })
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countPage}&page=${this.props.currentPage}`).then(response => {
        this.props.setUsers(response.data)  
        console.log(response)
        })
    }   
    render() {
        
        let pages = [];

        for(let i = 1; i<=Math.ceil(this.props.totalCount/this.props.countPage); i++){
            pages.push(i);
        }
        console.log('page' + this.props.currentPage)
        return (
            <div>
                <div className={classes.pageNumber}>{pages.map(elem => 
                    <span  className={this.props.currentPage === elem && classes.selectedPage}  onClick={() => this.clickPage(elem)}>{elem}</span>
                )}</div>

                {
                    this.props.users.map((elem) => ( 
                        <div key={elem.id} className={classes.itemUsers}>
                            <div>
                                <img src={elem.photos.small != null ? elem.photos.small : usersPhoto }/>
                            </div>
                            <div>
                                {elem.name}   
                            </div>
                            <div>
                                Статус: {elem.status}
                            </div>
                            <div>
                                <span>{'elem.location.city'}</span>
                            </div>
                            <div>
                                <span>{'elem.location.country'}</span>
                            </div>
                            <div>
                                {elem.followed ? <button onClick={()=>{this.props.unFollow(elem.id)}}>Убрать из друзей</button> : <button onClick={()=>{this.props.follow(elem.id)}}>Добавить в друзья</button>}
                            </div>
                        </div>
                        )
                    )
                }
                    
            </div>
        )
    }
}


export default FindFriends;