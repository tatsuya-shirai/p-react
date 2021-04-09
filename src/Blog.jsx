import React from 'react';
import Article from './Article';

class Blog extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const authorName="tatsuya"
        return(
            <>
                <Article title={"React-Study"}　order={1}/>
                <Article title={"JSXの使い方"} order={2}/>
                <Article title={"環境構築をしてみよう！" } />
                
            </>
        )
                    
    }
    
}
// 外に出す
export default Blog
