const remoteURL = "http://localhost:8080";

export default {
    get(id) {
        return fetch(`${remoteURL}/candiesFromAPI/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${remoteURL}/candiesFromAPI`).then(e => e.json())
    },
    deleteOne (id) {
        return fetch(`${remoteURL}/candiesFromAPI/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
    }
}