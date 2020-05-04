import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useCookies } from 'react-cookie';
import Config from './Config.json';
import Title from './Title';

const Home = (props) => {
    const [cookies, setCookies] = useCookies();

    const googleSuccessfulLogin = (response) => {
        console.log(response);
        const profile = response.profileObj;
        setCookies('email', profile.email, { path: '/' });
        setCookies('name', profile.name, { path: '/' });
        setCookies('imageUrl', profile.imageUrl, { path: '/' });
        props.history.push('/orders');
    };

    const googleFailureLogin = (response) => {
        alert('Failed to retrieve information! Try again.');
    };

    return (
        <React.Fragment>
            { Title('Home') }
            <div className="container">
                <div id="home" className="row mt-5 px-1 py-5">
                    <div className="shadow-sm p-1 my-5 col-12 text-center">
                        <h1>Internship Assessment @ Utilize</h1>
                        <strong className="text-muted">
                            By Suman Rana
                    </strong>
                    </div>
                    <div className="col-12 text-center">
                        <GoogleLogin
                            clientId={ Config.GOOGLE_AUTH2_CLIENT_ID }
                            buttonText="Login"
                            isSignedIn={ true }
                            onSuccess={ googleSuccessfulLogin }
                            onFailure={ googleFailureLogin }
                            cookiePolicy={ 'single_host_origin' }
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;