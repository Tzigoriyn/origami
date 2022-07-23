import api from "./api"

export const getAll = () => {
    return fetch(api.getPosts)
        .then(res => res.json())
        .catch(error => alert(`${error}`));
}