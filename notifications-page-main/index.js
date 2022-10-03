const unReadMsg = document.querySelectorAll(".unread-message");
const notification = document.getElementById("notification");
const markAll =document.getElementById("mark-all");

notification.innerText = unReadMsg.length;


unReadMsg.forEach((message)=>{
    message.addEventListener("click",()=>{
        message.classList.remove("unread-message");
        const newUnreadMsg = document.querySelectorAll(".unread-message");
        notification.innerText=newUnreadMsg.length;

    })
});

markAll.addEventListener("click",()=>{
   unReadMsg.forEach((message)=>{
    message.classList.remove("unread-message");
   })
   const newUnreadMsg = document.querySelectorAll(".unread-message");
   notification.innerText = newUnreadMsg.length;
})