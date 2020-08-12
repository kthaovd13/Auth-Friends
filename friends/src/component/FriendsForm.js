import React from 'react'

export const FriendsForm = () => {
    return (
        <div className="form">
            <form>
                <div>
                    <label>Friendname</label>
                    <input
                        name="userName"
                        type="text"    
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                    />
                </div>
                <button>Log In</button>
            </form>
        </div>
    )
        
}

export default FriendsForm