import React from 'react'
import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {

        e.preventDefault()

        if(!text){

            alert('Please add a task ')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <div className = 'grid-container'>

<div className='grid-item'>
  <form className = 'add-form' onSubmit ={onSubmit}>
        <div>

            <label>
                Medecine Name 
                </label>
                <input type= 'text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}></input>
            
        </div>

        <div className = 'form-control form-control-check'>

            <label>
                Doctor Name
                </label>
                <input type= 'text' placeholder='Add Task' value={day} onChange={(e) => setDay(e.target.value)}></input>
           
        </div>

        <div className = 'form-control form-control-check'>

            <label>
                Disease
                </label>
                <input type= 'text' placeholder='Add Task' value={day} onChange={(e) => setDay(e.target.value)}></input>
           
        </div>

      </form>
</div>

<div  className='grid-item'>

      <form className = 'add-form' onSubmit ={onSubmit}>
        <div >

            <label>
                Previous Health Care Center
                </label>
                <input type= 'text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}></input>
            
        </div>

        <div className = 'form-control form-control-check'>

            <label>
                Specialist
                </label>
                <input type= 'text' placeholder='Add Task' value={day} onChange={(e) => setDay(e.target.value)}></input>
           
        </div>

        <div className = 'form-control form-control-check'>

            <label>
                Experience
                </label>
                <input type= 'text' placeholder='Add Task' value={day} onChange={(e) => setDay(e.target.value)}></input>
           
        </div>

      </form>
      </div>
    </div>
    


  )
}

export default AddTask
