NOTE
- The user are required to open the terminal to run this code. 

// For question 1
1. Install ts-node by enter command 'npm i -g ts-node'. 
    - (For the user who haven't install)
2. Enter command 'ts-node Question1/question1.ts' to run the code. 
    - (Make sure the current location/directory is correct ~/**/PowTechAssessment/Question1)
3. * This is because only ts-node can run TypeScript file instead of node. 

// For question 2
1. Change directory to Question2 folder, using command: 'cd Question2'
2. Install 'yarn' into library
    - For Windows user, use command: 'npm i -g yarn'
    - For Mac user, use command: 'brew install yarn'
3. Enter command: 'yarn' to install the package/library of the program
4. In the directory '~/**/PowTechAssessment/Question2', create an '.env' file and copy the environemt key from .env.sample
    - (The enviroment port can based on user preference)
4. Enter command: 'yarn dev' to run the program
5. User can using the Postman to run both endpoints
    - To run endpoint #1, user can GET method on 'http://localhost:PORT/api/rhm/generate-hash'
    - To run endpoint #2, user can GET method on 'http://localhost:PORT/api/rhm/hash-last-char-verify'
    - * NOTE: PORT is the port number that configure in .env file