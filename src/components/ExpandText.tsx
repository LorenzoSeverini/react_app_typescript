import React, { useState } from 'react'

interface Props {
    children: string,
    maxChars?: number,
}

const ExpandText = ({children, maxChars = 30}: Props) => {
    const [isExpand, setExpand] = useState(false);

    if (children.length <= maxChars) return <p>{children}</p>;

    const text =isExpand ? children : children.substring(0, maxChars);

    return <p>{text}... <button onClick={() => setExpand(!isExpand)} className='btn btn-dark'>{isExpand ? 'Less' : 'More'}</button></p>;
}

export default ExpandText