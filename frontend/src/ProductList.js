import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('Laptop');
    const [sort, setSort] = useState('price');
    const [order, setOrder] = useState('asc');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/categories/${category}/products`, {
                    params: { n: 10, sort, order }
                });
                setProducts(response.data);
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
