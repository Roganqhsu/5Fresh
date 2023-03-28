import React, { Component } from 'react'
// import Child from './Child';

class Test extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         // parentName: "parent"
    //     }
       
    // }

    
    render() {
        const newsData=this.props.name
        return (
            <div>
                {newsData}
            </div>
        )
    }
}

export default Test