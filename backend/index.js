const express = require('express')
const app = express()


let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]

  app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
  app.get('/api/notes', (request, response) => {
    response.json(notes)
  })

  app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)

    const note = notes.find((note) => note.id === id)

    if (note) {
         res.json({message: 'success', note})
    }
    else {
        res.status(404).json({message: "oops note not found"})
    }
   
  })

  app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter((note) => note.id !== id )

    res.status(204).json({message: "note deleted successfully"})
  })

// PORT
const PORT = process.env.PORT || 5000 ;

// LISTEN TO REQUEST ON PORT 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })