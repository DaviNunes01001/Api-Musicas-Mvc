let musicas = [
  {
    id: 1,
    nomemusica: "Pay no Rent",
    autor: "Turnpike Troubadours",
    link: "https://www.youtube.com/watch?v=sieOSRVQh3Q&list=RDsieOSRVQh3Q&start_radio=1",
  },
  {
    id: 2,
    nomemusica: "Ain't Worth the Trouble",
    autor: "Turnpike Troubadours",
    link: "https://www.youtube.com/watch?v=TseY8RpsXwY&list=RDTseY8RpsXwY&start_radio=1",
  },
  {
    id: 3,
    nomemusica: "The Bad Help",
    autor: "The Black Angels",
    link: "https://www.youtube.com/watch?v=b9hBd4MwPcA&list=RDb9hBd4MwPcA&start_radio=1",
  },
  {
    id: 4,
    nomemusica: "You Can't Make Old Friends",
    autor: "Kenny Rogers & Dolly Parton",
    link: "https://www.youtube.com/watch?v=UaNGtgYwSsU&list=RDUaNGtgYwSsU&start_radio=1",
  },
];

let proximoID = 5;

function ListAllMusics() {
  return musicas;
}

function SearchId(id) {
  // função que retorna o id conforme a condição
  return musicas.find((m) => m.id === id);
}

function SearchMusicName(nomeid) {
     const nome = nomeid.toLowerCase()
     return musicas.find(m => m.nomemusica.toLowerCase() === nome);
}

function CreateMusic(dados) {
  const newMusic = {
    id: proximoID++,
    nomemusica: dados.nomemusica,
    autor: dados.autor,
    link: dados.link,
  };
  // enpurra a nova musica no musicas(array)
  musicas.push(newMusic);
  return newMusic;
}

function uptadeMusic(id, dados) {
  const indice = musicas.findIndex((m) => m.id === id);
  if (indice === -1) {
    return null;
  }
  musicas[indice] = {
    id,
    nomemusica: dados.nomemusica,
    autor: dados.autor,
    link: dados.link,
  };
  return musicas[indice];
}

function deletMusic(id) {
  const indice = musicas.findIndex((m) => m.id === id);
  if (indice === -1) {
    return false;
  }
  musicas.splice(indice, 1);

  return true;
}

module.exports = {
    ListAllMusics,
    SearchId,
    SearchMusicName,
    CreateMusic,
    uptadeMusic,
    deletMusic,
};