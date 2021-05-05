import { ListGroup } from 'react-bootstrap'
import React from 'react';

class DishComments extends React.Component {
    render() {
        return (
            // props.dish is the whole object
        <div className={`mt-${this.props.marginTop}`}>
        {
            this.props.dish ?
            <>
            <h2>Comments for {this.props.dish.name}</h2>
                <ListGroup> { this.props.dish.comments.map(c => (
                    <ListGroup.Item key={c.id}>
                        "{c.comment}"
                        from {c.author}
                    </ListGroup.Item>))
                    }
                </ListGroup>
            </>
        : <p>Click on a dish!</p>}
</div>
        )
    }
}




// const DishComments = (props) => (
//     // props.dish is the whole object
//     <div className={`mt-${props.marginTop}`}>
//         <h2>Comments for {props.dish.name}</h2>
//         <ListGroup>
//             {
//                 props.dish.comments.map(c => (
//                     <ListGroup.Item key={c.id}>"{c.comment}" from {c.author}</ListGroup.Item>
//                 ))
//             }
//         </ListGroup>
//     </div>
    
// )

export default DishComments