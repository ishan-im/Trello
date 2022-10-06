# Build Trello clone with React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


<img width="960" alt="Screenshot 2022-10-06 153626" src="https://user-images.githubusercontent.com/76674591/194286174-5165cd09-e194-4016-aa28-b2ed6b036c07.png">


## Getting Started

**Create New Project**

```cd
npx create-react-app trello
cd trello
```

**Clone the repository**



```
git clone https://github.com/ishan-im/Trello.git 
```


**And open the project in your code editor**

***

## Dependencies

In this project we used:

* [Redux](https://redux.js.org/) : for state management of the app
* [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) : for horizontal and vertical drop-down of cards
* [shortid](https://www.npmjs.com/package/shortid) : to generate unique ids
* [lodash.throttle:](https://www.npmjs.com/package/lodash.throttle) : to handle arrays and functions
* [react-icons](https://react-icons.github.io/react-icons/) : for icons

```
npm install --save redux react-redux react-beautiful-dnd lodash.throttle shortid
```

***

## Start

**Now go to your project directory and start the React development server**

```
cd directory
npm start
```
***

***Now this should be your project structure**

```

├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── components
    |── lib
    │── App.js 
    |── App.css
    ├── index.css
    ├── index.js
    └── styles
        
```

***

* In the **Components** Directory we will manage all our reusable components
* We will use **lib** directory as **storage** and **state management**
* We will maintain all our styles in **styles** directory. For styles we will use **css-modules**. If you want to know about **css-modules** [click here](https://css-tricks.com/css-modules-part-1-need/)


***

* In the **lib** directory we have two files **seed.js** and **store.js**

* In store file we will create **reducers** to create new List and Cards. Cards with **drag-and-drop** features.

* Each list and cards has unique ids.

* With our reducers in place we can create the store. Let's also persist the store so that our lists and cards are not discarded each time. To save the state we subscribe to store changes with store.subscribe, we call store.getState() to get the current state, we serialize it to JSON and we save it in the localStorage. Then when the app loads we read the state from the localStorage, deserialize it and create the store.


* We will initially insert some data in seed.js file and dispatch some actions to create some lists and  cards.


***


* Components directory has all the building blocks to create new Lists and cards.




This Project is deployed in vercel and it's [live link](https://trello-phi.vercel.app/)










