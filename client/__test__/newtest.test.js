import { render, screen } from '@testing-library/react'
import { shallow, } from 'enzyme'
import React from 'react'
import App from '../src/components/App'
import Header from '../src/components/header/header'



describe('App component', ()=>{
    test('my first test', () => {
    const component = shallow(<Header/> )
    expect(component).toBeDefined()
      })

  it('second test', () => {
    render(<App/>)
    const LinkElement = screen.getByText(/Частые вопросы/i)
    expect(LinkElement).toBeInTheDocument()
  })  

})

