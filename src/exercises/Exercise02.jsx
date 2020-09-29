import React, { useState } from 'react';

/* THE FIX STARTS HERE */

// state data for 3 counters


// Counter Component
const Counter = ({name, value, onChange}) => {
  //name ---> index
  //value 
  //onChange ---> handlerOnChange in GroupOfCounters

  const handlerOnChange = e =>{
    ///// [x] Parse de value //////
    const newValue = parseInt(e.target.value)

    ///// [x] In case we type a negative number ////
    if(Number.isInteger(newValue)){
      onChange({
        newValue,
        index: parseInt(name)
      })
    }
    ///// [x] Set the value in '0' if we delete the input ////
    else if(!e.target.value){
        onChange({
          newValue: 0,
        index: parseInt(name)
        })
    }
    
  }

  return (
    <div className="d-flex my-2">
      <strong>{value}</strong>
      <div className="ml-2">
        <input type='number' placeholder={0} onChange={handlerOnChange}/>
      </div>
    </div>
  );
};

/////////////>> FIRST COUNTER <</////////////
//((( with onIncrement and onDecrement  )))//
/*const Counter = ({name, value, onChange}) => {
  //name ---> index
  //value 
  //onChange ---> handlerOnChange in GroupOfCounters

  //// [x] Save the operations we need to use ///
  const [operations] = useState({
    onIncrement: 1,
    onDecrement: -1
  })

  const handlerOnChange = e =>{
    ///// [x] Convert the e.target.name to integer and add with the value /////
    onChange({
      newValue: value + operations[e.target.name],
      index: parseInt(name)
    })
  }

  return (
    <div className="d-flex my-2">
      <strong>{value}</strong>
      <div className="ml-2">
        <button className="btn btn-danger mr-1" name='onDecrement' onClick={handlerOnChange}>-</button>
        <button className="btn btn-success" name='onIncrement' onClick={handlerOnChange}>+</button>
      </div>
    </div>
  );
};*/

const Total = ({value}) => {
  return(
    <strong>Total = {value}</strong>
  )
}

const GroupOfCounters = () => {
  const [data, setData] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ])

  const [total, setTotal] = useState(0)

  const handlerOnChange = ({newValue, index}) => {
    //operation ---> the new value
    //index ---> position in data

    //////// [x] Clone the array data ////////
    var changeData = data

    /////// [x] Change the variables on the obj  /////////
    changeData[index] = {
      ...changeData[index],
      value: newValue
    }


    ///// [x] Total of the values ////////
    const sum = changeData.map(d => d.value).reduce((e,f)=> e + f)

    ///// [x] Set the changes /////
    setData(changeData)
    setTotal(sum)
  }

  return (
    <div>
      {/*////// [x] Send in the name the position on the array ///////*/}
      {/*////// [x] Send in the onChange the handlerOnChange ///////*/}
      {data.map((counter, index) => (
        <Counter key={counter.id} name={index} 
        value={counter.value} onChange={handlerOnChange}/>
      ))}
      <Total value={total}/>
    </div>
  );
};

/* THE FIX ENDS HERE */

const Exercise02 = () => {
  return (
    <div className="container">
      <h2>Instructions</h2>

      <p>
        There are 2 components in this file: <strong>Counter</strong> and{' '}
        <strong>GroupOfCounters</strong>. The steps below will take you through
        modifying and adding components to change functionality and
        implementation.
      </p>

      <ol>
        <li>
          Update the <strong>Counter</strong> component to take{' '}
          <strong>onIncrement</strong> and <strong>onDecrement</strong>{' '}
          callbacks as props and ensure they update the counter's values
          independently. Each callback should take a single, integer value as a
          parameter which is the amount to increment the counter's existing
          value by.
        </li>

        <li>
          Move the global <strong>data</strong> array to the component state for
          the <strong>GroupOfCounters</strong> component.
        </li>

        <li>
          Render a fourth <strong>Counter</strong> component and ensure it's
          value is updated independently from the others.
        </li>

        <li>
          Create a <strong>Total</strong> component, which should display below
          the <strong>Counter</strong> components and always display the running
          total of all the <strong>Counter</strong> values.
        </li>

        <li>
          Make a copy of the <strong>Counter</strong> component, saving the
          original so you're instructor can view it later. Then do the
          following:
          <ol>
            <li>
              Remove the <strong>onIncrement</strong> and{' '}
              <strong>onDecrement</strong> props from the (new){' '}
              <strong>Counter</strong> component
            </li>
            <li>
              Add a single <strong>onChange</strong> callback prop that takes a
              single integer parameter — the new value for the counter.
            </li>
            <li>
              Ensure all <strong>Counter</strong> components still update and
              function independently after this change.
            </li>
          </ol>
        </li>
      </ol>

      <hr className="my-5" />

      <GroupOfCounters />
    </div>
  );
};

export default Exercise02;
