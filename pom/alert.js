class alert  {
    url(){
        return cy.visit('https://demoqa.com/alerts');
    }

    buttonOne(){
        return cy.get('#alertButton');
               
    }
}

export default alert;