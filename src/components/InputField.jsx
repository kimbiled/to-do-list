import React from 'react';
const InputField = ({text, handleInput, handleSubmit}) => {
    return(
        <React.Fragment>
             <label>
                <input placeholder='Type text...' className='border rounded-lg p-2' value={text} onChange={(e)=>handleInput(e.target.value)}/> 
            </label>
            
            <button className='w-20 h-8 bg-green-300 rounded-2xl' onClick={handleSubmit}>Add</button>
        </React.Fragment>
    )
}
export default InputField;