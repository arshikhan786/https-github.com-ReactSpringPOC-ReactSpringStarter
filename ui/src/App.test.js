import { queries, render, screen } from '@testing-library/react'
import App from './App'

describe("App js", () => {
  beforeEach(() => {
    render(<App />)
  })
  it('should check div element render',()=>
  {
    const val=screen.queryByTestId('helloReact')
    expect(val).toHaveTextContent('Hello react')
    
  })
})
