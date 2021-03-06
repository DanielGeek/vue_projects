import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount( Counter )
  })

  // test('It must match the snapshot', () => {

  //   const wrapper = shallowMount( Counter )

  //   expect(wrapper.html()).toMatchSnapshot()
  // })

  test('h2 should have the default value counter', () => {

    expect( wrapper.find('h2').exists() ).toBeTruthy()

    const h2Value = wrapper.find('h2').text()

    expect( h2Value ).toBe('Counter')
  })

  test('value by default should have 100 in p',() => {

    // const pTags = wrapper.findAll('p')
    const value = wrapper.find('[data-testid="counter"]').text()

    // expect( pTags[1].text() ).toBe('100')
    expect( value ).toBe('100')
  })

  test('should be increment and decrease the counter value', async() => {

    const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')
    await decreaseBtn.trigger('click')
    await decreaseBtn.trigger('click')

    const value = wrapper.find('[data-testid="counter"]').text()

    expect( value ).toBe('101')

  })

  test('should set the default value', () => {

    const { start } = wrapper.props()

    const value = wrapper.find('[data-testid="counter"]').text()

    expect( Number(value) ).toBe( start )
  })

  test('should show the prop title', () => {

    const title = 'Hello World!!!'

    const wrapper = shallowMount( Counter, {
        props: {
          title,
          // start: '5'
        }
    })

    expect( wrapper.find('h2').text() ).toBe(title)
  })

})