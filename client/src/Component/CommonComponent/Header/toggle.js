import React from 'react'

export default (props) => {
    return (
    <svg onClick = {props.onClick} className = "toggle" width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.799805" y="0.738281" width="30" height="5.205" rx="2.6025" fill="#F5EFF5"/>
    <rect x="0.799805" y="8.5459" width="30" height="5.205" rx="2.6025" fill="#F5EFF5"/>
    <rect x="0.799805" y="16.3535" width="30" height="5.205" rx="2.6025" fill="#F5EFF5"/>
    </svg>
    );
}
