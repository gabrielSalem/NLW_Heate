/*
* Receber code(string)
* Recuperar o acess_token no github
* Verificar se o usuário existe no DP  
    Se SIM -> gera um token
    Caso contrário -> Cria no DB um token
* Retornar o token com as infors do usuário
*/ 
import axios from "axios";

class AuthenticateUserService {
    async execute(code: string) {
        const url = "https://github.com/login/oauth/access_token";

        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                "Accept": "applications/json"
            }
        });

        return response.data;
    }
}
export { AuthenticateUserService }