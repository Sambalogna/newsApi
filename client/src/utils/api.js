export default {
    newsFeed: () => {
        return fetch('/api/newsfeed').then(res=>res.json)
    }
}