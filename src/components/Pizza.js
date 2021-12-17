import React from 'react'

export default function PizzaForm() {
    return (
        <div>
            <h1>Pizza Builder Form</h1>
            <form id='pizza-form'>
                <label>Name
                <input
                type='text'
                name='name'
                id='name-input'
                // value={}
                // onChange={}
                />
                </label>

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