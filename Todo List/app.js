     
     
var tasklist= document.getElementById("tasklist");
var task = document.getElementById("task");
  
function addtask(){
   console.log(task.value);
   tasklist.innerHTML += `<li>${task.value}</li>`;
   task.value = " ";

}
function deleteAll(){
   tasklist.innerHTML = " "; 
}