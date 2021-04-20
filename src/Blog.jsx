import React from 'react';
import Article from './Article';

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isPublished: false
        }

    }

    togglePublished = () => {
        this.setState({
            isPublished: !this.state.isPublished
        })
    };


    render(){
        return(
            <>
                <Article title={"React-Study"} ispublished={this.state.ispublished} toggle={()=> this.togglePublished()}/>
                
            </>
        )
                    
    }
    
}
// 外に出す
export default Blog
