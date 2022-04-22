
class SignupPage {
    go() {
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('form h1').should('have.text', 'Cadastre-se para  fazer entregas')

    }

    fillForm(deliver) {
        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('.field input[type="button"]').should('have.value', 'Buscar CEP').click()

        cy.get('.field input[name="address"]').should('have.value', deliver.address.street)
        cy.get('.field input[name="address-number"]').type(deliver.address.number)
        cy.get('.field input[name="address-details"]').type(deliver.address.details)
        cy.get('.field input[name="district"]').should('have.value', deliver.address.district)
        cy.get('.field input[name="city-uf"]').should('have.value', deliver.address.city_uf)

        cy.contains('.delivery-method li', deliver.deliver_method).click()
        cy.get('input[accept^="image"]').selectFile('cypress/fixtures/images/cnh-digital.jpg', {force: true})

    }

    submit() {
        cy.get('form button[type="submit"]').click()

    }

    modalContentShouldBe(expectMessage) {
        cy.get('#swal2-html-container').should('have.text', expectMessage)
    }

    alertMessageShouldBe(expectMessage) {
        cy.get('.alert-error').should('have.text', expectMessage)

    }
}

export default SignupPage;