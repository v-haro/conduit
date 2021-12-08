class SettingsConduit{
    getLogOutButton(){
        return cy.get('.btn.btn-outline-danger')
    }

    getSettingTextArea(){
        return cy.get('[placeholder="Short bio about you"]').clear()
    }
    getUrlImageInput(){
        return cy.get(':nth-child(1) > .form-control').clear()
    }

    getSettingPasswordtext(){
        return cy.get('[placeholder="New Password"]').clear()
    }

    getUpdateSettingsButton(){
        return cy.get('.btn.btn-lg.btn-primary.pull-xs-right')
    }



   

    



}export default SettingsConduit;