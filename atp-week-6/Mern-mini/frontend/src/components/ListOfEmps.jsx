import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from 'axios'
function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate()

  const gotoEmployee = (empObj)=>{
    //navigate to emp
    navigate("/employee",{state:empObj})
  }
  const gotoEditEmployee = (empObj)=>{
    //navigate to emp
    navigate("/edit",{state:empObj})
  }
  const deleteEmpById = async(id)=>{
    let res = await axios.delete(`http://localhost:5050/employee-api/employee/${id}`)
    if(res.status === 200){
      getEmps()
    }
  }

  async function getEmps() {
    try{
  let res = await axios.get("http://localhost:5050/employee-api/employee")
  if(res.status === 200){
    let resObj = await res.data;
    setEmps(resObj.payload)
  }
}catch(err){
  setError(true)
}
finally{
  setLoading(false)
}
}
 


  useEffect(() => {
 
    getEmps();
  }, []);

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-600">Error: {error}</p>;
  }

  if (emps.length === 0) {
    return <p className="text-center text-lg">No employees found</p>;
  }

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 text-2xl text-center ">
            <p>{empObj.email}</p>
            <p className="mb-4">{empObj.name}</p>
            {/* 3 buttons */}
            <div className="flex justify-around">
              <button onClick={()=>gotoEmployee(empObj)} className="bg-green-600 p-2 rounded-2xl text-white">View</button>
              <button onClick={()=>gotoEditEmployee(empObj)} className="bg-yellow-600 p-2 rounded-2xl text-white">EDIT</button>
              <button onClick={()=>deleteEmpById(empObj._id)} className="bg-red-600 p-2 rounded-2xl text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;