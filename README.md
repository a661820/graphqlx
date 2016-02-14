# GraphQL tests

```
npm install --save express graphql body-parser
npm install --save-dev babel-cli babel-preset-es2015 babel-register

cd ~/Dev/graphqlx
npm start

curl -XPOST http://127.0.0.1:3003/graphql/hello

curl -XPOST http://192.168.4.12:3003/graphql/hello

curl -XPOST -H "Content-Type:application/graphql" -d 'query RootQueryType { count }' http://192.168.4.12:3003/graphql
```