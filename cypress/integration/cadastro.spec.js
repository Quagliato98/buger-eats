import SignupPage from '../pages/signUpPage'

describe('Cadastro válido', ()=>{
    it('Usuário deve se cadastrar com sucesso', ()=>{

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

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectMessage)

    })
    
    it('Usuário deve tentar se cadastrar com CPF inválido', ()=>{

        var deliver = {
            name: 'Andrey Quagliato',
            cpf: '668220860AA',
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

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        signup.alertMessageShouldBe('Oops! CPF inválido')

    })
})