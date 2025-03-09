import React from 'react'

const AddEditNotes = () => {
  return (
    <div>
        <div className='flex flex-col gap-2'>
            <label className='input-table'>TITLE</label>
            <input
            type="text"
            className='text-2xl text-slate-950 outline-none'
            placeholder='Go to the Gym At 5'
            />
        </div>
    </div>
  )
}

export default AddEditNotes