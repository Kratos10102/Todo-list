

exports.getDate = function() {
  let today = new Date();

  let options = {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: false
  };
  return formattedDate = today.toLocaleString("en-US", options);
}
