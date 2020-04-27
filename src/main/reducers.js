import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartao',
            done: true
        }, {
            _id: 2,
            description: 'Reunir a galera num churrasco',
            done: false
        }, {
            _id: 3,
            description: 'Consulta no médico',
            done: false
        }]
    })
})

export default rootReducer