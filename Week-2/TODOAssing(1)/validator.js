function validateTitle(title) {
    if(!title){
        return false
    }
    if(title.length <=3 ){
        return false
    }
    return true
}
function validatePriority(priority) {
  if(priority == "low"|| priority =="high"|| priority=="medium"){
     return true //(can also use includes function)
  }
  return false
}

function validateDueDate(date) {
//    let dueDate = new Date('2024-10-20')
//    let today = new Date()
//    if(dueDate>today){
//     return "Invalid"
//    }
   return true
}


export  {validateTitle,validatePriority,validateDueDate}
