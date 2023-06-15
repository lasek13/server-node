const express = require('express')
const { futimes } = require('fs')
const app = express()
const port = 3000

app.use(express.static('pub'))

const requestTime = function(req,res,next){
    req.czas = Date.now()
    next()
}

app.use(requestTime)


app.get('/', (req, res) => {

    res.setHeader('Content-Type','text/html')
    res.write('<img src="logo1.gif">')
    res.write('<H2>AAA</h2>')
    res.write(`<small>${req.czas}</small>`)
    res.end()
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})