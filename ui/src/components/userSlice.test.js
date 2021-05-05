import userSlice from '../components/userSlice'
import { combineReducers } from 'redux';
import reducer from '../components/userSlice'
import { store } from './app/store';
import { login, logout } from '../components/userSlice';
describe('todos reducer', () => {
    const initialState = { user: '' }


    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                user: ''
            }
        )
    })
    it('should set the username while login', () => {
        expect(reducer(initialState, login('eric'))).toEqual({
            user: 'eric',
        })
        expect(reducer(initialState, login('eric'))).not.toEqual({
            user: '',
        })

    })
    it(' logout', () => {
        expect(reducer(initialState, logout())).toEqual({
            user: '',
        })
        expect(reducer(initialState, logout())).not.toEqual({
            user: 'eric',
        })
    })

})