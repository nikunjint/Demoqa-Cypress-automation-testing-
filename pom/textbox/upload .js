class upload{

url(){
   return cy.visit('https://demoqa.com/upload-download');

}

chooseFile(){
    return  cy.get('#uploadFile')
}
}

export default upload;