const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    'postgres://lkmzsxlfdurtqh:0ec22d244492b60a20bfb8e088b221d5a06b8a27dbfc9253e6f344aaef5b4b45@ec2-18-234-17-166.compute-1.amazonaws.com:5432/df5o44p0son316',
        {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            }
        }
    }
        
)

module.exports = sequelize

