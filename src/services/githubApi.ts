import axios from "axios";

async function findUser(user: string): Promise<any> {
  try {
    console.log(user)
    const response = await axios.get(`https://api.github.com/users/${user}`);
    return response
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    throw error; 
  }
}

export { findUser };
