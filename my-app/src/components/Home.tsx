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
    const [socialIssue2, setsocialIssue2] = useState<string | null>(null);
    const [socialIssue3, setsocialIssue3] = useState<string | null>(null);
    const [socialIssue4, setsocialIssue4] = useState<string | null>(null);
    const [popCulture, setpopCulture] = useState<string | null>(null);
    const [popCulture2, setpopCulture2] = useState<string | null>(null);
    const [popCulture3, setpopCulture3] = useState<string | null>(null);
    const [popCulture4, setpopCulture4] = useState<string | null>(null);
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

                const docRef2 = doc(db, 'socialissue2', 'Giu5Z6McxFRkvqIvRsSo');
                const docSnap2 = await getDoc(docRef2);

                if (docSnap2.exists()) {
                    const fieldValue = docSnap2.data()['Giu5Z6McxFRkvqIvRsSo'];
                    //console.log(docSnap.data()); // document data check
                    //console.log(fieldValue); // field value check
                    setsocialIssue2(fieldValue);
                } else {
                    console.log('broken document');
                }

                const docRef3 = doc(db, 'socialissue3', 'xefcNfU7VDI1VsWLG8Pa');
                const docSnap3 = await getDoc(docRef3);

                if (docSnap3.exists()) {
                    const fieldValue = docSnap3.data()['xefcNfU7VDI1VsWLG8Pa'];
                    //console.log(docSnap.data()); // document data check
                    //console.log(fieldValue); // field value check
                    setsocialIssue3(fieldValue);
                } else {
                    console.log('broken document');
                }

                const docRef4 = doc(db, 'socialissue4', '9SeMyeqLjyiKaSCDqsXV');
                const docSnap4 = await getDoc(docRef4);

                if (docSnap4.exists()) {
                    const fieldValue = docSnap4.data()['9SeMyeqLjyiKaSCDqsXV'];
                    //console.log(docSnap.data()); // document data check
                    //console.log(fieldValue); // field value check
                    setsocialIssue4(fieldValue);
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

                const popdocRef2 = doc(db, 'popculture2', 'qddaLWZrSy5f5H7yUxmK');
                const popdocSnap2 = await getDoc(popdocRef2);

                if (popdocSnap2.exists()) {
                    const fieldValue = popdocSnap2.data()['qddaLWZrSy5f5H7yUxmK'];
                    setpopCulture2(fieldValue);
                } else {
                    console.log('broken document');
                }

                const popdocRef3 = doc(db, 'popculture3', 'BUSN3e0bal3OlVEoDs0Y');
                const popdocSnap3 = await getDoc(popdocRef3);

                if (popdocSnap3.exists()) {
                    const fieldValue = popdocSnap3.data()['BUSN3e0bal3OlVEoDs0Y'];
                    setpopCulture3(fieldValue);
                } else {
                    console.log('broken document');
                }

                const popdocRef4 = doc(db, 'popculture4', 'DS3M89hGQhEkbhaGZUqq');
                const popdocSnap4 = await getDoc(popdocRef4);

                if (popdocSnap4.exists()) {
                    const fieldValue = popdocSnap4.data()['DS3M89hGQhEkbhaGZUqq'];
                    setpopCulture4(fieldValue);
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
                {socialIssue2 !== null ? (
                    <p>{socialIssue2}</p>
                ) : (
                    <p>loading...</p>
                )}
                {socialIssue3 !== null ? (
                    <p>{socialIssue3}</p>
                ) : (
                    <p>loading...</p>
                )}
                {socialIssue4 !== null ? (
                    <p>{socialIssue4}</p>
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
                <h3>All Eyes on Rafa by Wednesday</h3>
            <h2>Pop Culture Analysis</h2>
                    {popCulture !== null ? (
                        <p>{popCulture}</p>
                    ) : (
                        <p>loading...</p>
                    )}
                    {popCulture2 !== null ? (
                        <p>{popCulture2}</p>
                    ) : (
                        <p>loading...</p>
                    )}
                    {popCulture3 !== null ? (
                        <p>{popCulture3}</p>
                    ) : (
                        <p>loading...</p>
                    )}
                    {popCulture4 !== null ? (
                        <p>{popCulture4}</p>
                    ) : (
                        <p>loading...</p>
                    )}
            <h2>References</h2>
            <a href="https://www.un.org/en/genocideprevention/genocide.shtml" className="custom-link">https://www.un.org/en/genocideprevention/genocide.shtml</a>
            <a href="https://news.un.org/en/story/2024/03/1147976"className="custom-link">https://news.un.org/en/story/2024/03/1147976</a>
            <a href="https://ground.news/interest/israeli-palestinian-conflict"className="custom-link">https://ground.news/interest/israeli-palestinian-conflict</a>
            <p id="custom-link">Arab American News Issue #1845 (June 19-25, 2021)</p>
            <a href="https://thisweekinpalestine.com/the-palestine-sunbird/" className="custom-link">https://thisweekinpalestine.com/the-palestine-sunbird/</a>
        </div>
    );
}

export default Home;