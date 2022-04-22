
describe('Cadastro válido', ()=>{
    it('Usuário deve se cadastrar com sucesso', ()=>{
        cy.visit('https://buger-eats.vercel.app')
        cy.get('a[href="/deliver"]').click()
        cy.get('form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var deliver = {
            name: 'Andrey Quagliato',
            cpf: '66822086005',
            email: 'helloworld@gmail.com',
            whatsapp: '81938853874',
            address: {
                postalcode: '15991512',
                street: 'Avenida José Schimidt',
                number: '100',
                details: 'Casa',
                district: 'Nova Cidade',
                city_uf: 'Matão/SP'
            },
            deliver_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

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

        cy.get('form button[type="submit"]').click()

        const expectMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        cy.get('#swal2-html-container').should('have.text', expectMessage)
    })
})