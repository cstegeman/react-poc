import "./Board.css";

const files = [
  {
    "title": "mastermovies a-beam",
    "category": "mastermovies-a-beam",
    "sounds": [
      {
        "title": "6 maande",
        "name": "6-maande.mp3"
      },
      {
        "title": "Bitterballen van kots",
        "name": "bitterballen-van-kots.mp3"
      },
      {
        "title": "Bleitikabaa",
        "name": "bleitikibaa.mp3"
      },
      {
        "title": "Dit is het plan",
        "name": "dit-is-het-plan.mp3"
      },
      {
        "title": "Hier AB je negergun",
        "name": "hier-ab-je-negergun.mp3"
      },
      {
        "title": "Ik ben een kok",
        "name": "ik-ben-een-kok.mp3"
      },
      {
        "title": "Kerstman",
        "name": "kerstman.mp3"
      },
      {
        "title": "Nee geen zin",
        "name": "nee-geen-zin.mp3"
      },
      {
        "title": "Niks mee te maken",
        "name": "niks-mee-te-maken.mp3"
      },
      {
        "title": "Nokke nou kut",
        "name": "nokke-nou-kut.mp3"
      },
      {
        "title": "Ultr moluculaire",
        "name": "ultra-moleculaire.mp3"
      },
      {
        "title": "Wat een kutmuziek",
        "name": "wat-een-kutmuziek.mp3"
      },
      {
        "title": "WC eend",
        "name": "wc-eend.mp3"
      }
    ]
  },
  {
    "title": "mastermovies arie-en-bastiaan",
    "category": "mastermovies-arie-en-bastiaan",
    "sounds": [
      {
        "title": "Boerrr",
        "name": "boerrrrr.mp3"
      },
      {
        "title": "Dildo te koop 50 euro",
        "name": "dildo-te-koop-50-euro.mp3"
      },
      {
        "title": "Dit hele land zit vol met buitenlanders",
        "name": "dit-hele-land-zit-vol-met-buitenlanders.mp3"
      },
      {
        "title": "Dude geef mij de Playboy",
        "name": "dude-geef-mij-de-playboy.mp3"
      },
      {
        "title": "En samen zijn wij 2 ongelofelijke flikkers",
        "name": "en-samen-zijn-wij-2-ongelofelijke-flikkers.mp3"
      },
      {
        "title": "Gisteravond was ie net iets groter",
        "name": "gisteravond-was-ie-net-iets-groter.mp3"
      },
      {
        "title": "Godverdomme!",
        "name": "godverdomme!.mp3"
      },
      {
        "title": "haaaaaaaaaaaaaaaaa",
        "name": "haaaaaaaaaaaaaaa.mp3"
      },
      {
        "title": "Hahaaaa",
        "name": "hahaaa-(44100-hz).mp3"
      },
      {
        "title": "He Adriaan ik zie de Dildo",
        "name": "he-adriaan-ik-zie-de-dildo.mp3"
      },
      {
        "title": "Heaumeau",
        "name": "heaumeau.mp3"
      },
      {
        "title": "Heb ik ook een grote dildo nodig",
        "name": "heb-ik-ook-een-grote-dildo-nodig.mp3"
      },
      {
        "title": "Hehe godverdomme",
        "name": "hehe-godverdomme.mp3"
      },
      {
        "title": "Ik heb gelezen dat schapen kankerverwekkend zijn",
        "name": "ik-heb-gelezen-dat-schapen-kankerverwekkend-zijn.mp3"
      },
      {
        "title": "Klootzak",
        "name": "klootzak.mp3"
      },
      {
        "title": "Mazzol",
        "name": "mazzol.mp3"
      },
      {
        "title": "Moeders kunnen helemaal geen heaumeau zijn",
        "name": "moeders-kunnen-helemaal-geen-heaumeau-zijn.mp3"
      },
      {
        "title": "Opbokke",
        "name": "opbokke.mp3"
      },
      {
        "title": "Pompe met die sub",
        "name": "pompe-met-die-subwoofer.mp3"
      },
      {
        "title": "Wat ben je toch een irritante Clown",
        "name": "wat-ben-je-toch-een-irritante-clown.mp3"
      },
      {
        "title": "Wat doe jij nou",
        "name": "wat-doe-jij-nou.mp3"
      },
      {
        "title": "Willen Arie en Bastiaan zich...",
        "name": "willen-arie-en-bastiaan-zich....mp3"
      }
    ]
  },
  {
    "title": "mastermovies nichtrijder",
    "category": "mastermovies-nichtrijder",
    "sounds": [
      {
        "title": "Boeit me geen flikker",
        "name": "boeit-me-geen-flikker.mp3"
      },
      {
        "title": "Gruwelijk",
        "name": "dit-stukje-is-gruwelijk.mp3"
      },
      {
        "title": "Effe lekker peukie rooke",
        "name": "effe-lekker-peukie-rooke-(44100-hz).mp3"
      },
      {
        "title": "We gaan zometeen wel roken he?",
        "name": "en-we-gaan-zometeen-wel-roken-he.mp3"
      },
      {
        "title": "Homies for life",
        "name": "ik-check-je-later.-homies-for-life.-later.mp3"
      },
      {
        "title": "Ja",
        "name": "ja.mp3"
      },
      {
        "title": "Je moet echt ff normaal doen",
        "name": "klootviool-luister-es.-je-moet-echt-effe-normaal-doen-joh.mp3"
      },
      {
        "title": "Mijn chickie heb toch ook",
        "name": "klootviool-mijn-chickie-heb-toch-ook-een-auto-nodig.mp3"
      },
      {
        "title": "Kloteviolen",
        "name": "kloteviolen.mp3"
      },
      {
        "title": "We gaan paffen in de auto",
        "name": "komop-we-gaan-paffen-in-de-auto.mp3"
      },
      {
        "title": "Bats met je moeder",
        "name": "maar-ik-bats-wel-met-je-moeder-(44100-hz).mp3"
      },
      {
        "title": "Met je hoofd",
        "name": "met-je-hoofd.mp3"
      },
      {
        "title": "Michael wat is dit",
        "name": "michael-wat-is-dit-(44100-hz).mp3"
      },
      {
        "title": "Moaan wat heb ik da gemist zeg",
        "name": "moaan-wat-heb-ik-da-gemist-zeg.mp3"
      },
      {
        "title": "Naah, dan tonie, klootviool",
        "name": "naah-dan-tonie-klootviool.-later.mp3"
      },
      {
        "title": "Vet goed nummer opzetten",
        "name": "vet-goed-nummer-opzetten-michael-(44100-hz).mp3"
      },
      {
        "title": "Wat mot je kutt",
        "name": "wat-mot-je-kut.mp3"
      }
    ]
  }
];

const context = new AudioContext();
// let speed = 1;
// let backwards = false;

const Board = () => {
  return (
    <>
      {files.map((file, index) => {
        return (
          <section key={index}>
            <h2>{file.title}</h2>
            <hr />
            <div className="buttons">
              {file.sounds.map((sound, i) => {
                return (
                  <button key={i} onClick={() => play(file.category, sound.name)}>
                    {sound.title}
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
};

function play(category, name) {
  fetch(`/audio/${category}/${name}`)
    .then((response) => response.arrayBuffer())
    .then((response) => context.decodeAudioData(response, onDecoded));
}

function onDecoded(buffer) {
  const bufferSource = context.createBufferSource();
  // reverseChannels(buffer, backwards);
  bufferSource.buffer = buffer;
  bufferSource.connect(context.destination);
  // bufferSource.playbackRate.value = speed;
  bufferSource.start();
}

export default Board;
