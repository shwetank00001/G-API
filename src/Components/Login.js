import {GoogleLogin} from 'react-google-login'
import React from 'react'




export default function Login(){

    const clientID = "386295435909-j8d7grg0phvkm5t8a7d0r99eo8rifqk5.apps.googleusercontent.com"


    function onSuccess(res){
        console.log("LOGIN DONE", res.profileObj)
    }
    function onFailure(err){
        console.log("LOGIN DONE! ", err)
    }
    return(
        <div id='signInButton'>
            <GoogleLogin 
            clientID={clientID}
            buttonText="Login"
            onSuccess = {onSuccess}
            onFailure = {onFailure}
            isSignedIn={true}
            />
        </div>
    )
}