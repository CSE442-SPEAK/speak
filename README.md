# speak: Be Heard.
___
###### speak is a web app for petitions at UB. This product will let students organize political action on campus by creating petitions and gathering signatures from other students. Our product will ensure the validity of student signatures and allow for quick and easy dissemination of petitions to the student body.
___

## How-to Instructions to Deploy speak

#### *Disclaimer* These instructions are for \*nix systems

1. In order for **speak** to work on your machine, you will need to have `Node.js` and `npm` installed.
... First, refresh your local package index and then install `Node.js` from the repositories: 
```
sudo apt-get update
sudo apt-get install nodejs
```

... Next, we want to make sure we have `npm` installed, which is the `Node.js` package manager:
```
sudo apt-get install npm
```

... Finally, you will want to make sure you have the necessary dependencies for `npm`:
```
npm install
```

2. Then, you will need to clone the **speak** repository. 
```
git clone https://github.com/CSE442-SPEAK/speak.git
```

3. Once you have the repository on your local machine, the next step is make sure you are on the `develop` branch:
```
git checkout develop
```

4. In your local copy of the `speak` repository, maneuver to the `react-backend` folder:
```
cd react-backend
```

... Once you're in the `react-backend` folder, simply run:
```
npm start
```

Congratulations! You have successfully deployed **speak**!

