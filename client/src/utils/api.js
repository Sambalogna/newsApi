export default {
    newsFeed: () => {
        return fetch('/api/games').then(res=>res.json)
    }
}