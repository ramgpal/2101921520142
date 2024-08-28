import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import './styles.css'; // Import the CSS file

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`/categories/Laptop/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        fetchProductDetails();
    }, [productId]);

    return (
        <Container className="container">
            {product ? (
                <>
                    <Typography className="product-name">{product.productName}</Typography>
                    <Typography className="product-details">Price: ${product.price}</Typography>
                    <Typography className="product-details">Rating: {product.rating}</Typography>
                    <Typography className="product-details">Discount: {product.discount}%</Typography>
                    <Typography className="product-details">Availability: {product.availability}</Typography>
                </>
            ) : (
                <Typography>Loading...</Typography>
            )}
        </Container>
    );
};

export default ProductDetails;
