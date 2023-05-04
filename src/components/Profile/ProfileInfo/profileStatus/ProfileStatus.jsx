import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: '',
    }

    avtivedMode() {
        this.setState({
            editMode: true,
        })
    }

    deAvtivedMode(event) {
        this.setState({
            editMode: false,   
        })
    }

    changeTitle(event) {
        this.setState({
            title: event.currentTarget.value,
        })
    }

    render() {
        
        return (
        <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.avtivedMode.bind(this)}>{!this.state.title ? 'Введите статус' : this.state.title}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.changeTitle.bind(this)} autoFocus={true} onBlur={this.deAvtivedMode.bind(this)} value={this.state.title} type="text" />
                </div>
            }
        </div>
        ) 
    }
}

export default ProfileStatus;