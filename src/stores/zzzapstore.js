const fetchpoints = async () => {
    const url = ''
    const res = await fetch(url)
    const data = await res.json()
    const loadpoints = data.results.map(data, index)
}