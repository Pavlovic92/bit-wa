
const GetData = () => {
    return (
        fetch('http://api.tvmaze.com/shows')
            .then(res => res.json())
    )
}
export { GetData };