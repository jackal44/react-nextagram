import React, { Component } from 'react';

import '../App.css';
import UserImages from '../container/UserImages.js'
// import './reactstrap'
import SeeMore from '../components/SeeMore.js'
import Loading from '../components/Loading.js'
import { Link } from "react-router-dom"

class HomePage extends Component {
  render(props) {
    const { users } = this.props
    const { id } = this.props
 

    return (
      <>
        <Loading />
        <div>
          {users.map((user, index) =>
            <h1 className="container"
              style={{ marginLeft: 30, marginRight: 30 }}
              key={index}>
              <div className="profileImageContainer">
                {user.username}<br />
                <div >
                  {<Link to={`/user/${user.id}`}><img src={user.profileImage}
                    className="profileImage"
                  /></Link>}

                  <br /><Link to={`/user/${user.id}`}><SeeMore /></Link>
                </div>
              </div>
              <div className="imageContainer">
                <br /><UserImages id={user.id} />
              </div>
            </h1>)
          } 
        </div>
      </>

    )
  }
}
export default HomePage;
