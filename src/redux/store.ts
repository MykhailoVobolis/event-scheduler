import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { eventsReducer } from "./events/slice";
import { filtersReducer } from "./filters/slice";

const eventsPersistConfig = {
  key: "events",
  storage,
  whitelist: ["events"],
};

const persistedEventsReducer = persistReducer(eventsPersistConfig, eventsReducer);

export const store = configureStore({
  reducer: {
    events: persistedEventsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
