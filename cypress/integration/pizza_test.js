describe('Pizza Builder', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001')
    })

    const sizeDropdown = () => cy.get('select[id=size-dropdown]');
    const pepperoniInput = () => cy.get('input[name=pepperoni]');
    const sausageInput = () => cy.get('input[name=sausage]');
    const pepperInput = () => cy.get('input[name=greenPepper]');
    const mushroomsInput = () => cy.get('input[name=mushrooms]');
    const specialInput = () => cy.get('input[name=special]');
    const nameInput = () => cy.get('input[name=name]');
    const submitBtn = () => cy.get('button[id=order-button]');
    const pizzaBuildBtn = () => cy.get('button[id=pizza-button]');

    it('sanity check to ensure tests are working', () => {
        expect(true).to.equal(true);
        expect(1 + 2).not.to.equal(10);
    })

    it('home elements are rendering', () => {
        pizzaBuildBtn().should('exist');
    })

    it('form is rendering', () => {
        pizzaBuildBtn().click();
        sizeDropdown().should('exist');
        pepperoniInput().should('exist');
        sausageInput().should('exist');
        pepperInput().should('exist');
        mushroomsInput().should('exist');
        specialInput().should('exist');
        nameInput().should('exist');
        submitBtn().should('exist');
    })

    it('able to type in text inputs', () => {
        pizzaBuildBtn().click();
        specialInput()
        .should('have.value','')
        .type('special')
        .should('have.value', 'special')

        nameInput()
        .should('have.value','')
        .type('name')
        .should('have.value', 'name')
    })

    it('able to select multiple toppings', () => {
        pizzaBuildBtn().click();
        pepperoniInput()
        .should('not.be.checked')
        .check()
        .should('be.checked')

        sausageInput()
        .should('not.be.checked')
        .check()
        .should('be.checked')

        pepperInput()
        .should('not.be.checked')
        .check()
        .should('be.checked')

        mushroomsInput()
        .should('not.be.checked')
        .check()
        .should('be.checked')
    })

    it('submit button submits the form', () => {
        pizzaBuildBtn().click();
        sizeDropdown().select(3);
        pepperoniInput().check();
        sausageInput().check();
        specialInput().type('extra cheese');
        nameInput().type('name');
        submitBtn().click();

    })
})

// test that you can add text to the box(tested)
// test that you can select multiple toppings(tested)
// test that you can submit the form