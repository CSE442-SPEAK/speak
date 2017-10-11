# speak: Be Heard.
___
###### speak is a web app for petitions at UB. This product will let students organize political action on campus by creating petitions and gathering signatures from other students. Our product will ensure the validity of student signatures and allow for quick and easy dissemination of petitions to the student body.
___

## How-to Instructions to Deploy speak

#### *Disclaimer:* These instructions are for \*nix systems.

### 1. In order for **speak** to work on your machine, you will first need to have `Node.js` and `npm` installed.

First, refresh your local package index and then install `Node.js` from the repositories: 

```
sudo apt-get update
sudo apt-get install nodejs
```

Next, we want to make sure we have `npm` installed, which is the `Node.js` package manager:

```
sudo apt-get install npm
```

### 2. You will also need to install `MySQL`. 

```
sudo apt-get install mysql
```

### 3. Then, you will need to clone the **speak** repository. 

```
git clone https://github.com/CSE442-SPEAK/speak.git
```

### 4. Once you have the repository on your local machine, the next step is make sure you are on the `develop` branch:

```
git checkout develop
```

### 5. In your local copy of the `speak` repository, maneuver to the `speak_api` folder:

```
cd speak_api
```

### 6. Install `npm` dependencies for `speak_api`.

```
npm install
```

Then, run:

```
npm run
```

### 7. Still in your local copy of the `speak` repository, **in a separate terminal** maneuver to the `speak-frontend` folder:

```
cd speak-frontend
```

### 8. Install `npm` dependencies for `speak-frontend`:

```
npm install
```

Then, run:

```
npm run

Congratulations! You have successfully deployed **speak**!

