//Create database and data of seeds
0.Change address your database on file config/config.json
1.npm install -g yarn
2.sequelize db:migrate        OR         node_modules/.bin/sequelize db:migrate
3.sequelize db:seed:all       OR           node_modules/.bin/sequelize db:seed:all


//start
npm run dev


//branch
master: create config, folder basic
branch-1: CRUD station
branch-2: login, register, CRUD user
branch-3: bcryptjs, authentication, authorization
bracnh-4: upload file and validate file
branch-5: CRUD trips and create constraint trip && station
branch-6: CRUD ticket
branch-7: CRUD PassengerCarCompanies
branch-8: CRUD Vehicles
branch-9: CRUD Seats