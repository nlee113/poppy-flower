import React, {useState, useEffect} from 'react';
import '../Home.css';
import firebase, { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, doc, getDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAX4gGwIwpoAUZeSnKkrqk73SOGX0d0jWc",
    authDomain: "poppy-flower-15b14.firebaseapp.com",
    projectId: "poppy-flower-15b14",
    storageBucket: "poppy-flower-15b14.appspot.com",
    messagingSenderId: "127362457777",
    appId: "1:127362457777:web:c99d436602ad9421768290",
    measurementId: "G-9EG00864GQ"
};

// create reference to db

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


const Home = () => {
    const [socialIssue, setsocialIssue] = useState<string | null>(null);
    const [popCulture, setpopCulture] = useState<string | null>(null);
    const [imageUrl1, setImageUrl1] = useState('');
    const [imageUrl2, setImageUrl2] = useState('');
    const [imageUrl3, setImageUrl3] = useState('');

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const docRef = doc(db, 'socialissue', 'Sc4yHaVxnJnslnQMW7Ne');
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const fieldValue = docSnap.data()['Sc4yHaVxnJnslnQMW7Ne'];
                    //console.log(docSnap.data()); // document data check
                    //console.log(fieldValue); // field value check
                    setsocialIssue(fieldValue);
                } else {
                    console.log('broken document');
                }
                const popdocRef = doc(db, 'popculture', '8uUz8D0mx20Gc1KyP3hd');
                const popdocSnap = await getDoc(popdocRef);

                if (popdocSnap.exists()) {
                    const fieldValue = popdocSnap.data()['8uUz8D0mx20Gc1KyP3hd'];
                    setpopCulture(fieldValue);
                } else {
                    console.log('broken document');
                }
            } catch (error) {
                console.error('Error fetching social issue:', error);
            }
        };
        const fetchImage = async () => {
            try {
                // image 1
                // reference image in Firebase Storage
                const storageRef1 = ref(storage,'images/moldyorange.jpeg');
                // get the download URL
                const url1 = await getDownloadURL(storageRef1);
                // set the image URL in state
                setImageUrl1(url1);
                // image 2
                const storageRef2 = ref(storage,'images/rafah1.jpg');
                const url2 = await getDownloadURL(storageRef2);
                setImageUrl2(url2);
                // image 3
                const storageRef3 = ref(storage,'images/rafah2.jpg');
                const url3 = await getDownloadURL(storageRef3);
                setImageUrl3(url3);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };
        
        fetchDocuments();
        fetchImage();
    }, []);

    return (
        <div>
            <h1>Israeli-Palestinian Conflict</h1>
            <h2>Social Issue Overview</h2>
            {socialIssue !== null ? (
                <p>{socialIssue}</p>
            ) : (
                <p>loading...</p>
            )}
            <p id="free-palestine">Free Palestine</p>
            <h2>Intro to Pop Culture</h2>
                <div className="img-container1">
                    {imageUrl1 && (
                        <img className="img1" src={imageUrl1} alt="Image" />
                    )}
                </div>
                <h3>Moldy Orange by Alyssa</h3>
                <div className="img-container2">
                    {imageUrl2 && (
                        <img className="img2" src={imageUrl2} alt="Image" />
                    )}
                    {imageUrl3 && (
                        <img className="img2" src={imageUrl3} alt="Image" />
                    )}
                </div>
                <h3>All Eyes on Rafa By Wednesday</h3>
                <h2>Pop Culture Analysis</h2>
                {popCulture !== null ? (
                <p>{popCulture}</p>
            ) : (
                <p>loading...</p>
            )}
        </div>
    );
}

export default Home;