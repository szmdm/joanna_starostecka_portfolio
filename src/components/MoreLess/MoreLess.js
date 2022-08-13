import React from 'react'
import { useState } from 'react'
import { Button } from './moreLessStyle';

const MoreLess = ({ limit, children }) => {

    const text = children;

    const [isReadMoreShown, setReadMoreShown] = useState(false);

    const toggleMoreLessBtn = () => {
        setReadMoreShown(state => !state);
    }

    console.log(isReadMoreShown);

    return (
        <div>
            {isReadMoreShown ? text : text.substr(0, limit)}
            <Button onClick={toggleMoreLessBtn}>read more</Button>
        </div>
    )
}

export default MoreLess