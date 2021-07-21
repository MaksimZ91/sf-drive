import React from 'react'
import { render, screen } from '@testing-library/react'
import { shallow, mount } from 'enzyme'
import { FormProvider } from '../src/components/contextApp'
import { BrowserRouter } from 'react-router-dom'
import App from '../src/components/App'
import Header from '../src/components/header/header'
import Navbar from '../src/components/header/navbar'
import Password from '../src/components/pages/registr/formPassword'
import { FormRefisrtProvider } from '../src/components/pages/registr/formContex'




const fn = () => {}

describe('App test', () => {

  it('App render test', () => {
    render(<FormProvider><App/></FormProvider>)
    const LinkElement = screen.getByText(/Частые вопросы/i)
    expect(LinkElement).toBeInTheDocument()
  }) 

  describe('Header tests', ()=>{
    it('Header to be defined', () => {
      const component = mount(<FormProvider><BrowserRouter><Header/></BrowserRouter></FormProvider>)
      expect(component).toBeDefined()
      })
  
    it('Click button login', () => {
      const  mockClick = jest.fn()
      const props = {
       value : {
         diss:false,
         rec:false,
         openAuth:jest.fn()
         
       }
      }
      const element = mount(<FormProvider><BrowserRouter><Navbar  {...props} /></BrowserRouter></FormProvider>)  
      element.find('.header__button').instance().handelClick = mockClick
      element.find('.header__button').instance().handelClick()
      element.find('.header__button').simulate('click')
      expect(mockClick).toHaveBeenCalled()
      expect(props.value.openAuth).toHaveBeenCalled()
    })
  })

  describe('Registr form testing', () => {
    it('Changer value form testing', () => {    
      const wrapper = mount(<FormRefisrtProvider><Password/></FormRefisrtProvider>) 
      wrapper.setState({ pass: 'bar' })
      wrapper.find('.registr_about_password_curr').simulate('change', event)   
      expect(state.pass).toEqual('password')

    })
  })

})



