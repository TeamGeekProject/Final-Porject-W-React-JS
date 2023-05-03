import { db } from "../firebase/firebase";
import {
  getDocs,
  collection,
  addDoc,
  orderBy,
  query,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      collection: [],
      formMessageSuccess: "",
      formMessageError: "",
      numberOfMessages: 0,
    },

    actions: {
      loadSong: async () => {
        const songsCollection = collection(db, "songs");
        //i need to order the collection by rating
        const q = query(songsCollection, orderBy("createdAt", "desc"));

        const songList = await getDocs(q);
        const songArray = songList.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setStore({ collection: songArray });
      },

      addSong: async (input) => {
        const songsCollection = collection(db, "songs");

        await addDoc(songsCollection, {
          urlImage: input.urlImage,
          title: input.title,
          artist: input.artist,
          rating: input.rating,
          urlYoutube: input.urlYoutube,
          urlAppleMusic: input.urlAppleMusic,
          urlSpotify: input.urlSpotify,
          createdAt: new Date(),
        })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            setStore({ formMessageSuccess: "Your song was added!" });

            setStore({ formMessageError: "" });

            setStore({ collection: [input, ...getStore().collection] });
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
            setStore({ formMessageError: error });
          });
      },

      updateSong: async (input, id) => {
        const store = getStore();
        const collection = store.collection;
        const songIndex = collection.findIndex((item) => item.id === id);
        collection[songIndex] = input;
        setStore({ collection: [...collection] });

        await updateDoc(doc(db, "songs", id), {
          urlImage: input.urlImage,
          title: input.title,
          artist: input.artist,
          rating: input.rating,
          urlYoutube: input.urlYoutube,
          urlAppleMusic: input.urlAppleMusic,
          urlSpotify: input.urlSpotify,
          createdAt: input.createdAt,
        })
          .then(() => {
            console.log("Document successfully updated!");
            setStore({ formMessageSuccess: "Your song was updated!" });
            setStore({ formMessageError: "" });
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
            setStore({ formMessageError: error });
          });
      },

      deleteSong: async (id) => {
        const store = getStore();
        const collection = store.collection;
        const songIndex = collection.findIndex((item) => item.id === id);
        collection.splice(songIndex, 1);
        setStore({ collection: [...collection] });

        await deleteDoc(doc(db, "songs", id))
          .then(() => {
            console.log("Document successfully deleted!");
            setStore({ formMessageSuccess: "Your song was deleted!" });
            setStore({ formMessageError: "" });
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error deleting document: ", error);
            setStore({ formMessageError: error });
          });
      },

      sendMessage: async (input) => {
        const messagesCollection = collection(db, "messages");

        await addDoc(messagesCollection, {
          full_name: input.full_name,
          email: input.email,
          phone: input.phone,
          message: input.message,
          createdAt: new Date(),
        })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            setStore({ formMessageSuccess: "Your message was sent!" });

            setStore({ numberOfMessages: getStore().numberOfMessages + 1 });

            setStore({ formMessageError: "" });
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
            setStore({ formMessageError: error });
          });
      },

      loadNumberOfmessages: async () => {
        const messagesCollection = collection(db, "messages");
        const q = query(messagesCollection, orderBy("createdAt", "desc"));

        const messageList = await getDocs(q).catch((error) => {
          console.log("Error getting documents: ", error);
        });

        const messageArray = messageList.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStore({ numberOfMessages: messageArray.length });
      },
    },
  };
};

export default getState;
