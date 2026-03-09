const MusicModels = require("../Models/musicasModels");

function ListAllMusics(req, res) {
  try {
    const musicas = MusicModels.ListAllMusics();
    res.status(200).json(musicas);
  } catch (error) {
    res.status(500).json({
      mensagem: "erro ao listar produtos",
      error: error.message,
    });
  }
}

function SearchId(req, res) {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        mensagem: "id Invalido, deve ser Um numero inteiro",
      });
    }
    const musica = MusicModels.SearchId(id);

    if (musica) {
      res.status(200).json(musica);
    } else {
      res.status(404).json({
        mensagem: `Produto com Id${id} não encontrado`,
      });
    }
  } catch (error) {
    res.status(500).json({
      mensagem: "erro ao buscar musica",
      error: error.message,
    });
  }
}

function CreateMusic(req, res) {
  try {
    const { nomemusica, autor, link } = req.body;

    if (!nomemusica || !autor || !link) {
      return res.status(400).json({
        mensagem: " Os campos de nomemusica, autor e link são obrigatorias",
      });
    }

    const NewMusic = MusicModels.CreateMusic({
      nomemusica,
      autor,
      link,
    });
    res.status(201).json(NewMusic);
  } catch (error) {
    res.status(500).json({
      mensagem: "erro ao criar Musica",
      error: error.message,
    });
  }
}

function uptadeMusic(req, res) {
  try {
    const id = parseInt(req.params.id);
    const { nomemusica, autor, link } = req.body;

    if (isNaN(id)) {
      return res.status(400).json({
        mensagem: "Id invalido",
      });
    }

    if (!nomemusica || !autor || !link) {
      return res.status(400).json({
        mensagem: "Todos os campos são obrigatorios",
      });
    }

    const musicUpdate = MusicModels.uptadeMusic(id, {
      nomemusica,
      autor,
      link,
    });

    if (musicUpdate) {
      return res.status(200).json(musicUpdate);
    } else {
      return res.status(404).json({
        mensagem: `Produto com ID ${id} não encontrado`,
      });
    }
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao atualizar musica",
      erro: erro.message,
    });
  }
}

function deletMusic(req, res) {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        mensagem: "ID inválido",
      });
    }

    const delet = MusicModels.deletMusic(id);

    if (delet) {
      return res.status(200).json({
        mensagem: `Musica com ID ${id} removida`,
      });
    } else {
      return res.status(404).json({
        mensagem: `Musica com ID ${id} não encontrada`,
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao deletar musica",
      erro: erro.message,
    });
  }
}

function SearchMusicName(req, res) {
  try {
    const { nomemusica } = req.params;

    if (!nomemusica) {
      return res.status(400).json({
        mensagem: "Nome da música é obrigatório",
      });
    }

    const musica = MusicModels.SearchMusicName(nomemusica);

    if (musica) {
      return res.status(200).json(musica);
    } else {
      return res.status(404).json({
        mensagem: `Música "${nomemusica}" não encontrada`,
      });
    }
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao buscar música pelo nome",
      erro: erro.message,
    });
  }
}

module.exports = {
    ListAllMusics,
    SearchId,
    SearchMusicName,
    deletMusic,
    uptadeMusic,
    CreateMusic,
}