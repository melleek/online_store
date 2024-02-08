import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest"

//getCategory
export const getCategory = createAsyncThunk("home/getCategory",
    async () => {
        try {
            const { data } = await axiosRequest.get("Category/get-categories")
            return data?.data
        } catch (error) {
            console.log(error);
        }
    }
)

//getProduct
export const getProducts = createAsyncThunk('home/getProducts',
    async () => {
        try {
            const { data } = await axiosRequest.get("Product/get-products")
            return data?.data
        } catch (error) {

        }
    }
)
//getProductById 
export const getProductById = createAsyncThunk('home/getProductById',
    async (id) => {
        try {
            const { data } = await axiosRequest.get(`Product/get-product-by-id?id=${id}`)
            return data?.data
        } catch (error) {
            console.log(error);
        }
    }
)

//getCategoryById
export const getCotegoryById = createAsyncThunk('home/getCotegoryById',
    async (id) => {
        try {
            const { data } = await axiosRequest.get(`Category/get-category-by-id?id=${id}`)
            // console.log(data);
            return data?.data
        } catch (error) {
            console.log(error);
        }
    }
)

//getCart 
export const getCart = createAsyncThunk('home/getCart',
    async () => {
        try {
            const { data } = await axiosRequest.get("Cart/get-products-from-cart")
            // console.log(data.data);
            return data?.data[0].productsInCart
        } catch (error) {
            console.log(error);
        }
    }
)

//addCart 
export const addCart = createAsyncThunk('home/addCart',
    async (id, { dispatch }) => {
        try {
            const { data } = await axiosRequest.post(`Cart/add-product-to-cart?id=${id}`)
            // console.log(data);
            dispatch(getCart())
        } catch (error) {
            console.log(error);
        }
    }
)

//putPlus
export const putPlus = createAsyncThunk('home/putPlus',
    async (id, { dispatch }) => {
        try {
            const { data } = await axiosRequest.put(`Cart/increase-product-in-cart?id=${id}`)
            dispatch(getCart())
        } catch (error) {
            console.log(error);
        }
    }
)

//putMinus
export const putMinus = createAsyncThunk('home/putMinus',
    async (id, { dispatch }) => {
        try {
            const { data } = await axiosRequest.put(`Cart/reduce-product-in-cart?id=${id}`)
            dispatch(getCart())
        } catch (error) {
            console.log(error);
        }
    }
)

//deleteCart
export const deleteCart = createAsyncThunk("home/deleteCart",
    async (id, { dispatch }) => {
        try {
            const { data } = await axiosRequest.delete(`Cart/delete-product-from-cart?id=${id}`);
            dispatch(getCart())
        } catch (error) {
            console.log(error);
        }
    }
)

//clearCart
export const clearCart = createAsyncThunk('home/clearCart',
    async (_, { dispatch }) => {
        try {
            const { data } = await axiosRequest.delete('/Cart/clear-cart')
            dispatch(getCart())
        } catch (error) {
            console.log(error);
        }
    }
)