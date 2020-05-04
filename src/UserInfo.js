import React from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import { useCookies } from 'react-cookie';
import Config from './Config.json';

const UserInfo = (profile) => {
    const [cookies, setCookies, removeCookies] = useCookies();
    const history = useHistory();

    const googleSuccessfulLogout = () => {
        console.log('logout');
        removeCookies('name');
        removeCookies('email');
        removeCookies('imageUrl');
        history.push('/');
    };

    const googleFailureLogout = () => {
        alert('Failed to logout! Try again.');
    };

    return (
        <React.Fragment>
            <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
                <i className="fa fa-bars"></i>
            </a>
            <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-content">
                    <div className="sidebar-brand">
                        <a href="https://www.utilize.app/">Utilize</a>
                        <div id="close-sidebar">
                            <i className="fa fa-times"></i>
                        </div>
                    </div>
                    <div className="sidebar-header">
                        <div className="user-pic">
                            <img
                                className="img-responsive img-rounded"
                                src={ profile.imageUrl ? profile.imageUrl : Config.DEFAULT_PROFILE_IMAGEURL }
                                alt="User picture"
                            />
                        </div>
                        <div className="user-info">
                            <span className="user-name">
                                <strong>{ profile.name }</strong>
                            </span>
                            <span className="user-role">{ profile.email }</span>
                            <span className="user-status">
                                <i className="fa fa-circle"></i>
                                <span>Logged In</span>
                            </span>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        <ul>
                            <li className="header-menu">
                                <span>General</span>
                            </li>
                            <li>
                                <GoogleLogout
                                    clientId={ Config.GOOGLE_AUTH2_CLIENT_ID }
                                    render={ renderProps => (
                                        <a href="#">
                                            <i className="fa fa-power-off"></i>
                                            <span onClick={ renderProps.onClick } disabled={ renderProps.disabled }>Logout</span>
                                        </a>
                                    ) }
                                    onLogoutSuccess={ googleSuccessfulLogout }
                                    onFailure={ googleFailureLogout }
                                >
                                </GoogleLogout>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default UserInfo;