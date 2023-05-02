import React from 'react'

const FormPractise = () => {

    const [formValue , setFormValue] = React.useState(
        {firstname:"", lastname : "", email: ""}
        )
        console.log(formValue)
        function handleChange(event){
            setFormValue(function(item){
                return({
                    [event.target.name]: event.target.value
                })
            })
        }


  return (
    <div>
        <input type="text" placeholder='Firstname' name='firstname' onChange={handleChange} value={formValue.firstname} />
        <input type="text" placeholder='lastname' name='lastname' onChange={handleChange} value={formValue.lastname} />
        <input type="text" placeholder='email' name='email'onChange={handleChange} value={formValue.email} />


    </div>
  )
}

export default FormPractise