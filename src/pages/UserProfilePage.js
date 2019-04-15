

import React, { Component } from 'react';
import UserImages from '../container/UserImages';

class UserProfilePage extends React.Component {
  render(props) {
    const { id } = this.props.match.params
    const { users } = this.props
    console.log(users)


    return (
      <div>
        {users.map((user) => {
          if (user.id == id) {
            return (
              <div classnameP="userProfileContainer">
                <h2 key="users">{user.username}</h2>
                <img key="profilePic" className="profilePic" src={user.profileImage} />
              </div>
            )
          }
        })

        }
        <div>
          <UserImages id={id} />
        </div>
      </div>
    )

  }
}

export default UserProfilePage