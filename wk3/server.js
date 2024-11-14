import express from 'express'
import { Sequelize } from 'sequelize'

const conn = new Sequelize({
    dialect: 'sqlite',
    storage: 'my.db'
})

const TemperatureRecord = conn.define('temperatureRecord', {
    level: Sequelize.INTEGER
})

try {
    await conn.sync({ alter: true })
} catch (error) {
    console.warn(error)
}

const app = express()
app.use(express.json())

app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong' })
})

app.get('/temperature-records', async (req, res, next) => {
    try {
        const records = await TemperatureRecord.findAll()
        res.status(200).json(records)
    } catch (error) {
        next(error)
    }
})

app.post('/temperature-records', async (req, res, next) => {
    try {
        let newTemperatureRecord = req.body
        const record = await TemperatureRecord.create(newTemperatureRecord)
        res.status(201).json(record)
    } catch (error) {
        next(error)
    }
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

app.use((error, req, res, next) => {
    console.warn(error)
    res.status(500).json({ message: 'server error' })
})

app.listen(8080)