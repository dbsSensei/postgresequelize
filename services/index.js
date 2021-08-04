exports.createData = async (Model, data) => {
  try {
    const results = await Model.create(data);
    return results;
  } catch (err) {
    throw err;
  }
};

exports.getSpecificData = async (Model, spec, include) => {
  try {
    const results = await Model.findAll({ where: spec, include });
    return results;
  } catch (err) {
    throw err;
  }
};

exports.getAllData = async (Model, exclude, include) => {
  try {
    const results = await Model.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", ...exclude],
      },
      where: { deleted: false },
      include,
    });
    return results;
  } catch (err) {
    throw err;
  }
};

exports.deleteData = async (Model, spec) => {
  try {
    await Model.update({ deleted: true }, { where: spec });
  } catch (err) {
    throw err;
  }
};
