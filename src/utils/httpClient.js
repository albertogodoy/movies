const api = process.env.REACT_APP_API;
const token = process.env.REACT_APP_API_TOKEN;

export function get(path){
    return fetch(api + path, {
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json;charset=utf-8",
            },
    }).then((result) => result.json());
}