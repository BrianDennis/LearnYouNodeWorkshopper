function checkUsersValid(goodUsers) {

  var goodIds = goodUsers.map(function(curr){
    return curr.id;
  });

   return function allUsersValid(submittedUsers) {
      return submittedUsers.filter(function(curr){
       if(goodIds.indexOf(curr.id) > -1){
         return true;
       }
       return false;
     }).length === submittedUsers.length;
   };
 }

 module.exports = checkUsersValid
