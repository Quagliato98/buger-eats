
export default {

    deliver: function(){

        var data = {
            name: 'Andrey Quagliato',
            cpf: '66822086005',
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