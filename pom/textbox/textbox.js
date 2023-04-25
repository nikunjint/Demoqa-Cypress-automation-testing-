class textbox{

 url() {
    return cy.visit('https://demoqa.com/text-box')
}

fullName(){
    return cy.get('#userName')
}

email(){
    return cy.get('#userEmail')
}

address(){
    return cy.get('#currentAddress')
 }

permanentAddress(){
    return cy.get('#permanentAddress')
}
submit(){
    return cy.get('#submit')
 }

textDisplay(){
    return cy.get('.border')
 }
  

}
export default textbox;