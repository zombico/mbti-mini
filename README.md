
To build 

After installing dependencies, these scripts are needed to run the application.

npm run seed - this will populate the database

npm start - runs the fe on 3000, and db and server on 3001.  


Navigate to localhost:3001 to take a test with a new user signup.  Completion of the test will add a record to the db.

A user's result can be accessed by going to this route: http://localhost:3001/results/?:email

However, I was not able to parse the logic of it in time, and thus am unable to process "real" results from the front end app.

I did still create a dynamic results page, and it can be seen with the mock data of these seeded users:

http://localhost:3001/results/?joestar@gmail.com
http://localhost:3001/results/?koichi@speedwagon.io
http://localhost:3001/results/?giornogiovanna@gmail.com



