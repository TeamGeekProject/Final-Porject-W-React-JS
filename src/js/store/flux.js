import { db } from "../firebase/firebase";
import {
  getDocs,
  collection,
  addDoc,
  orderBy,
  query,
} from "firebase/firestore";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      collection: [],
      formMessageSuccess: "",
      formMessageError: "",
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
            setStore({ formMessageSuccess: "Your message has been sent!" });

            setStore({ formMessageError: "" });

            setStore({ collection: [input, ...getStore().collection] });
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
            setStore({ formMessageError: error });
          });
      },

      //   loadData: async () => {
      //     const store = getStore();
      //     // const agenda = "";
      //     // const response = await fetch(
      //     //   `https://assets.breatheco.de/apis/fake/contact/agenda/${agenda}`
      //     // );
      //     // const data = await response.json();

      //     let data = [
      //       {
      //         id: 1,
      //         full_name: "Alejandro",
      //       },
      //     ];
      //     setStore({ contacts: data });
      //   },
      // createContact: async (input) => {
      //   // console.log(input);
      //   const store = getStore();
      //   const user = store.user;
      //   await fetch("https://assets.breatheco.de/apis/fake/contact/", {
      //     method: "POST",
      //     body: JSON.stringify({
      //       full_name: input.full_name,
      //       email: input.email,
      //       agenda_slug: store.agenda_slug,
      //       address: input.address,
      //       phone: input.phone,
      //     }),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   })
      //     .then((response) => response.json())
      //     .then((data) => {
      //       // console.log(data);
      //       data.msg
      //         ? (setStore({ formMessageError: data.msg }),
      //           setStore({ formMessageSuccess: "" }))
      //         : (setStore({
      //             formMessageSuccess: "Your message has been sent!",
      //           }),
      //           setStore({ formMessageError: "" }),
      //           setStore({ contacts: [...store.contacts, data] }));
      //     })
      //     .catch((error) => {
      //       console.log("error");
      //     });
      // },
      // deleteContact: async (id, index) => {
      //   const store = getStore();
      //   const user = store.user;
      //   const contacts = store.contacts.filter((item, i) => i !== index);
      //   await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
      //     method: "DELETE",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   })
      //     .then(setStore({ contacts: contacts }))
      //     .catch((error) => console.log("error"));
      // },
      // updateContact: async (input, contactID, index) => {
      //   const store = getStore();
      //   const contacts = store.contacts;
      //   await fetch(
      //     `https://assets.breatheco.de/apis/fake/contact/${contactID}`,
      //     {
      //       method: "PUT",
      //       body: JSON.stringify({
      //         full_name: input.full_name,
      //         email: input.email,
      //         agenda_slug: store.agenda_slug,
      //         address: input.address,
      //         phone: input.phone,
      //       }),
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     }
      //   )
      //     .then((response) => response.json())
      //     .then((data) => {
      //       data.msg
      //         ? (setStore({ formMessageError: data.msg }),
      //           setStore({ formMessageSuccess: "" }))
      //         : (setStore({ formMessageSuccess: "Message was succesful" }),
      //           setStore({ formMessageError: "" }),
      //           (contacts[index] = data),
      //           setStore({ contacts: [...contacts] }));
      //     })
      //     .catch((error) => console.log(error));
      // },
    },
  };
};

export default getState;
