const displayLoading = () => {
  const loader = document.querySelector("#loading");
  loader.classList.add("display");
  setTimeout(() => {
    loader.classList.remove("display");
  }, 5000);
};

const hideLoading = () => {
  const loader = document.querySelector("#loading");
  loader.classList.remove("display");
};

module.exports = { displayLoading, hideLoading };
