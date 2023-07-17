import React from 'react'

const Forms = () => {
    const [FirstName, SetFirstName] = React.useState("")
    const [LastName , setLastName] = React.useState("")



    function handleFirstName(event){
        console.log(FirstName)
        // console.log(event.target.value)
        SetFirstName(function(item){
            return(event.target.value)
        }
        )
    }

    function handleLastName(event1){
        console.log(LastName)
        setLastName(function(event){
            return(event1.target.value)
        })
    }
  return (
    <form>
        <input type="name" placeholder='First Name' onChange={handleFirstName} />
        <input type="name" placeholder='Last Name' onChange={handleLastName}/>
    </form>
  )
}

export default Forms