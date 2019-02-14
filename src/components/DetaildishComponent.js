import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
//import DishComment from './CommentDish';




    
    
    //Called "render-function" in main render function for selected dish 
    function RenderDish({dish}) {
        if (dish != null)
            return(
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div className="col-12 col-md-5 m-1"> 
                <h4>Comments</h4>
                   {RenderComments(dish)}
                </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
   function RenderComments ({dish}) {
        if (dish.comments != null)
        return (dish.comments.map((dishcomment) => { 
            return (
                <ul key={dishcomment.id} className="list-unstyled">
                    <li>{dishcomment.comment}</li>
                    <li>--{dishcomment.author} 
                    </li>
                   </ul>
            ); } ) );
             else 
            return (<div></div>); }
           
           const DishDetail=(props) => { 
                console.log('dishdetail componentdidmount invoke');
                if(props.dish !=null)
                return (<div class="container">
                <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comment={props.dish.comments} /> 
           </div></div>  );
                
               else return (<div></div>);
            }

export default DishDetail;