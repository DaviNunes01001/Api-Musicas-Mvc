const express = require("express");
const router = express.Router();

const MusicController = require("../Controllers/musicasControllers");

// listar todas
router.get("/", MusicController.ListAllMusics);

// buscar por nome
router.get("/nome/:nomemusica", MusicController.SearchMusicName);

// buscar por id
router.get("/:id", MusicController.SearchId);

// criar
router.post("/", MusicController.CreateMusic);

// atualizar
router.put("/:id", MusicController.uptadeMusic);

// deletar
router.delete("/:id", MusicController.deletMusic);

module.exports = router;