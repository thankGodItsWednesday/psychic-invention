import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';

    function RenderMenuItem(dish){
        return (
            <div>
            <Card key={dish.id}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
          </div>
        );
    }
                  
    const Menu = (props) => {

        const dishArray = Array.from(props.dishes);
        const menu = dishArray.map((dish) => {
            return (
              <div key= {dish.id} className="col-12 col-md-5 m-1">
                  {RenderMenuItem(dish)}
              </div>
            );
        });

        return (
            <div className="container">                   
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }    
              
export default Menu;