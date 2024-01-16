import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import getMetaData from 'metadata-scraper';
import { MongoClient } from "mongodb";


const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};


const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "";

// Create a new client and connect to MongoDB
const client = new MongoClient(uri);


// Reference to the 'chrome' collection
const chromeTabsCollection = collection(db, 'chrome');

// Function to fetch data from the 'chrome' collection
const fetchData = async () => {
  try {
    const tabsSnapshot = await getDocs(chromeTabsCollection);

    tabsSnapshot.forEach((doc) => {
      // Run the function and handle any errors
      run(doc.data()).catch(console.dir);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Call the fetchData function
fetchData();



// get description and save it to mongodb

async function run(doc) {
  try {
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("browser-history");
    const haiku = database.collection("chrome");

//  description of the url
    const baseUrl = new URL(doc['url']).origin;
    const description = await getMetaData(baseUrl);
    const doc_with_description = {
      url:doc['url'],
      description:description['description']
    }
    
    // Insert the defined document into the "haiku" collection
    const result = await haiku.insertOne(doc_with_description);

  } finally {
     // Close the MongoDB client connection
    // await client.close();
  }
}




