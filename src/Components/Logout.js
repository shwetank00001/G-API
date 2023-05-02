import React from 'react'
import {GoogleLogin} from 'react-google-login'


const Logout = () => {
    const clientID = "386295435909-j8d7grg0phvkm5t8a7d0r99eo8rifqk5.apps.googleusercontent.com"


    function onSuccess(res){
        console.log("LOGOUT DONE")
    }
  return (
    <div id='signOutButton'>
    <GoogleLogin 
    clientID={clientID}
    buttonText="Login"
    onSuccess = {onSuccess}
    />
</div>
  )
}

export default Logout