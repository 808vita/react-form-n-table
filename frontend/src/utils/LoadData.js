export const postFormData = async (data) => {
  // localStorage.removeItem("feedbackFormData");
  // let feedbackFormData = JSON.parse(localStorage.getItem("feedbackFormData"));
  // localStorage.setItem("feedbackFormData", JSON.stringify([data._id]));

  try {
    let feedbackFormData = await JSON.parse(
      localStorage.getItem("feedbackFormData")
    );
    console.log(feedbackFormData);
    if (!feedbackFormData) {
      data.key = new Date();
      localStorage.setItem("feedbackFormData", JSON.stringify([data]));

      feedbackFormData = await JSON.parse(
        localStorage.getItem("feedbackFormData")
      );
      console.log(feedbackFormData);

      return;
    }
    console.log(feedbackFormData, "oof not null");
    data.key = new Date();
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
    let feedbackFormData = await JSON.parse(
      localStorage.getItem("feedbackFormData")
    );
    console.log(feedbackFormData);
    if (feedbackFormData) {
      return feedbackFormData;
    }
  } catch (error) {
    console.log(error);
  }
};
