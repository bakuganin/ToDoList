import React from 'react';

import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>ToDo List</h1>
            <h2>{allPosts} more to do, {liked} done</h2>
        </div>
    )
}

export default AppHeader;