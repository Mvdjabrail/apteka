const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(require('./routs/cart.route'))
app.use(require('./routs/category.route'))
app.use(require('./routs/drugs.route'))
app.use(require('./routs/user.route'))


mongoose.connect('mongodb+srv://mvdjabrail:1221@cluster0.5s8s8.mongodb.net/Apteka', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${3000}`)
})