import React from 'react';

const Article = (props)=>{
return(
    <div>
        <h2>{props.title}</h2>
        <p>順番{props.order}</p>
           </div>
)
};

export default Article;