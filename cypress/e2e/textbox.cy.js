import textbox from "../../pom/textbox/textbox";
before(() => {
  cy.fixture('testData').as('data')
})

describe('Test Text Box Feature', () => {
  before(() => {
      cy.visit("https://demoqa.com/text-box")
  })

  // it("Verify Placeholders are visible or not", () => {
  //     cy.xpath("//input[@id='userName']").invoke('attr', 'placeholder').should('eq', 'Full Name')
  //     cy.xpath("//input[@id='userEmail']").invoke('attr', 'placeholder').should('eq', 'name@example.com')
  //     cy.get("#currentAddress").invoke('attr', 'placeholder').should('eq', 'Current Address')

  // })

  it("Verify Text box is working properly or not using valid and invalid input", function () {
      const textBox = new textbox()
      const textBoxDataLength = this.data.textBoxData.length
      for (var i = 0; i < textBoxDataLength; i++) {
          textBox.fullName(this.data.textBoxData[i].fullname)
          textBox.email(this.data.textBoxData[i].email)
          textBox.address(this.data.textBoxData[i].currentAddress)
          textBox.permanentAddress(this.data.textBoxData[i].permanentAddress)
          textBox.submit()

          cy.xpath("//p[@id='name']").should('contain', this.data.textBoxData[i].fullname)
          cy.xpath("//p[@id='email']").should('contain', this.data.textBoxData[i].email)
          cy.xpath("//p[@id='currentAddress']").should('contain', this.data.textBoxData[i].currentAddress)
          cy.xpath("//p[@id='permanentAddress']").should('contain', this.data.textBoxData[i].permanentAddress)
      }



  })
})