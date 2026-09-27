function getCurrentDate() {
  const date = new Date();

  const formattedDate = date.toISOString().split("T")[0];

  console.log(formattedDate);

  return formattedDate;
}

function getCurrentTime() {
  const time = new Date();

  const formattedTime = time.toTimeString().split(" ")[0];

  console.log(formattedTime);

  return formattedTime;
}

module.exports = {
  getCurrentDate,
  getCurrentTime,
};
