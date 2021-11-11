import './Board.css';

const files = [
  {
    title: "mastermovies nichtrijder",
    name: "mastermovies-nichtrijder",
    sounds: [
      {
        title: "Boeit me geen flikker",
        name: "boeit-me-geen-flikker.mp3",
      },
      {
        title: "Gruwelijk",
        name: "dit-stukje-is-gruwelijk.mp3",
      },
      {
        title: "Effe lekker peukie rooke",
        name: "effe-lekker-peukie-rooke-(44100-hz).mp3",
      },
      {
        title: "We gaan zometeen wel roken he?",
        name: "en-we-gaan-zometeen-wel-roken-he.mp3",
      },
      {
        title: "Homies for life",
        name: "ik-check-je-later.-homies-for-life.-later.mp3",
      },
      {
        title: "Ja",
        name: "ja.mp3",
      },
      {
        title: "Je moet echt ff normaal doen",
        name: "klootviool-luister-es.-je-moet-echt-effe-normaal-doen-joh.mp3",
      },
      {
        title: "Mijn chickie heb toch ook",
        name: "klootviool-mijn-chickie-heb-toch-ook-een-auto-nodig.mp3",
      },
      {
        title: "Kloteviolen",
        name: "kloteviolen.mp3",
      },
      {
        title: "We gaan paffen in de auto",
        name: "komop-we-gaan-paffen-in-de-auto.mp3",
      },
      {
        title: "Bats met je moeder",
        name: "maar-ik-bats-wel-met-je-moeder-(44100-hz).mp3",
      },
      {
        title: "Met je hoofd",
        name: "met-je-hoofd.mp3",
      },
      {
        title: "Michael wat is dit",
        name: "michael-wat-is-dit-(44100-hz).mp3",
      },
      {
        title: "Moaan wat heb ik da gemist zeg",
        name: "moaan-wat-heb-ik-da-gemist-zeg.mp3",
      },
      {
        title: "Naah, dan tonie, klootviool",
        name: "naah-dan-tonie-klootviool.-later.mp3",
      },
      {
        title: "Vet goed nummer opzetten",
        name: "vet-goed-nummer-opzetten-michael-(44100-hz).mp3",
      },
      {
        title: "Wat mot je kutt",
        name: "wat-mot-je-kut.mp3",
      },
    ],
  },
];

const Board = () => {
  return (
    <>
      {files.map((file) => {
        return (
          <section>
            <h2>{file.title}</h2>
            <hr />
            <div className="buttons">
              {file.sounds.map((sound) => {
                return <button>{sound.title}</button>;
              })}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Board;
