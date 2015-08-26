function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(obj) {
      return obj.id 
    })
  };
}

module.exports = checkUsersValid


//
// ## Example
//
//     var goodUsers = [
//       { id: 1 },
//       { id: 2 },
//       { id: 3 }
//     ]
//
//     // `checkUsersValid` is the function you'll define
//     var testAllValid = checkUsersValid(goodUsers)
//
//     testAllValid([
//       { id: 2 },
//       { id: 1 }
//     ])
//     // => true
//
//     testAllValid([
//       { id: 2 },
//       { id: 4 },
//       { id: 1 }
//     ])
//     // => false
