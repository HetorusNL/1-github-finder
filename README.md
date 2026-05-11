# React project 1-github finder

The source code of the first project of the 'React Front To Back 2019' course.

## Scripts

### Run the development server

run the following command to run the dev server:  
`npm run dev`  
this starts the development server on `localhost:5173`

### Run a build (without incrementing version number)

run the following command to build the application:  
`npm run build`  
this updates the version number (if changed in `package.json`) and builds the application

### Run a build with version increment and git commit creation

the Semantic Versioning, also known as "semver", is used:  
version: `major.minor.patch`  
run one of the following commands:  
`npm run release-patch` // increments the `patch` number of the version  
`npm run release-minor` // increments the `minor` number of the version  
`npm run release-major` // increments the `major` number of the version  
all these three commands also create a git commit and git tag with the major.minor.patch version number, and runs the build to create a production build, and add the changes (in e.g. meta.json version number) to the last version commit.  
these three commands also mention how to perform a push to the master branch on github and push the tags

### Deploy the newly generated version to the server

run the following command to deploy the new version:  
`npm run deploy`  
this removes the previous build from the server and copies the build to the server
