class webtable{

    url(){
      return  cy.visit('https://demoqa.com/webtables')
    }

    add(){
        return cy.get('#addNewRecordButton')
    }

    firstName(){
        return cy.get('#firstName')
    }

    lastName(){
        return cy.get('#lastName')
    }

    email(){
        return cy.get('#userEmail')
    }

    age(){
        return cy.get('#age')
    }

    salary(){
        return cy.get('#salary')
    }

    department(){
        return cy.get('#department')
    }

    submit(){
        return cy.get('#submit')
    }

    //for search functionality//
    search(){
        return cy.get('#searchBox')
    }
}

export default webtable;