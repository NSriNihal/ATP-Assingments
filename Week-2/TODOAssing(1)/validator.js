function validateTitle(title) {
    if(!title){
        return "title required"
    }
    if(title.length <=3 ){
        return "minimum 3 chars required"
    }
    return true
}
function validatePriority(priority) {
  if(priority == "low"|| priority =="high"|| priority=="medium"){
     return true //(can also use includes function)
  }
  return "invalid priority "
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