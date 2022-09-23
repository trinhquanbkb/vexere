const express = require('express')
const app = express()
const path = require('path')
const { sequelize } = require('./models/index')
const rootRouter = require('./routers/index')

app.use(express.json())                                         // chuyển response và request về dạng json hết

//cài static file
const publicPathDirectory = path.join(__dirname, './public')    //hàm join dùng để nối đường dẫn __dirname ở đây chính là đường dẫn tới 
app.use('/public', express.static(publicPathDirectory))                    //file server.js và các file trong folder public sử dụng đường dẫn đấy

//sử dụng router
app.use("/api/v1", rootRouter)

app.listen(3000, async () => {
    console.log(`listening http://localhost:3000`)
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})