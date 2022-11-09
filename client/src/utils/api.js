export default {
    newsFeed: async () => {
        const res = await fetch('/api/newsfeed')
        return res.json()
    }
}