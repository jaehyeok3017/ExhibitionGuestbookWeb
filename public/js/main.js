// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import { getStorage, ref, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpA-96RaFs2f4dbRPCsnFD5bJmXz6USVA",
    authDomain: "guestbook-53531.firebaseapp.com",
    projectId: "guestbook-53531",
    storageBucket: "guestbook-53531.appspot.com",
    messagingSenderId: "592728051180",
    appId: "1:592728051180:web:a4b566751d2ddcf99884c9",
    measurementId: "G-E9K6GGBVXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage();
const storageRef = ref(storage, 'images/');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

function sortName(f1, f2) {
    return Number(f2.name.replace('images/','').replace('_','').replace('.png','')) - Number(f1.name.replace('_','').replace('.png',''))
}

async function ffff(list) {
    for (let o of list) {
        let item = await delay(o)
        document.getElementById('asdf').innerHTML = document.getElementById('asdf').innerHTML + '<img class="CardBox" src="'+item+'"/>';

    }
}

function delay(item) {
    return getDownloadURL(item)
}


setInterval(() => {
    let urlList = []
    document.getElementById('asdf').innerHTML = '';
    //let rNum = getRandomIntInclusive(0,2);
    listAll(storageRef).then( (res) => {
       let imageList = res.items
        imageList.sort(sortName)
        console.log(imageList)
        let iner ='';


        ffff(imageList);


    }).catch((err) => {
        console.log(err)
    })

}, 1000 * 60 * 3)
console.log(1111)
