import React, { useEffect, useState } from 'react'

const getPosts = async (search, getLoading) => {
    try {
        getLoading(true)
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`)
        const data = await res.json()
        getLoading(false)
        return data
    } catch (error) {
        console.log('error =>>>', error)
        getLoading(false)
    }
}

let timeout = null
const debounce = (callBack, time) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
        callBack()
    }, time)
}

let debounceOut = null
const throttle = (callBack, time) => {
    if (debounceOut) return

    debounceOut = debounce(() => {
        callBack()
        debounceOut = null
    }, time)
}

export default function TestJs() {
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [postData, setPostData] = useState([])

    const handleChange = (event) => {
        const newValue = event.target.value
        setValue(newValue)

        throttle(() => {
            getPosts(newValue, (loading) => setLoading(loading)).then((posts) => {
                setPostData(posts)
            })
        }, 200)

        // debounce(() => {
        //     getPosts(newValue, (loading) => setLoading(loading))
        //     .then(posts => {
        //         setPostData(posts)
        //     })
        // }, 700)
    }

    const handleGetImage = async () => {
        // const res = await fetch('')
    }

    useEffect(() => {
        getPosts('', (loading) => setLoading(loading)).then((posts) => {
            setPostData(posts)
        })
    }, [])

    return (
        <div>
            <input value={value} type="text" onChange={handleChange} />

            <button onClick={handleGetImage}>get Random Image</button>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhX5kNcLI0Xc-Le_8sYNip0ePRgyLB3PcTlH3dWwvsg&s"
                    alt=""
                />
                <img className="ml-2" src="https://picsum.photos/170/170" alt="" />
            </div>
            {loading ? (
                <h4>Loading</h4>
            ) : (
                <>
                    <hr />
                    {postData.length > 0 ? (
                        postData.map((post) => (
                            <div className="p-2 my-2 border border-solid border-green-400" key={post?.id}>
                                {post?.title}
                            </div>
                        ))
                    ) : (
                        <h3>No Data found</h3>
                    )}
                </>
            )}
        </div>
    )
}
