
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;
const sequelize = require('./sequelize')
const bcrypt = require('bcrypt')

//Middleware
app.use(express.json());
app.use(cors());


//Put endpoints here
app.post('/register', async (req, res) => {
  const {username, firstName, lastName, email, password} = req.body
  const checkUser = await sequelize.query(`
  SELECT * FROM users WHERE username = '${username}'
  `)
  // console.log(checkUser[1].rowCount)
  if(checkUser[1].rowCount !== 0) {
    res.status(500).send('Username already Exists')
  } else {
    const salt = bcrypt.genSaltSync(10)
    const passwordHash = bcrypt.hashSync(password, salt)
    await sequelize.query(`
    INSERT INTO users(firstName, lastName, username, email, password)
    VALUES (
      '${firstName}',
      '${lastName}',
      '${username}',
      '${email}',
      '${passwordHash}'
      )
      `)
      const userInfo = await sequelize.query(`
      SELECT id, username, firstname FROM users WHERE username = '${username}'
      `)
      res.status(200).send(userInfo)
    }
  })
  
  app.post('/login', async (req, res) => {
    const {username, password} = req.body
    const validUser = await sequelize.query(`
    SELECT * FROM users WHERE username = '${username}'
    `).catch((err) => console.log(err))
    console.log(validUser)
    if(validUser[1].rowCount === 1) {
      if (bcrypt.compareSync(password, validUser[0][0].password)) {
        let object = {
          id: validUser[0][0].id,
          firstName: validUser[0][0].firstName,
          username
        }
        res.status(200).send(object)
      } else {
        res.status(401).send('Password is Incorrect')
      }
    } else {
      res.status(401).send('Username is Incorrect')
    }
})

app.post('/create', async (req, res) => {
  const {  description, tickerSymbol, win, shares, price, riskAmount} = req.body
  await sequelize.query(`
  INSERT INTO posts(description, tickersymbol, win, shares, price, riskamount)
  VALUES (
    
    '${description}',
    '${tickerSymbol}',
    '${win}',
    '${shares}',
    '${price}',
    '${riskAmount}'
  )
  `)
  .catch((err) => console.log(err))
  
  res.status(200).send('query-sent')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


  