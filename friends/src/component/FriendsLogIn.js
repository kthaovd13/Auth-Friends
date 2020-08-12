import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsLogIn extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/login', this.state.credentials)
        .then((res) => {
            console.log(res);
            localStorage.setItem('authToken', res.data.payload);
            this.props.history.push('/friends');
        })
        .catch((err) => {
            console.log(err.message);
            localStorage.removeItem('authToken')
        })
    };

    render() {
        return (
            <div className="form">
                <form onSubmit={this.login}>
                    <div>
                        <label>User Name</label>
                        <input
                            name="username"
                            type="text"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}    
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            name="password"
                            type="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}  
                        />
                    </div>
                    <button>Log In</button>
                </form>
            </div>
        )
        
    }
}

export default FriendsLogIn