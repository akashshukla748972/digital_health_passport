import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { encryptTransform } from "redux-persist-transform-encrypt";

import rootReducer from "./rootReducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   transforms: [
//     encryptTransform({
//       secretKey: "my-super-secret-key",
//       onError: function (error) {
//         console.log("Encryption error: ", error);
//       },
//     }),
//   ],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  //   persistedReducer,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({ serializableCheck: false }),
  //   devTools: import.meta.env.VITE_NODE_ENV === "development",
});

// export const persistor = persistStore(store);
