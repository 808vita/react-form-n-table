## Deployed link (herokuapp-MERN) uses MongoDd

### [https://react-form-table-808.herokuapp.com/](https://react-form-table-808.herokuapp.com/)

# Local Setup instruction

(assumption : you already have node installed & using a code editor like vscode, if not install those first)

### Serve React Build from backend

- Open "backend" folder
- In terminal use:"npm i" (without quotes)
- Then use "npm run dev " script in the terminal (without quotes)
- This would run node server and serve react build verions in localhost:4000
- \*\*\* requires .env file at the level as server.js file
- .env should contain the following:
- NODE_ENV="production"
- MONG_URI="your mongodb uri"
- PORT=4000

### Run React Dev verison with Node server

(requires two terminal instances)

#### Terminal 1

- Open "backend" folder
- In terminal use:"npm i" (without quotes)
- Then use "npm run dev " script in the terminal (without quotes)
- This would run node server
- Still requires the .env file! Need to provide MONG_URI="your mongodb uri" , this will be used to connect with db

#### Terminal 1

- cd frontend (folder)
- In terminal use:"npm i" (without quotes)
- Then use "npm start " script in the terminal (without quotes)
- This would start react development server
- React uses proxy to make api calls from backend (frontend localhost:3000 ==> to backend localhost:4000)

# Frontend (React)

This react app extensively uses bootstrap for UI & browser local storage as a mock database .
Also uses Ant design components like :
Table , modal , search input and simple buttons.

# Backend(Express , MongoDb)

Node server handles requests and sends back responses when an api call is made .
The server can interact with MongoDB and do the following things :

- Fetch feedback records
- Post feedback record (create record)
- Delete (one or many) records
- Additionally validates request body data before processing for post request
- Mongoose Models for db
