

export default (app, router) => {
    router.get('/', (req, res, next) => {
        res.status(200).send({
            "hello": "hello"
        });
    });

    app.use('/api/v1', router);
}
