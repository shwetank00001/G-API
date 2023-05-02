import {gapi} from 'gapi-script'
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import React from 'react'


const clientID = "386295435909-j8d7grg0phvkm5t8a7d0r99eo8rifqk5.apps.googleusercontent.com"


function App() {


  React.useEffect(function(){
    function start(){
      gapi.client.init(
        {
          clientID: clientID,
          scope: ""
        }
      )
    }

    gapi.load('client:auth2', start)
  })

  return (
    <div>
      <Login />
      <Logout />
    </div>
  );
}

export default App;
