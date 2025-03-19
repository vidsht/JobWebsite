import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        user: null
        // token: null
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
        // setToken: (state, action) => {
        //     state.token = action.payload;
        // },
        // clearAuth: (state) => {
        //     state.user = null;
        //     state.token = null;
        //   }
    }
});

export const { setLoading, setUser } = authSlice.actions;
export default authSlice.reducer;