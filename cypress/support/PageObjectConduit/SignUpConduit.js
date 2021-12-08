class SignUpConduit{
    getSignupButtonPage(){
        return cy.get('[show-authed="false"] > :nth-child(3) > .nav-link')
    }
    getUserName(){
        return cy.get('[placeholder=Username]')
    }

    getEmail(){
        return cy.get('[placeholder=Email]').clear()
    }

    getPassword(){
        return cy.get(':nth-child(3) > .form-control')
    }

    getSignUpButton(){
        return cy.get('.btn.btn-lg.btn-primary.pull-xs-right.ng-binding') 
    }

   

    



}export default SignUpConduit;