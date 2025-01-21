import axios from "axios";

function findUser(user: string){
  axios.get(`https://api.github.com/users/${user}`)
  .then(result => {
    return result.data
  })
}

export { findUser }