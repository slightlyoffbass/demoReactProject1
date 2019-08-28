import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = (props) =>{

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Bob" 
                    timeago="today @ 4:55PM" 
                    content="Nice Blog Post!"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
                author="Patty" 
                timeago="today @ 3:56PM"  
                content="Hey! Nice work"
                avatar={faker.image.avatar()}/>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                author="Duke" 
                timeago="today @ 2:52PM" 
                content="Can't wait to see more"
                avatar={faker.image.avatar()}/>
            </ApprovalCard>
        
            <ApprovalCard>Are you sure you wan to do this?</ApprovalCard>
            
        </div>

    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)