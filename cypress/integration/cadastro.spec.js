
describe('Cadastro', ()=>{
    it('Usuário deve se tornar um entregador', ()=>{
        cy.visit('https://buger-eats.vercel.app')
        cy.get('a[href="/deliver"]').click()
        cy.get('form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Andrey Quagliato',
            cpf: '66822086005',
            email: 'helloworld@gmail.com',
            whatsapp: '81938853874',
            endereco: {
                cep: '15991512',
                rua: 'Avenida José Schimidt',
                numero: '100',
                complemento: 'Casa',
                cidade: 'Nova Cidade',
                estado: 'Matão/SP'
            },
            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('.field input[type="button"]').should('have.value', 'Buscar CEP').click()

        cy.get('.field input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('.field input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('.field input[name="address-details"]').type(entregador.endereco.complemento)
        cy.get('.field input[name="district"]').should('have.value', entregador.endereco.cidade)
        cy.get('.field input[name="city-uf"]').should('have.value', entregador.endereco.estado)

        cy.contains('.delivery-method li', entregador.metodo_entrega).click()
        cy.get('input[accept^="image"]').selectFile('cypress/fixtures/images/cnh-digital.jpg', {force: true})

        cy.get('form button[type="submit"]').click()

        const expectMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        cy.get('#swal2-html-container').should('have.text', expectMessage)
    })
})