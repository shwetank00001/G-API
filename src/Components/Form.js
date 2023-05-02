import React from 'react'

const Forms = () => {
    const [formData, SetFormData] = React.useState(
        {
            firstName: "" ,
            lastName: "",
            email: "", 
            comment: "",
            isFriendly: true,
            employment: "",
            favcolor: ""
        }
        )



    function handleChange(event){
        const {type,name,value,checked} = event.target
        SetFormData(function(item){
            return{
                ...item,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        // example we are apssing this to a SubmitToApi function -- >submitToAPi(formData)
        console.log(formData)
        SetFormData('')

    }


  return (
    <form onSubmit={handleSubmit}>
        <input type="name" placeholder='First Name' name="firstName" onChange={handleChange} value={formData.firstName} />
        <input type="name" placeholder='Last Name'  name="lastName" onChange={handleChange} value={formData.lastName}/>
        <input type= "name" placeholder='email' name="email" onChange={handleChange} value={formData.email} />
        <br />   
        {/* <textarea>Anything inside it</textarea> */}
        <textarea type="name" name="comment" onChange={handleChange} value={formData.comment} />
        <br />   
        <br />   



        <input type="checkbox" id="isFriendly" name='isFriendly' onChange={handleChange} checked={formData.checkbox}/> 
        <label htmlFor='isFriendly'>Are you friendly</label>
        <br />   
        <br />   



        <input type="radio" id='unemployed' name='employment' onChange={handleChange} value="Unemployed"/>
        <label htmlFor='unemployed'>Unemployed</label>
        <br />   
        <input type="radio" id='fulltime' name='employment' onChange={handleChange} value="Full-time" />
        <label htmlFor='full-time'>Full-Time</label>
        <br />   
        <input type="radio" id='part-time' name='employment' onChange={handleChange} value="Part-time" />
        <label htmlFor='part-time'>Part-Time</label>
        <br />
        <br />


        <select id='favcolor' name="favcolor" value={formData.favcolor} onChange={handleChange}>
            <option value="">-- Choose --</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="yellow">Yellow</option>
        </select>
        <br />
        <br />

        <button>Submit</button>


    </form>
  )
}

export default Forms