import webtable from "../../pom/textbox/webtable";

describe('Validate the functionality of webtable ', () => { 
       const web = new webtable();
        beforeEach(() => {
            cy.visit('https://demoqa.com/webtables')
        });
 it('Should able to visit the url', () => {

    const firstname = "nikunjjj";
    const lastname ="basnet";
    const email = "leavem8@gmail.com";
    const age = "26";
    const salary = "90000";
    const department ="QA"
        web.url();
        //should able to add the table //
        web.add().click();
    

    //should able to add the first name //
       web.firstName().type(firstname)
       .should('be.visible')
       .should('have.value','nikunjjj');

    //should able to enter the last name//
      web.lastName().type(lastname)
      .should('have.value','basnet');

    //should able to enter the email//
      web.email().type(email)
      .should('have.value','leavem8@gmail.com')

    //should able to enter the email//
      web.age().type(age)
      .should('have.value','26');

    //should able to enter the age//
      web.salary().type(salary)
      .should('have.value','90000');

    //should able to enter  the department //
      web.department().type(department)
      .should('have.value','QA');

    //should able to sumbit the form//
      web.submit().click()
      .should('be.visible')
    });

  it('Validation of search functionality', () => {
      web.search().type('Alden').should('have.value','Alden')
  });
});