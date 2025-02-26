import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import tasksReducer from './reducers/taskListReducer';

// Конфигурация для redux-persist
const persistConfig = {
    key: 'root',
    storage,
};

// Обернем редьюсер в persistReducer
const persistedReducer = persistReducer(persistConfig, tasksReducer);

// Создаем хранилище
const store = configureStore({
    reducer: {
        tasks: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, 
        }),
});


export const persistor = persistStore(store);

export default store;