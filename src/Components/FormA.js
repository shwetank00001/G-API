import React from 'react'

const FormA = () => {

    const [formData, setFormData] =React.useState({
        Fname:"",
        email:"",
        phone:""
    })

    function handleChange(event){
        const {name,value} = event.target
        setFormData(function(){
            return({
                [name]: value
            })
        })
    }

    function handleSubmit(e){
        e.prevenDefault()
        console.log(formData)
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Fname' name='Fname' value={formData.Fname} onChange={handleChange}  />
        <input type="text" placeholder='email' name='email' value={formData.email} onChange={handleChange}  />
        <input type="text" placeholder='phone' name='phone' value={formData.phone} onChange={handleChange}  />
        <button>Submit</button>
        </form>

    </div>
  )
}

export default FormA