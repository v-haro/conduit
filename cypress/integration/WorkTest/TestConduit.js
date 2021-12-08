/// <reference types="cypress" />
import SignUpCuonduit from '../../support/PageObjectConduit/SignUpConduit'
import MenuConduit from '../../support/PageObjectConduit/MenuConduit'
import SettingsConduit from '../../support/PageObjectConduit/SettingsConduit'
import FunctionConduit from '../../support/PageObjectConduit/FunctionConduit'


const signUpCuonduit = new SignUpCuonduit()
const menuConduit = new MenuConduit()
const settingsConduit = new SettingsConduit()
const functionConduit = new FunctionConduit()
context('automation test case', () => {

    it('Case 1: Get an Email', () => {
        cy.visit('https://getnada.com/')

        cy.get('.cursor-pointer.font-semibold.py-1.px-4.bg-red-800.text-white').invoke('text').then((text) => {
            cy.log(text)
            cy.task('setCreationEmail', text);

        })


    })

    it('Case 2: SignUp Test', () => {
        cy.visit('https://demo.realworld.io/#/')
        menuConduit.getSignupMenuButton().click()

        cy.task('getCreationEmail').then((emailCreated) => {

            emailCreated = emailCreated.slice(0, emailCreated.length - 1)

            const user = functionConduit.createUser(emailCreated)
            signUpCuonduit.getUserName().type(user)
            cy.wait(2000)
            signUpCuonduit.getEmail().type(emailCreated)
            cy.wait(2000)
            var password = functionConduit.generateRandomPass()
            cy.task('setPassword', password);
            signUpCuonduit.getPassword().type(password)
            signUpCuonduit.getSignUpButton().click()
            menuConduit.getSettingsMenuButton().click()
            settingsConduit.getLogOutButton().click()
        });
    })

    it('Case 3: Login Test and Update Settings', () => {
        cy.visit('https://demo.realworld.io/#/')
        menuConduit.getSignInMenuButton().click()
        cy.wait(2000)
        cy.task('getCreationEmail').then((emailCreated) => {

            emailCreated = emailCreated.slice(0, emailCreated.length - 1)
            signUpCuonduit.getEmail().type(emailCreated)
            cy.wait(2000)
            cy.task('getPassword').then((password) => {
                signUpCuonduit.getPassword().type(password)
            })

            menuConduit.getSignInButton().click()
            cy.wait(2000)
            menuConduit.getSettingsMenuButton().click()
            settingsConduit.getSettingTextArea().type("It's a text to prove Text area work")
            settingsConduit.getUrlImageInput().type("https://api.realworld.io/images/smiley-cyrus.jpeg")
            settingsConduit.getSettingPasswordtext().type('A123456a')
            settingsConduit.getUpdateSettingsButton().click()

        })

    })

    it('Case 4: Loggin whit a new Password', () => {
        cy.visit('https://demo.realworld.io/#/')
        menuConduit.getSignInMenuButton().click()
        cy.wait(2000)
        cy.task('getCreationEmail').then((emailCreated) => {

            emailCreated = emailCreated.slice(0, emailCreated.length - 1)
            signUpCuonduit.getEmail().type(emailCreated)
            cy.wait(2000)
            signUpCuonduit.getPassword().type('A123456a')
            menuConduit.getSignInButton().click()
        })
    })


})
