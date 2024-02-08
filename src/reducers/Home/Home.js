import { createSlice } from "@reduxjs/toolkit";
import { getCart, getCategory, getCotegoryById, getProductById, getProducts } from "../../api/Home/home";

const Home = createSlice({
    name: "Home",
    initialState: {
        loading: false,
        categories: [],
        products: [],
        corzina: false,
        categoryId: [],
        subCategory: [],
        cart: [],
        productId: [],
    },
    reducers: {

        // this was for byu(or corzina) but i don't use it 
        setCorzinaOpen: (state, action) => {
            state.corzina = true
        },
        setCorzinaclose: (state, action) => {
            state.corzina = false
        }
    },

    extraReducers: (builder) => {

        //getCategory
        builder.addCase(getCategory.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getCategory.fulfilled, (state, action) => {
            // console.log(action.payload);
            state.loading = false;
            state.categories = action.payload;
        });
        builder.addCase(getCategory.rejected, (state, action) => {
            state.loading = false;
        });


        //getProducts 
        builder.addCase(getProducts.fulfilled, (state, action) => {
            // console.log(action.payload);
            state.loading = false;
            state.products = action.payload
        })

        //productId 
        builder.addCase(getProductById.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.productId = action.payload
        })

        //getCategoryById
        builder.addCase(getCotegoryById.fulfilled, (state, action) => {
            state.loading = false;
            state.subCategory = action.payload
        });

        //getCart
        builder.addCase(getCart.fulfilled, (state, action) => {
            // console.log(action.payload);
            state.loading = false;
            state.cart = action.payload
        })


    }
})

export default Home.reducer;
export const { setCorzinaOpen, setCorzinaclose } = Home.actions;

