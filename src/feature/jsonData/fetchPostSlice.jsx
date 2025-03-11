import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk('fetchPost', async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json()
})


const postSlice = createSlice({
    name: 'post',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchPost.rejected, (state, action) => {
            alert(`error ${action.payload}`)
            state.isError = true
        })

    }
})

export default postSlice.reducer
