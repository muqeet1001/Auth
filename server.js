import app from './src/app.js'
import db from './src/db/db.js'
import router from './src/routes/auth.routes.js'
import express from 'express'
app.use(express.json())
app.use('/api',router)
app.listen(3000,db())
