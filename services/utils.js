exports.requiredKeyChecker = (body, requiredKeys) => {
  const existsKey = Object.keys(body);
  requiredKeys = requiredKeys.filter((key) => !existsKey.includes(key));

  if (requiredKeys.length !== 0) {
    let message = "";
    requiredKeys.map((key) => (message += `${key}, `));
    throw {
      statusCode: 400,
      message: message.replace(/,(?=[^,]*$)/, "") + "cannot be empty",
    };
  }
};
