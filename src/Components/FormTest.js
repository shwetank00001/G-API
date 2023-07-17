import React from 'react'

export default function FormTest() {
    const [formData, setData] = React.useState({
        Fname:"",
        phone:"",
        email:"",
        reactSkills:false
    })
    
    function handleChange(event){
        const {name,type,value,checked} = event.target
        setData(function(item){
            return({
                ...item,
                [name]: type === "checkbox" ? checked : value
            })
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='name' placeholder='name' name='Fname' value={formData.Fname} onChange={handleChange}/>       <br/>
            <input type='name' placeholder='phone' name='phone' value={formData.phone} onChange={handleChange}/>   <br/>     
            <input type='name' placeholder='email' name='email' value={formData.email} onChange={handleChange}/>      <br/>  
            <input type='checkbox' id='reactSkills' placeholder='name' name='reactSkills' checked={formData.reactSkills} onChange={handleChange}/>     
            <label htmlFor='reactSkills'>Do you have skills?</label>
            <br/>  
            <button>Submit</button> 
        </form>
    </div>
  )
}
