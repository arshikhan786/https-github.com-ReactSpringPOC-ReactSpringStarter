import userSlice from '../components/userSlice'
import { combineReducers } from 'redux';
import reducer from '../components/userSlice'
import { store } from './app/store';
import { login, logout } from '../components/userSlice';
import { render } from '@testing-library/react'
describe("user Slice test cases", () => {
    const initialState = { user:{} }
    const name="priyanka"

    it('should check the component render',()=>
    {
        render(<userSlice/>)
    })
    it('should return the initial state', () => {
        expect(reducer(initialState, {})).toEqual(
            {
                user:{}
            }
        )
    })
    it('should set the username while login', () => {
        expect(reducer(initialState, login(name))).toEqual({
            user: name,
        })
        expect(reducer(initialState, login(name))).not.toEqual({
            user:{},
        })

    })
    it(' logout', () => {
        expect(reducer(initialState, logout())).toEqual({
            user:{},
        })
        expect(reducer(initialState, logout())).not.toEqual({
            user:name,
        })
    })

})