const express = require('express')
const app = express()
const port = 11655

app.get('/', (req, res) =>
  res.send('Greetings from Osksvn...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
