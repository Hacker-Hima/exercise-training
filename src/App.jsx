import React,{useState} from 'react'

function App(){
 const [student,setStudent]=useState([])


 const addStudent = () => {
  let n=document.getElementById('name').value;
  let d=document.getElementById('dept').value;
  document.getElementById('name').value="";
  document.getElementById('dept').value="";
  setStudent(
    [...student,{name:n,dept:d}]
  )
 }

 const delet=(id)=>{
  setStudent(
    student.filter((_,i)=> i!==id)
  )
 }
 return(
  <div>
  <input type="text" id="name"></input>
  <input type="text" id="dept"></input>
  <button onClick={addStudent}>Add</button>
  <ul>
    {student.map((t,i)=>
     <li>{t.name} {t.dept} <button onClick={()=>delet(i)}>Delete</button></li>
    )}
  </ul>
  </div>
 )
}
export default App