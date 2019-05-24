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
    },
    post(newCandy) {
        return fetch(`${remoteURL}/candiesFromAPI`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newCandy)
        }).then(data => data.json())
      }
}