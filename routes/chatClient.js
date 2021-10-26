// let form = document.querySelector('form')
// form.addEventListener('submit', async (e) =>{
//     e.preventDefault()
    
//     let newMessage ={
//         message: document.querySelector('#messageInput').value
//     }
    
//     let results = await fetch('/api', {
//         method: 'post',
//         headers: {'content-type': 'application/json; charset=UTF-8'},
//         body: JSON.stringify(newMessage)
//     })
//     let messages = await results.json()
//     updateFeedback(messages)
// })

// const displayMessage = async () => {
//     let results = await fetch ('/api')
//     let messages = await results.json();
//     updateFeedback(messages)
// }

// const updatechat = (data) => {
//     let output = "";
//     data.forEach((item, key) =>{

//         output += '     <div class="chat-item item-list media-list">';
//         output += '       <div class="chat-item media">';
//         output += '       <div class="media-left"><button class="chat-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
//         output += '         <div class="chat-info media-body">';
//         output += '           <div class="chat-head">';
//         output += '             <div class="chat-title">' + item.title + ' <small class="chat-name label label-info">' + item.name + '</small></div>';
//         output += '           </div>';
//         output += '           <div class="chat-message">' + item.message + '</div>';
//         output += '         </div>'; 
//         output += '       </div>';
//         output += '     </div>';
//     })
    
//     //attach to a dom element
//     let chatMessages = document.querySelector('.chat-messages');
//     chatMessages.innerHTML = output;
// }

// displayMessages();