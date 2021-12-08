class MenuConduit{
    getSignupMenuButton(){
        return cy.get('[show-authed="false"] > :nth-child(3) > .nav-link')
    }

    getSignInMenuButton(){
        return cy.get('.nav-link').eq(1).click()
    }

    getSettingsMenuButton(){
       return cy.get('.nav-link').eq(5)
    }
    
    getSignInButton(){
        return cy.get('.btn.btn-lg.btn-primary.pull-xs-right.ng-binding')
    }


   

    



}export default MenuConduit;