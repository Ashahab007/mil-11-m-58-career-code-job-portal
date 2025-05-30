Index

1.0 initially we have created pages and router folder in src folder. then created in pages folder, Home, layout, Register, and shared (for Navbar, Footer).

2.0 my requirement is creating a animation from lottie. So first download the animation from https://lottiefiles.com/. Select the animation then download the lottie JSON file. then install lottie react from https://www.npmjs.com/package/lottie-react "npm i lottie-react"

3.0 firebase authentication for registration

4.0 my requirement is hide firebase username & password using environment variables. that's why from vite website from Env Variables and Modes according to documentation create a file name .env.local where package.json created

5.0.0 My requirement is creating context for authentication

5.0 My requirement is data that are manually inserted in will be show in Home page HotJobs section

6.0.0 my requirement is enable user registration using loading state

7.0.0 my requirement is enable user sign in method

7.0 my requirement is if user is present, on clicking the apply jobs the user will redirect to the apply jobs route, if user is not present it will render to the sign in page.

8.0.0 My requirement is persist the user using onAuthStateChange

9.0.0 my requirement is show the logged in user in navbar

10.0.0 my requirement is implement sign out feature

11.0 My requirement is applying motion dev for animation

12.0 My requirement is animate banner

13.0 my requirement is implementing google sign in feature

14.0 iniitial server setup by $ mkdir mil-11-m-58-career-code-job-server => cd mil-11-m-58-career-code-job-server => npm init => then install in one command "npm i express mongodb nodemon cors dotenv"

15.0 mannually some data is input in data base. For this first go to mongodb server => cluster => browse collection => create database => fill the Database Name => Collection Name => then create. After created, in jobs u will find insert applicationument. click on it and delete any data like ObjectID is present then paste ur data.

16.0 now connect the server by going to cluster => connect => driver => copy the code and follow 16.1

17.0 for add new database user and password go to database access => Add New Database User => in Password Authentication enter user name: 'career_db_admin and in password use auto generated password which is "O4t3tOchGoC21XpN". Then Built-in Role will be admin then add user.

18.0 my requirement is data that are manually inserted in 15.0 will be show in Home page HotJobs section

19.0 my requirement is see details upon click on hot jobs detail button. set a dynamic id

20.0 my requirement is create a private route and conditionally show the data if user is present or not

21.0 now my requirement is if signed out user is going to apply for the jobs it will redirect to sign in page after sign in it will redirect to the applied jobs page

22.0 as we reload after logged in it will redirect to the login page to solve this we use loading spinner to persist that page

23.0 my requirement is user is going to apply a job from apply button. As the logged in user is going to apply for the specific job so we need to get the specific job id using useParams() and also we need the user to know who is applying. so we create a custom hook to get the user data.

24.0 Now my requirement is show the specific users application in ui when user is logged in. That's why created MyApplication component and wrap with a <PrivateRoute></PrivateRoute>.

25.0 My requirement is show my application data in ui

26.0 But my requirement is show the job data that the applicant's applied (this is the bad method but we have to know)

27.0 my requirement is created also recruiter link to add jobs form

28.0 Now my requirement is show the job that i posted

29.0 My requirement is recruiter want to see the how many applicants apply for the specific jobs on clicking the View Application

30.0 my requirement is recruiter can update the status of applicant by selecting a dropdown menu. So created a dropdown

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!-- .env.local

VITE_apiKey=AIzaSyAsD56ZpRQ6At93k8We1KVkplOCvD1xpCI
VITE_authDomain=career-code-job-portal.firebaseapp.com
VITE_projectId=career-code-job-portal
VITE_storageBucket=career-code-job-portal.firebasestorage.app
VITE_messagingSenderId=705332996166
VITE_appId=1:705332996166:web:6d3fbc5fe1fca920210247
 -->
