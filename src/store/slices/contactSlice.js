import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const submitContactForm = createAsyncThunk(
  "contact/submitForm",
  async (formData, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return { success: true, message: "تم إرسال الرسالة بنجاح!" };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  },
  errors: {},
  isSubmitting: false,
  submitStatus: null,
  submitMessage: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;

      if (state.errors[field]) {
        delete state.errors[field];
      }
    },
    clearForm: (state) => {
      state.formData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      };
      state.errors = {};
      state.submitStatus = null;
      state.submitMessage = "";
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    resetSubmitStatus: (state) => {
      state.submitStatus = null;
      state.submitMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.isSubmitting = true;
        state.submitStatus = null;
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.isSubmitting = false;
        state.submitStatus = "success";
        state.submitMessage = action.payload.message;

        state.formData = {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        };
        state.errors = {};
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.isSubmitting = false;
        state.submitStatus = "error";
        state.submitMessage = action.payload || "حدث خطأ أثناء إرسال الرسالة";
      });
  },
});

export const { updateField, clearForm, setErrors, resetSubmitStatus } =
  contactSlice.actions;
export default contactSlice.reducer;
