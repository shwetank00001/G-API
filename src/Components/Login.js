import React from 'react'
import  { GoogleLogin } from 'react-google-login'

const client_Id = "1073753401575-lgm95qjtc3c9pne3nq1jj0mcpv9g272v.apps.googleusercontent.com"

const Login = () => {

    function onSuccess(res){
        console.log("LOGIN sucessfull ->>>>.", res.profileObj)
    }

    function onFailure(err){
        console.log("error: ", err)
    }
  return (
    <div id='signInButton'>
        <GoogleLogin 
            clientId={client_Id}
            buttonText='Login'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
        
    </div>
  )
}

export default Login