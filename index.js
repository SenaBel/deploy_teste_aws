const express = require('express')
const app = express()

app.use(express.json())

app.get('/',(request, response) => {
    return response.json({message: 'Testando Servidor Teste 09-02-2022'})
})

app.get('/atualizou',(request, response) => {
    return response.json({message: 'Rota acessada com sucesso'})
})


app.post('/teste', (request, response) => {
    const {name, date} = request.body
    return response.json({name, date})
})

app.listen(3333)