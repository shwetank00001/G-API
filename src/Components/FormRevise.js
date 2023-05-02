import React from 'react'

const FormRevise = () => {

    const [formData, setFormData] = React.useState({
        firstname:"",
        lastname:"",
        email:"",
        human: true,
        employment: "",
        color: ""
    })

    function handleChange(event){
        const {type,name,value,checked} = event.target
        setFormData(function(item){
            return{
                ...item,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

  return (
    <form  onSubmit={handleSubmit}>
        <input type='name' placeholder='firstname' name='firstname' value={formData.firstname} onChange={handleChange}/>
        <br />
        <br />
        <input type='name' placeholder='lastname' name='lastname' value={formData.lastname}  onChange={handleChange}/>        <br />
        <br />
        <input type='name' placeholder='email' name='email' value={formData.email}  onChange={handleChange} />
        <br />
        <br />

        <input type='checkbox' id='human' name='human'  onChange={handleChange} checked={formData.human}/>
        <label htmlFor='human'>Are you human</label>
        <br />
        <br />

        <input type='radio' id='unemployed' name='employment' value="Unemployed" onChange={handleChange}/>
        <label id='unemployed'>Unemployed</label>
        <input type='radio' id='employed' name='employment' value="Employed"  onChange={handleChange}/>
        <label id='Employed'>Employed</label>
        <input type='radio' id='part-time' name='employment' value="Part-time"  onChange={handleChange} />
        <label id='part-time'>Part-time</label>
        <br/>
        <br/>

        <select id='color' name='color' value={formData.color} onChange={handleChange} >
            <option value=''>-- Choose --</option>
            <option value='red'>Red</option>
            <option value='blue' >Blue</option>
            <option value='black'>Black</option>
            <option value='white'>White</option>
        </select>
        <br/>
        <br/>

        <button>Submit</button>

    </form>
  )
}

export default FormRevise