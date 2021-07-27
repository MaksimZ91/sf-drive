import React  from 'react'
import * as types from '../redux/type'
import * as actions from '../redux/actions/actions'
import { render, screen, act } from '@testing-library/react'
import { shallow, mount } from 'enzyme'
import { FormProvider } from '../src/components/contextApp'
import {Provider} from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'
import App from '../src/components/App'
import Header from '../src/components/header/header'
import Navbar from '../src/components/header/navbar'
import Password from '../src/components/pages/registr/formPassword'
import { FormRegisrtProvider } from '../src/components/pages/registr/formContex'
import Options from '../src/components/pages/addAuto/options'
import Option from '../src/components/options/option'
import NotBookingPage from '../src/components/pages/bookingPage/notBokingpage'
import Error from '../src/components/error/error'







describe('App test', () => {
  const mockStore = configureMockStore([thunk]);

  it('App render test', () => {
    render(<FormProvider><App/></FormProvider>)
    const LinkElement = screen.getByText(/Частые вопросы/i)
    expect(LinkElement).toBeInTheDocument()
  })
  
  it('App error test', ()=>{   
    const component = shallow(<Error text={'error'}/>)
    const node = component.find('p')
    expect(component).toMatchSnapshot()
    expect(node.text()).toBe('error')
  })

  it('App success test', ()=>{   
    const store = mockStore({
      app: { alert:'Test' }
    });
    const component = mount(<FormProvider><BrowserRouter><Provider store={store}><NotBookingPage/></Provider></BrowserRouter></FormProvider>)
    const node = component.find('p').at(0)
    expect(component).toMatchSnapshot()
    expect(node.text()).toBe('Test')
  })

  describe('Header tests', ()=>{
    it('Header to be defined', () => {
      const component = mount(<FormProvider><BrowserRouter><Header/></BrowserRouter></FormProvider>)
      expect(component).toMatchSnapshot()
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
      expect(element).toMatchSnapshot()
      expect(props.value.openAuth).toHaveBeenCalled()    
    })
  })

  describe('Form testing', () => {    
    const store = mockStore({
      newAuto: { addAutoOptions:{ isofix:false } }
    });
    const event = {
      target: 
      { value: 'Hello',
        name:'pass'
      }
    }
    it('Registr changer value form testing', () => { 
      const component = mount(<FormRegisrtProvider><Password /></FormRegisrtProvider>)
      const input = component.find('.registr_about_password_curr') 
      expect(input.instance().value).toEqual("")       
      input.simulate('change', event )
      expect(input.instance().value).toEqual("Hello")
      expect(component).toMatchSnapshot()
      component.unmount()
    })

    it ('Options actions creates check form testing', () => {  
      const event =  {
         target:
         { 
           checked: true,
           name:'isofix'
          }
        }              
      const component = mount(<FormProvider><BrowserRouter><Provider store={store}><Options/></Provider></BrowserRouter></FormProvider>)
           const input = component.find('.options_auto_form_wrapper_switch_checkbox').at(0)           
      input.simulate('change', event)
      const actions = store.getActions()    
      const expectedPayload = {
        type:types.ADD_AUTO_OPTIONS,
        payload:{
          isofix:true 
        }             
      } 
     expect(actions).toEqual([expectedPayload])      
      component.unmount()
    })
  })

  describe('Options test', () =>{
    const store = mockStore({
      newAuto: { dopOptions:{ isofix:false } }
    });
    const addAutoOptions = store    
    const props={
      settings:{
        cost:1000,
        titel:'Полный бак',
        text:'Заправьте полный бак перед сдачей в аренду',
        name:'fullTank',
        state:addAutoOptions,
        addOptions:jest.fn(),
        className: 'MockName',
        checked:true
      }   
    }
    const component = mount(<FormProvider><BrowserRouter><Provider store={store}><Option {...props}/></Provider></BrowserRouter></FormProvider>)
    it('Option render test', ()=>{      
      const node = component.find('p').at(0)
      expect(node.text()).toEqual('Полный бак')
    })
   
  })
  

  
  
})




