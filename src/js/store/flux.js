const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      collection: [
        {
          urlImage:
            "https://i1.sndcdn.com/artworks-joTcOLeuIZh1wF96-GTkmzg-t500x500.jpg",
          title: "Calm Down",
          artist: "Selena Gomez",
          rating: 5,
          urlYoutube: "https://www.youtube.com/watch?v=eJO5HU_7_1w",
          urlAppleMusic:
            "https://music.apple.com/us/album/calm-down-single/1640501237",
          urlSpotify: "https://open.spotify.com/track/0WtM2NBVQNNJLh6scP13H8",
        },
        {
          urlImage:
            "https://i1.sndcdn.com/artworks-joTcOLeuIZh1wF96-GTkmzg-t500x500.jpg",
          title: "Calm Down",
          artist: "Selena Gomez",
          rating: 3,
          urlYoutube: "https://www.youtube.com/watch?v=eJO5HU_7_1w",
          urlAppleMusic:
            "https://music.apple.com/us/album/calm-down-single/1640501237",
          urlSpotify: "https://open.spotify.com/track/0WtM2NBVQNNJLh6scP13H8",
        },
        {
          urlImage:
            "https://i1.sndcdn.com/artworks-joTcOLeuIZh1wF96-GTkmzg-t500x500.jpg",
          title: "Calm Down",
          artist: "Selena Gomez",
          rating: 4,
          urlYoutube: "https://www.youtube.com/watch?v=eJO5HU_7_1w",
          urlAppleMusic:
            "https://music.apple.com/us/album/calm-down-single/1640501237",
          urlSpotify: "https://open.spotify.com/track/0WtM2NBVQNNJLh6scP13H8",
        },
      ],
      formMessageSuccess: "",
      formMessageError: "",
    },
    actions: {
      loadData: async () => {
        const store = getStore();
        const agenda = store.agenda_slug;
        const response = await fetch(
          `https://assets.breatheco.de/apis/fake/contact/agenda/${agenda}`
        );
        const data = await response.json();
        setStore({ contacts: data });
      },

      loadSongs: async () => {
        const store = getStore();
        const agenda = store.agenda_slug;
        const response = await fetch(
          `https://assets.breatheco.de/apis/fake/contact/agenda/${agenda}`
        );
        const data = await response.json();
        setStore({ contacts: data });
      },
      createContact: async (input) => {
        // console.log(input);
        const store = getStore();
        const user = store.user;
        await fetch("https://assets.breatheco.de/apis/fake/contact/", {
          method: "POST",
          body: JSON.stringify({
            full_name: input.full_name,
            email: input.email,
            agenda_slug: store.agenda_slug,
            address: input.address,
            phone: input.phone,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            data.msg
              ? (setStore({ formMessageError: data.msg }),
                setStore({ formMessageSuccess: "" }))
              : (setStore({
                  formMessageSuccess: "Your message has been sent!",
                }),
                setStore({ formMessageError: "" }),
                setStore({ contacts: [...store.contacts, data] }));
          })
          .catch((error) => {
            console.log("error");
          });
      },
      deleteContact: async (id, index) => {
        const store = getStore();
        const user = store.user;
        const contacts = store.contacts.filter((item, i) => i !== index);
        await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(setStore({ contacts: contacts }))
          .catch((error) => console.log("error"));
      },
      updateContact: async (input, contactID, index) => {
        const store = getStore();

        const contacts = store.contacts;

        await fetch(
          `https://assets.breatheco.de/apis/fake/contact/${contactID}`,
          {
            method: "PUT",
            body: JSON.stringify({
              full_name: input.full_name,
              email: input.email,
              agenda_slug: store.agenda_slug,
              address: input.address,
              phone: input.phone,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            data.msg
              ? (setStore({ formMessageError: data.msg }),
                setStore({ formMessageSuccess: "" }))
              : (setStore({ formMessageSuccess: "Message was succesful" }),
                setStore({ formMessageError: "" }),
                (contacts[index] = data),
                setStore({ contacts: [...contacts] }));
          })

          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
