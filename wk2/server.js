import express from 'express'

const app = express()
app.use(express.json())

const records = []
let currentId = 1

app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong' })
})

app.get('/temperature-records', (req, res) => {
    res.status(200).json(records)
})

app.post('/temperature-records', (req, res) => {
    let newTemperatureRecord = req.body
    newTemperatureRecord.id = currentId
    currentId++
    records.push(newTemperatureRecord)
    res.status(201).json(newTemperatureRecord)
})

app.get('/temperature-records/:id', (req, res) => {
    const record = records.find(e => e.id === parseInt(req.params.id))
    if (record) {
        res.status(200).json(record)
    } else {
        res.status(404).json({ message: 'not found' })
    }
})

app.put('/temperature-records/:id', (req, res) => {
    const index = records.findIndex(e => e.id === parseInt(req.params.id))
    if (index !== -1) {
        records[index] = req.body
        res.status(202).json({ message: 'accepted' })
    } else {
        res.status(404).json({ message: 'not found' })
    }
})

app.delete('/temperature-records/:id', (req, res) => {
    const index = records.findIndex(e => e.id === parseInt(req.params.id))
    if (index !== -1) {
        records.splice(index, 1)
        res.status(204).json({ message: 'deleted' })
    } else {
        res.status(404).json({ message: 'not found' })
    }
})

app.listen(8080)