import React from 'react';
import { ListView } from './ListView/ListView';
import { GridView } from './GridView/GridView';

const Users = (props) => {
    if (props.users.length === 0) {
        return 'Results not found component'
    }

    return (
        props.isListView
            ? <ListView users={props.users} />
            : <GridView users={props.users} />
    )
}

export { Users }