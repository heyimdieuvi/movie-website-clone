import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import necessary functions from Firebase Storage
import { storage } from "../config/firebase"

const uploadFile = async (file) => {
  console.log(file); 

  const storageRef = ref(storage, file.name); // Create a reference to where you want to store the file
  const response = await uploadBytes(storageRef, file); // Upload the file

  const downloadURL = await getDownloadURL(response.ref); // Get the download URL of the uploaded file
  return downloadURL;
};

export default uploadFile; 