import React from 'react'

function Dashboard() {
  return (
    <div className="container my-3">
    <h2>Add a Note</h2>

    <form className="my-3">
       <div className="mb-3">
         <label htmlFor="title" className="form-label">Title</label>
         <input type="text" className="form-control" id="title" name="title" minLength={3} required/>
       </div>
       <div className="mb-3">
         <label htmlFor="description" className="form-label">Description</label>
         <input type="text" className="form-control" id="description" name="description"  minLength={5} required/>
       </div>
       <div className="mb-3">
         <label htmlFor="tag" className="form-label">Tag</label>
         <input type="text" className="form-control" id="tag" name="tag"  />
       </div>
       <button type="submit" className="btn btn-primary">Add Note</button>
     </form>
     </div>
  )
}

export default Dashboard