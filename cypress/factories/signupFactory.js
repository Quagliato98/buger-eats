var faker = require('faker')
var cpf = require('gerador-validador-cpf')


export default {

    deliver: function(){
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: 'helloworld@gmail.com',
            whatsapp: '81938853874',
            address: {
                'postalcode': '15991512',
                'street': 'Avenida José Schimidt',
                'number': '100',
                'details': 'Casa',
                'district': 'Nova Cidade',
                'city_uf': 'Matão/SP'
            },
            deliver_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}