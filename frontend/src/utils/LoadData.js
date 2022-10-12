export const postFormData = async (data) => {
  // localStorage.removeItem("feedbackFormData");
  // let feedbackFormData = JSON.parse(localStorage.getItem("feedbackFormData"));
  // localStorage.setItem("feedbackFormData", JSON.stringify([data._id]));

  try {
    let feedbackFormData = JSON.parse(localStorage.getItem("feedbackFormData"));
    console.log(feedbackFormData);
    if (!feedbackFormData) {
      localStorage.setItem("feedbackFormData", JSON.stringify([data]));

      feedbackFormData = JSON.parse(localStorage.getItem("feedbackFormData"));
      console.log(feedbackFormData);

      return;
    }
    console.log(feedbackFormData, "oof not null");

    feedbackFormData.push(data);
    localStorage.setItem("feedbackFormData", JSON.stringify(feedbackFormData));

    // setNotification({ msg: "Added to storage", type: "info" });

    // feedbackFormData = JSON.parse(localStorage.getItem("feedbackFormData"));
    // console.log(feedbackFormData);
  } catch (error) {
    console.log(error);
  }
};

export const getFormData = async () => {
  // localStorage.removeItem("feedbackFormData");
  // let feedbackFormData = JSON.parse(localStorage.getItem("feedbackFormData"));
  // localStorage.setItem("feedbackFormData", JSON.stringify([data._id]));

  try {
    let feedbackFormData = JSON.parse(localStorage.getItem("feedbackFormData"));
    console.log(feedbackFormData);
    if (feedbackFormData) {
      return feedbackFormData;
    }
  } catch (error) {
    console.log(error);
  }
};
