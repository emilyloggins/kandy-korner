const remoteURL = "http://localhost:8080";

export default {
    get(id) {
        return fetch(`${remoteURL}/candyTypesFromAPI/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${remoteURL}/candyTypesFromAPI`).then(e => e.json())
    },
    deleteOne (id) {
        return fetch(`${remoteURL}/candyTypesFromAPI/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
    }
}