import React from 'react'
import Login from './Components/Login'
import Logout from './Components/Logout'

import {gapi} from 'gapi-script'

const client_Id = "1073753401575-lgm95qjtc3c9pne3nq1jj0mcpv9g272v.apps.googleusercontent.com"


const App = () => {

  React.useEffect(function(){
    function start(){
      gapi.client.init({
        client_Id:client_Id,
        scope:""
      })
    }

    gapi.load('client:auth2', start)
  })
  return (
    <div>
      <Login />
      <Logout />
    </div>
  )
}

export default App