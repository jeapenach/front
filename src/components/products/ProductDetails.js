import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../../actions/productActions'
import MetaData from '../layout/MetaData'
import { useParams } from 'react-router-dom'

export const ProductDetails = () => {
  const {loading, product, error} = useSelector(state => state.productDetails)
  const {id} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    useDispatch(getProductDetails(id))
  }, [dispatch])

  return (
    <Fragment>
        <MetaData title="Portatil HP"></MetaData>
        <div className='row d-flex justify-content-around'>
            <div className='col-12 col-lg-5 im-fluid' id='imagen_producto'>
                <img src='../images/Portatil-hp.jpg' height="450" width="450" alt="imagen_producto"></img>
            </div>
            <div className='col-12 col-lg-5 mt-5'>
                <h3>Portatil HP</h3>
                <p id='product_id'>Producto #12123</p>
            </div>
        </div>
    </Fragment>
  )
}

export default ProductDetails