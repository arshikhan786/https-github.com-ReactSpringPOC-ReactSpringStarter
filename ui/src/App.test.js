import { render, screen } from '@testing-library/react'
import App from './App'

describe("user Slice test cases", () => {
  test('should check the component render', () => {
    render(<App />)
  })
})
