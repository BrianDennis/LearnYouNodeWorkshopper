function getShortMessages(messages) {
   return messages.filter(function(curr, index, array){
     if(curr.message.length < 50){
       return true;
     }
     return false;
   }).map(function(curr, index, array){
     return curr.message;
   });
 }

 module.exports = getShortMessages
