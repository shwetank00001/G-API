import React from 'react'
import  { GoogleLogout } from 'react-google-login'


const client_Id = "1073753401575-lgm95qjtc3c9pne3nq1jj0mcpv9g272v.apps.googleusercontent.com"


const Logout = () => {

  function onSuccess(){
    console.log("LOG OUT DONE")
  }

  
  return (
    <div id='signOutButton'>
        <GoogleLogout 
            clientId={client_Id}
            buttonText='Logout'
            onSuccess={onSuccess}
            isSignedIn={false}
        />
        
    </div>
  )
}

export default Logout