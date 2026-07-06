import React, { useEffect, useState } from 'react'
import './Home folder/Home.css'

function Home() {


  const[members,setMembers]=useState([])
  const[edit,setEdit]=useState(null)

  const [error,setError]=useState("")
  const [search,setSearch]=useState("")
     const[username,setUsername]=useState("")

   const[course,setCourse]=useState("")

  useEffect(()=>{
    fetching()
  })

  async function fetching() {
    
    const response=await fetch("http://localhost:4000/members")
    const data =await response.json()
    setMembers(data)
  }


  async function Create(e) {
    e.preventDefault()

    if(username.length<4){
      setError("Enter a title minimum 5 characters")
      return
    }
  if(course.length<4){
      setError("Enter a content minimum 5 characters")
      return
    }





      const Newelement={name:username,
        title:course}

         await fetch("http://localhost:4000/members",{
          method:"POST",
          headers: {
    "Content-Type": "application/json"
  },
  body:JSON.stringify(Newelement)
         })

         setCourse("")
         setUsername("")
         
         
        setError("") 

       fetching()  
  }

async function HandleDelete(id) {
  await fetch(`http://localhost:4000/members/${id}`,{
    method:"DELETE"
  })
  
}

async function render(sends) {
  setEdit(sends.id)
  setUsername(sends.name)
  setCourse(sends.title)

}



async function editing(e) {
e.preventDefault()

  
if(username.length<2){
  setError("error")
  return
}




 await fetch(`http://localhost:4000/members/${edit}`,{
  method:"PUT",
     headers: {
    "Content-Type": "application/json"
  },
  body:JSON.stringify({
    name:username,
    title:course
  })

 })
console.log(edit);

setEdit(null)

setCourse("")
setUsername("")
  
}






  const filtering=members.filter((sends)=>sends.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <>



    <div className='body-1'>

 <input type="text"  onChange={(e)=>setSearch(e.target.value)} />

 <form action="" onSubmit={(e)=>{if(edit!==null){editing(e)}else{Create(e)}}}>

 <input type="text" name="" id="" placeholder='title' value={username} onChange={(e)=>setUsername(e.target.value)} />
 <br />
<p>{error}</p>
 <input type="text" placeholder='content' value={course}  onChange={(e)=>setCourse(e.target.value)}/>
 <br />
<button type="submit">submit</button>


 </form>

        


     
      {filtering.map((sends)=>
        <div key={sends.id} className='card'>
       <h1 className='title'>{sends.name}</h1>
       <p className='content'>{sends.title}</p>
       <br />

         <button className='delete-btn' onClick={()=>HandleDelete(sends.id)} >DELETE</button>
         <button className='button' onClick={(e)=>render(sends,e)} >EDIT</button>
       </div>)}
       
      
       
        

    
     
    
    </div>

   
   
    </>
  )
}

export default Home