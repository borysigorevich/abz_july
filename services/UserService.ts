import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

export type UserType = {
    id: number
    name: string
    email: string
    phone: string
    position: string
    position_id: string
    registration_timestamp: number
    photo: string
}

type GetResponseType = {
    success: boolean
    page: number
    total_pages: number
    total_users: number
    count: number
    users: UserType[]
}

type PositionsType = {
    id: number
    name: string
}

export type PositionResponseType = {
    success: boolean
    positions: PositionsType[]
}

export const userApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://frontend-test-assignment-api.abz.agency/api/v1',
    }),
    tagTypes: ['User'],
    endpoints: build => ({
        getToken: build.query({
            query: () => ({
                url: '/token'
            })
        }),
        getUsers: build.query<GetResponseType, { page?: number, count?: number }>({
            query: ({page = 1, count = 5}) => ({
                url: '/users',
                params: {
                    page,
                    count
                },
            }),
            providesTags: () => ['User'],
        }),
        getPositions: build.query<PositionResponseType, null>({
            query: () => ({
                url: '/positions'
            })
        }),
        register: build.mutation({
            query: ({body, token}) => ({
                url: '/users',
                method: 'POST',
                body,
                headers: {
                    Token: token
                }
            }),
            invalidatesTags: ['User']
        })
    })
})

export const {useLazyGetTokenQuery, useLazyGetPositionsQuery, useLazyGetUsersQuery, useRegisterMutation} = userApi