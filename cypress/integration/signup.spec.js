import signup from '../pages/signUpPage'
import signupFactory from '../factories/signupFactory'
import signUpPage from '../pages/signUpPage'

describe('Signup', ()=>{

/*     beforeEach(function() {
        cy.fixture('deliver').then((d)=> {
            this.deliver = d
        })
    }) */

    it('User should be deliver', function() {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })
    
    it('User cant register with invalid CPF ', function() {

        var deliver = signupFactory.deliver()

        deliver.cpf = '668220860sd'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('User cant register with invalid Email', function() {

        var deliver = signupFactory.deliver()

        deliver.email = 'helloworld.com'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required fields', function(){
        const messages = [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'delivery_method', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'}

        ]

        before(function(){
            signUpPage.go()
            signUpPage.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signUpPage.alertMessageShouldBe(msg.output)
            })
        })
    })
})