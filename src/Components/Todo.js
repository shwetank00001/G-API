import React from 'react'
import Modal from './Modal'

const Todo = () => {
    
    const [data , setData]  =React.useState('')

    function reducer(state,action){
        if(action.type === "ADD"){
            const newData = [...state.value, action.payload]
            return({
                ...state,
                value:newData,
                showModal:true,
                modalContent:"ITEM HAS BEEN ADDED"
            })
        }

        if(action.type === "REMOVE"){
            const newData = state.value.filter((item) => item.id!== action.payload )
            return({
                ...state,
                value: newData,
                showModal:true,
                modalContent:"Selected item has been removed"

            })
        }

        if(action.type === "NO_DATA"){
            return{
                ...state,
                showModal:true,
                modalContent:"Please add a value"
            }
        }

        if(action.type === 'CLOSE'){
            return{
                ...state,
                showModal:false,
            }
        }
    }



    const defaultState= {
        value:[],
        showModal:false,
        modalContent:""
    }

    const [state, dispatch] = React.useReducer(reducer, defaultState)

    const ele = state.value.map(function(item){
        return(
            <div className='content' key={item.id}>
                <p>{item.data}</p>
                <button onClick={() => handleRemove(item)}>Remove Item</button>
            </div>
        )
    })

    function handleSubmit(e){
        e.preventDefault()
        console.log(data)
        if(data){
            const newData = {id: new Date().getTime() , data }
            dispatch({type : "ADD" , payload: newData})
            setData('')
        }

        else {
            dispatch({type:"NO_DATA"})
        }

    }

    function handleRemove(item){
        dispatch({type: "REMOVE" , payload:item.id})
    }
    function closeModal(){
        dispatch({type:"CLOSE"})
    }

  return (
    <div>
        {state.showModal && <Modal closeModal={closeModal} modalContent= {state.modalContent} />}
        <h3>Todo app using use reducer </h3>
        <form onSubmit={handleSubmit}>
            <input value={data} onChange={(e) => setData(e.target.value)} />
            <button>Add</button>
        </form>
        {ele}
    </div>
  )
}

export default Todo