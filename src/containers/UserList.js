//React imports
import React, {Component} from 'react';
//Redux imports
import {connect} from 'react-redux';
import {selectUser} from '../actions/index.js'
import { bindActionCreators } from 'redux';
//react router imports
import { Link } from 'react-router-dom';
import '../styles/UserListContain.css';

class UserList extends Component {
    render() {

      let linkStyle = {
        textDecoration: 'none'
      }

        let users = this.props.users.map((user) => {
            return (
                <li key={user._id} className="list-group-item" onClick={() => this.props.selectUser(user._id)}>
                  <Link style={linkStyle} to={`/users/${user._id}`}>{user.name}</Link>
                </li>
            );
        });
        return (
            <div>
              <br/>
              <h5>Users with open accounts:</h5>
              <br/>
              <ul>

                {users}

              </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {users: state.users};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
