import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router';
// updating  our menu-items with WITHROUTER Higher order component
// HOC is a function which simply takes a component and transforms it
// and returns a new component
const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) => (
    <div 
    className = {`${size} menu-item`} 

    onClick = { () => (history.push(`${match.url}${linkUrl}`))}
    >
    <div className = "background-image" style = {{
        backgroundImage:`url(${imageUrl})`
         }} > </div>
    <div className = "content">
        <h1 className = "title"> {title.toUpperCase()}</h1>
        <span className = "subtitle">SHOP NOW</span>
    </div>
    </div>
)

export default withRouter(MenuItem); // it is doue to this wrapping we got access to history
// we could have passed it to directory then to menu-item but we just improved in efficiency this way 