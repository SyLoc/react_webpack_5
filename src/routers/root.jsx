import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { withReport } from '../hocs/withLoading'

const SelectorForm = (props) => {
    // console.log('props form my component', props)
    console.log('isActive =>', props.isActive)

    const bubbleSort = (array) => {
        let n = array.length
        let swapped

        do {
            swapped = false
            for (let i = 1; i < n; i++) {
                if (array[i - 1] > array[i]) {
                    // Swap the elements
                    ;[array[i - 1], array[i]] = [array[i], array[i - 1]]
                    swapped = true
                }
            }
            n-- // Reduce the range of comparison
        } while (swapped)

        return array
    }

    return (
        <>
            {/* <Selector className="selector"></Selector> */}
            <div className={`${props.isActive ? 'text-red-500' : 'text-blue-500'}`}>My Selector Form</div>
        </>
    )
}

const SelectorFormWithReport = withReport(SelectorForm)

export default function Root() {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="flex">
            <div id="sidebar" className="w-[20rem] bg-slate-100">
                <h1>React Router Contacts</h1>
                <h2>welcome to react</h2>
                <div className="my-4 ml-4">
                    <Link to={`/about`}>Go to about page</Link>
                    <br />
                    <Link to={`/test-js`}>Go to test js page</Link>
                </div>
                <div>
                    <form id="search-form" role="search">
                        <input id="q" aria-label="Search contacts" placeholder="Search" type="search" name="q" />
                        <div id="search-spinner" aria-hidden hidden={true} />
                        <div className="sr-only" aria-live="polite"></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to={`contacts/1`}>Your Name</Link>
                        </li>
                        <li>
                            <Link to={`contacts/2`}>Your Friend</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail" className="flex-1 ml-4">
                <button className="cursor-pointer" onClick={() => setIsActive(!isActive)}>
                    Click to change color
                </button>
                <SelectorFormWithReport loading={false} isActive={isActive} />
                <Outlet />
            </div>
        </div>
    )
}
