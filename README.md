To Install MongoDB
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

1. brew tap mongodb/brew
2. brew install mongodb-community@4.2

To build

After installing dependencies, these scripts are needed to run the application.

1. run a MongoDB shell with command "mongod"

2. npm run seed - this will populate the database

3. npm run build - creates production build that can talk to database

4. npm start - runs the fe db and server on localhost:3001

Navigate to localhost:3001 to take a test with a new user signup. Completion of the test will add a record to the db.

A user's result can be accessed by going to this route: http://localhost:3001/results/?:email

Currently, the form is only able to send results to the db, but not parse the user's perspective type.
I was not able to parse the logic of MBTI algorithm in time.

I did still create a dynamic results page, and it renders different types with the mock data of these seeded users:

http://localhost:3001/results/?joestar@gmail.com
http://localhost:3001/results/?koichi@speedwagon.io
http://localhost:3001/results/?giornogiovanna@gmail.com
