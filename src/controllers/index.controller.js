const indexCtrl = {};

indexCtrl.index = (req, res) => {
  res.status(200).json({
    message: "this my index for my api express made with OOP",
  });
};

indexCtrl.github = (req, res) => {
  res.redirect("https://github.com/lucabecci");
};

module.exports = indexCtrl;
