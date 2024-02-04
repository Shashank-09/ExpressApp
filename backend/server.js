import express from 'express';
const app = express()
const port = 3000;

app.get('/' , (req , res ) => {
    res.send("hello")
})


app.get('/api/jokes' , (req , res) => {
    const jokes = [
        {
            id: 1,
            title: 'first joke',
            content: 'this is first joke'
        },
        {
            id: 2,
            title: 'second joke',
            content: 'this is second joke'
        },
        {
            id: 3,
            title: 'third joke',
            content: 'this is third joke'
        },
        {
            id: 4,
            title: 'fourth joke',
            content: 'this is fourth joke'
        },
        {
            id: 5,
            title: 'fifith joke',
            content: 'this is fifith joke'
        }
    ]
    res.send(jokes)
})

app.listen(port , (req , res ) => {
    console.log("Lisning on port 3000")
})

app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
    ];
    res.json(users);
});

