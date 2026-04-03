import { useLocation } from "react-router"

function Employees() {

  //read state recived in navigation
  const {state} = useLocation();
  if (!state) {
    return <p className="text-center text-2xl mt-10">No employee selected.</p>;
  }
  console.log(state)
  return (
    <div className="p-16 text-center text-3xl bg-green-200">
      <p>{state.name}</p>
      <p>{state.email}</p>
      <p>{state.mobile}</p>
      <p>{state.designation}</p>
      <p>{state.companyName}</p>
     
    </div>
  )
}

export default Employees