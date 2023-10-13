//actions
const LOGIN_RESULT = "CreateID";

//action creators
export const instaLogin = (id : string, password : string, login: boolean) => {
    return {
        type: LOGIN_RESULT,
        id,
        password
    }
}