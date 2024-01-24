import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./slices/products";

//apis
import { productsApi } from "./actions/procucts";

export const store = configureStore({
  reducer: {
    products: productSlice,

    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
