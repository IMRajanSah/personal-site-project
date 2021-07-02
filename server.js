const jsonserver=require('json-server');
const server = jsonserver.create();
const router = jsonserver.router('./src/json-server/db.json');
const middleware = jsonserver.defaults({
    static:'./build'
});
const PORT = 3050;
server.use(middleware);
server.use(jsonserver.rewriter({
    '/api/*':'/$1',
}))
server.use(router);
server.listen(PORT,()=>{
    console.log('server is running');
});