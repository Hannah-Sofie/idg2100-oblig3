// Parts of this code is from Sebastian Haugen oblig 2
const { MissionCard } = require("../../models/cardSchema");

// Gets all cards
const getAllCards = async (req, res) => {
  try {
    const cards = await MissionCard.find();
    return res.status(200).json(cards);
  } catch (err) {
    return res
      .status(500)
      .json({ error: `Error getting cards: ${err.message}` });
  }
};

// Gets a single card
const getCard = async (req, res) => {
  try {
    const card = await MissionCard.find({
      "card-id": req.params.cardId,
    });
    if (card) {
      res.status(200).json(card);
    } else {
      res.status(404).json({ error: "Card not found" });
    }
  } catch (err) {
    res.status(500).json({ error: `Error getting card: ${err.message}` });
  }
};

// To create a new card
const createCard = async (req, res) => {
  try {
    const newCard = new MissionCard({
      "card-id": req.body["card-id"],
      "card-type": req.body["card-type"],
      "card-category": req.body["card-category"],
      "card-name": req.body["card-name"],
      "card-description": req.body["card-description"],
      "card-details": req.body["card-details"],
    });
    const savedCard = await newCard.save();
    res
      .status(201)
      .json({ message: "Card created successfully", card: savedCard });
  } catch (err) {
    res.status(500).json({ error: `Error creating card: ${err.message}` });
  }
};

// To update a card
const updateCard = async (req, res) => {
  try {
    // Update the card with the corresponding card ID
    const updatedCard = await MissionCard.updateOne(
      { "card-id": req.params.cardId },
      {
        $set: {
          "card-type": req.body["card-type"],
          "card-category": req.body["card-category"],
          "card-name": req.body["card-name"],
          "card-description": req.body["card-description"],
          "card-details": req.body["card-details"],
        },
      }
    );

    res.status(200).json(updatedCard);
  } catch (err) {
    res.status(500).json({ error: `Error updating card: ${err.message}` });
  }
};

// To delete a card
const deleteCard = async (req, res) => {
  try {
    // Delete card with the corresponding ID
    await MissionCard.deleteOne({ "card-id": req.params.cardId });
    res.status(200).json({ message: "Card deleted" });
  } catch (err) {
    res.status(500).json({ error: `Error deleting card: ${err.message}` });
  }
};

module.exports = {
  getAllCards,
  getCard,
  createCard,
  updateCard,
  deleteCard,
};
