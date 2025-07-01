

const postsSchema = new mongoose.Schema({ title: String, content: String});
app.post('/posts', async (req, res) => {
    const p = new Post(req.body);
    await p.save()

    res.status(201).send(p)
}
)