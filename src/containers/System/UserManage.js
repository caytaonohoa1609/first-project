import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers } from '../../services/userService';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []
        }
    }

    async componentDidMount() {
        let responese = await getAllUsers('ALL');
        if(responese && responese.errCode === 0) {
            this.setState({
                arrUsers: responese.users
            })
            console.log('check state user 1', this.state.arrUsers); // []
        }
    }

    /** Life cycle
     *  Run component:
     * 1. Run construct -> init state
     * 2. Did mount (set state)
     * 3. Render
     */ 
    render() {
        console.log('check render ', this.state)
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <div className='title text-center'>
                    Manage users with Hank
                </div>
                <div className='users-table mt-3 mx-1'>
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        
                            { arrUsers && arrUsers.map((item, index) => {
                                console.log('eric check map ', item, index)
                                return(
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit'><i className="fa-solid fa-pencil"></i></button>
                                            <button className='btn-delete'><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                            
                        
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
