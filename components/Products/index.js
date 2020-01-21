import LineUpCard from '../LineUpCard';
import * as PropTypes from 'prop-types'
import Gx from '@tgrx/gx';



const Products = (productsList) => {
    return(
 
           

            productsList.map((item, i) => {
                return (
                    <Gx key={i} col={4} breakpoint={550}>
                        <LineUpCard productInfo={item} />
                    </Gx>
                    )
                })        
          
            
       


    )
}

export default Products;