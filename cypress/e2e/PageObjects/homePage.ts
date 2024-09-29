export class HomepageObjects{

searchfield(){
    return cy.get('.search-keyword')
}

searchBtn(){
    return cy.get('.product-action > button')
 }

}