import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import navigationReducer from './slices/navigationSlice'
import contactReducer from './slices/contactSlice'
import uiReducer from './slices/uiSlice'
import preferencesReducer from './slices/preferencesSlice'

// إعداد Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contact', 'navigation', 'preferences'], // الأجزاء المراد حفظها
  blacklist: ['ui'], // الأجزاء التي لا نريد حفظها
}

const rootReducer = combineReducers({
  navigation: navigationReducer,
  contact: contactReducer,
  ui: uiReducer,
  preferences: preferencesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
})

export const persistor = persistStore(store)

export default store
