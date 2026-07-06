import React from 'react'

function Filtering({title,content,id}) {
  return (
    <div>

<h1>{title}</h1>
<p>{content}</p>
  <button>DELETE</button>
  <button>EDIT</button>
    </div>
  )
}

export default Filtering