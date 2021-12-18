import React from 'react'

export default function Pizza(props) {
    const {
        values,
        change,
        submit,
        disabled,
        errors
    } = props;

    // submit handler
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    // change handler
    const changeHandler = evt => {
        const{name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <div>
            <div className='formTitle'>
            <h1>Pizza Builder</h1>
            </div>
            <form id='pizza-form' onSubmit={onSubmit}>
                <div className='formContainer'>
                {/* form container is the parent div for each section of the form. add flex to this when styling */}
                    <div id='errors'>
                        <div>{errors.name}</div>
                    </div>

                    <div className='size'>
                    <h3>Size</h3>
                            <select
                            name='size'
                            id='size-dropdown'
                            >
                                <option value='0'>-Select a size-</option>
                                <option value='1'>Small - 10"</option>
                                <option value='2'>Medium - 12"</option>
                                <option value='3'>Large - 14"</option>
                                <option value='4'>X-Large - 16"</option>
                            </select>
                    </div>

                    <div className='toppings'>
                        <h3>Add Toppings</h3>
                        <label>Pepperoni
                            <input
                            type='checkbox'
                            name='pepperoni'
                            checked={values.pepperoni}
                            onChange={changeHandler}
                            />
                        </label>
                        <label>Sausage
                            <input
                            type='checkbox'
                            name='sausage'
                            checked={values.sausage}
                            onChange={changeHandler}
                            />
                        </label>
                        <label>Green Pepper
                            <input
                            type='checkbox'
                            name='greenPepper'
                            checked={values.greenPepper}
                            onChange={changeHandler}
                            />
                        </label>
                        <label>Mushrooms
                            <input
                            type='checkbox'
                            name='mushrooms'
                            checked={values.mushrooms}
                            onChange={changeHandler}
                            />
                        </label>
                    </div>

                    <div className='instructions'>
                    <h3>Special Instructions</h3>
                        <input
                        type='text'
                        name='special'
                        placeholder='well done? extra sauce?'
                        id='special-text'
                        value={values.special}
                        onChange={changeHandler}
                        />
                    </div>

                    <div className='nameInput'>
                    <h3>Your Info</h3>
                    <label>First Name
                        <input
                        type='text'
                        name='name'
                        id='name-input'
                        value={values.name}
                        onChange={changeHandler}
                        />
                    </label>
                    <label>Last Name
                        <input
                        type='text'
                        name='lastName'
                        // value={values.lastName}
                        // onChange={changeHandler}
                        />
                    </label>
                    </div>

                    <div className='submit'>
                        <button id='order-button' disabled={disabled}>
                        Add to Order
                        </button>
                    </div>

                </div>
            </form>
        </div>
    )
}

















// what to include in the form
// - [ ] A order form that has a "/pizza" route and shows the form
// - [ ] A form with an id of "pizza-form"
// - [ ] A name text input field with an id of "name-input"
// - [ ] Validation for name and the error message is "name must be at least 2 characters" (Use this exact error message to make sure tests pass) ::: VERY IMPORTANT TO USE THAT EXACT ERROR MESSAGE (casing included!)
// - [ ] A dropdown for pizza size with an id of "size-dropdown"
// - [ ] A checklist for toppings - at least 4 (hint: name each separately!)
// - [ ] Text input for special instructions with an id of "special-text"
// - [ ] An Add to Order button that has an id of "order-button" and that submits form and returns a database record of name, size, toppings and special instructions