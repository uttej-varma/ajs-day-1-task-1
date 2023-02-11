let message=document.getElementById("message")
document.getElementById("getParent").addEventListener("click",()=>{
    message.innerHTML="Hi! I am the parent of div container with ID child and grandParent of div container with ID grandchild"

})
document.getElementById("getchild").addEventListener("click",()=>{
    message.innerHTML="Hi! I am parent of div container with ID grandchild and child of div container with ID parent"

})
document.getElementById("getgrandchild").addEventListener("click",()=>{
    message.innerHTML="Hi! I am grandchild of div container with ID parent and child of div container with ID child"

})