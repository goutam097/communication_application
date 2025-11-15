import { createAsyncThunk } from "@reduxjs/toolkit";
import { getURL } from "../../utils/apiConstants";
import { _post } from "../../utils/axiosInstance";
import { toast } from "react-toastify";

export const login = createAsyncThunk(
    'login',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await _post(getURL("AUTH.LOGIN"), formData, false);
            if (response?.data?.code == 200) {
                toast.success(response?.data?.message)
                sessionStorage.setItem("holyMatchUSAToken", response?.data?.data?.accessToken)
                sessionStorage.removeItem("holyMatchUSARegisterToken");
                return response?.data;
            }
            return rejectWithValue(response?.data?.message);
        } catch (err) {
            return rejectWithValue(err || 'Login failed');
        }
    }
);
