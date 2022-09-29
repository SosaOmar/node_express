const express = require('express');

const app = express();

app.get('/me', (req, res)=> {
    res.status(200).json({
        name: 'Omar',
        age: 21,
        country: 'Uruguay'
    })
})

app.post('/goals', (req, res)=> {
    res.status(200).json({
        hobbies: ['play video games', 'exercise', 'cook']
    })
})

app.patch('/goals', (req, res)=> {
    res.status(200).json({
        goals: ['approve backend', 'get backend work', 'learn English']
    })
})

app.put('/business', (req, res)=> {
    res.status(200).json({
        business: ['abitab', 'plan ceibal', 'redpagos']
    })
})

app.listen(8000, ()=>{
    console.log("Server Started");
})