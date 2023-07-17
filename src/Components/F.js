import React from 'react'

const F = () => {

    const [data, setData] = React.useState({
        fname:"",
        email :""
    })

    const [age, setAge] = React.useState([''])

    function handleChange(e){
        setData(function(item){
            return(
                {
                    ...item,
                    [e.target.name] : e.target.value
                }
            )
        })

    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(data, age)
    }

    // const newData = [data]
    // const ele = newData.map(function(item){
    //     return(
    //         <div>
    //             <p>{item}</p>
    //         </div>
    //     )
    // })
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='name' name='fname' placeholder='fname' value={data.fname} onChange={handleChange} />
            <input type='name' name='email' placeholder='email' value={data.email} onChange={handleChange} />

            <input type='text' value={age} onChange={(e) => setAge(e.target.value)} />
            <button>Submit</button>

            <p>{data.fname}</p>
        </form>



    </div>
  )
}

export default F