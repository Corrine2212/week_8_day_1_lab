import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add numbers', () => {
    const button1 = container.getByTestId('number1');
    const buttonPlus = container.getByTestId('operator-add')
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1)
    fireEvent.click(buttonPlus)
    fireEvent.click(button4)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('5')
  })

  it('should be able to subtract numbers', () => {
    const button7 = container.getByTestId('number7');
    const buttonSubtract = container.getByTestId('operator-subtract')
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7)
    fireEvent.click(buttonSubtract)
    fireEvent.click(button4)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to multiply numbers', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('operator-multiply')
    const button5 = container.getByTestId('number5');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3)
    fireEvent.click(buttonMultiply)
    fireEvent.click(button5)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('15')
  })
  
  it('should be able to divide numbers', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const buttonDivide = container.getByTestId('operator-divide')
    const button7 = container.getByTestId('number7');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(buttonDivide)
    fireEvent.click(button7)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to concatenate multiple number button clicks', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2)
    fireEvent.click(button1)
    expect(runningTotal.textContent).toEqual('21')
  })

  it('should be able to chain multiple operations together', () => {
    const button1 = container.getByTestId('number1');
    const buttonPlus = container.getByTestId('operator-add');
    const button2 = container.getByTestId('number2');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const buttonEquals = container.getByTestId('operator-equals');

    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1)
    fireEvent.click(buttonPlus)
    fireEvent.click(button2)
    fireEvent.click(buttonSubtract)
    fireEvent.click(button1)
    expect(runningTotal.textContent).toEqual('1')
  })

  it('should be able to clear running total without affecting the calculation', () => {
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const buttonAdd = container.getByTestId('operator-add')
    const buttonSubtract = container.getByTestId('operator-subtract');
    const buttonEquals = container.getByTestId('operator-equals');
    const clear = container.getByTestId('clear')
    const runningTotal = container.getByTestId('running-total')
    
    fireEvent.click(button1)
    fireEvent.click(buttonSubtract)
    fireEvent.click(button2)
    fireEvent.click(buttonEquals)
    fireEvent.click(clear)
    fireEvent.click(buttonAdd)
    fireEvent.click(button1)
    fireEvent.click(buttonEquals)

    expect(runningTotal.textContent).toEqual('0')
  })

})

