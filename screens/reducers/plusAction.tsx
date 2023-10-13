//actions
const PLUS_RESULT = "Like&Msg";

//action creators
export const instaPlus = (like : number, msg : string) => {
    return {
        type: PLUS_RESULT,
        like,
        msg
    }
}