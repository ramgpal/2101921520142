import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('Laptop');
    const [sort, setSort] = useState('price');
    const [order, setOrder] = useState('asc');

    const obj = [
        {
            "productName": "Laptop 9",
            "price": 1742,
            "rating": 4.29,
            "discount": 39,
            "availability": "out-of-stock"
        },
        {
            "productName": "Laptop 1",
            "price": 1059,
            "rating": 4.18,
            "discount": 21,
            "availability": "out-of-stock"
        },
        {
            "productName": "Laptop 1",
            "price": 8521,
            "rating": 4.02,
            "discount": 91,
            "availability": "out-of-stock"
        },
        {
            "productName": "Laptop 1",
            "price": 2236,
            "rating": 3.97,
            "discount": 63,
            "availability": "yes"
        },
        {
            "productName": "Laptop 13",
            "price": 1244,
            "rating": 3.41,
            "discount": 45,
            "availability": "yes"
        },
        {
            "productName": "Laptop 10",
            "price": 4101,
            "rating": 2.7,
            "discount": 37,
            "availability": "yes"
        },
        {
            "productName": "Laptop 8",
            "price": 511,
            "rating": 2.48,
            "discount": 87,
            "availability": "yes"
        },
        {
            "productName": "Laptop 14",
            "price": 9254,
            "rating": 2.46,
            "discount": 56,
            "availability": "out-of-stock"
        },
        {
            "productName": "Laptop 5",
            "price": 7980,
            "rating": 1.97,
            "discount": 89,
            "availability": "yes"
        },
        {
            "productName": "Laptop 4",
            "price": 1258,
            "rating": 1.86,
            "discount": 33,
            "availability": "out-of-stock"
        }
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Sort products by price in ascending order
                const sortedProducts = obj.sort((a, b) => a.price - b.price);
                setProducts(sortedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, [category, sort, order]);

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Top Products
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FormControl className="form-control">
                    <InputLabel>Sort By</InputLabel>
                    <Select value={sort} onChange={(e) => setSort(e.target.value)}>
                        <MenuItem value="price">Price</MenuItem>
                        <MenuItem value="rating">Rating</MenuItem>
                        <MenuItem value="discount">Discount</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className="form-control">
                    <InputLabel>Order</InputLabel>
                    <Select value={order} onChange={(e) => setOrder(e.target.value)}>
                        <MenuItem value="asc">Ascending</MenuItem>
                        <MenuItem value="desc">Descending</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <Grid container spacing={4}>
                {products.map((product, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} className="grid-item">
                        <Typography className="product-name" variant="h6">{product.productName}</Typography>
                        <Typography className="product-price">Price: ${product.price}</Typography>
                        <Typography className="product-rating">Rating: {product.rating}</Typography>
                        <Typography className="product-discount">Discount: {product.discount}%</Typography>
                        <Typography className="product-availability">Availability: {product.availability}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProductList;
