import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Создаем API для взаимодействия с вашим сервером или API
export const steamApi = createApi({
  reducerPath: 'steamApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://countertrade.vit.ooo/v1/api' }), // Укажите базовый URL вашего API
  endpoints: (builder) => ({
    // Определение эндпоинта для получения списка друзей
    getFriendList: builder.query({
      query: (steamId: string) => `/getFriends/${steamId}`,
    }),
  }),
});

// Экспортируем методы для вызова API
export const { useGetFriendListQuery, useLazyGetFriendListQuery } = steamApi;