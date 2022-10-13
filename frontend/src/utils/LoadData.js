export const postFormData = async (data, navigate, setSubmitting) => {
  // try {
  //   let feedbackFormData = await JSON.parse(
  //     localStorage.getItem("feedbackFormData")
  //   );
  //   console.log(feedbackFormData);
  //   if (!feedbackFormData) {
  //     data.key = new Date();
  //     localStorage.setItem("feedbackFormData", JSON.stringify([data]));

  //     feedbackFormData = await JSON.parse(
  //       localStorage.getItem("feedbackFormData")
  //     );
  //     console.log(feedbackFormData);

  //     return;
  //   }
  //   console.log(feedbackFormData, "oof not null");
  //   data.key = new Date();
  //   feedbackFormData.push(data);
  //   localStorage.setItem("feedbackFormData", JSON.stringify(feedbackFormData));
  // } catch (error) {
  //   console.log(error);
  // }

  data.phone = Number(data.phone);

  try {
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json;

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      console.log("oof", json);
      navigate("/success");
      setSubmitting(false);
      return;
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const getFormData = async () => {
  // try {
  //   let feedbackFormData = await JSON.parse(
  //     localStorage.getItem("feedbackFormData")
  //   );
  //   console.log(feedbackFormData);
  //   if (feedbackFormData) {
  //     return feedbackFormData;
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  try {
    const response = await fetch("/api/feedback", {
      method: "GET",
    });
    const json = await response.json;

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      console.log("oof", json);
      return json;
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteFormData = async (deleteItems, refreshData) => {
  if (!deleteItems.length > 0) {
    console.log("please select items");
    return;
  }
  try {
    let feedbackFormData = await JSON.parse(
      localStorage.getItem("feedbackFormData")
    );
    console.log(feedbackFormData);
    let newFeedbackData;
    if (feedbackFormData) {
      newFeedbackData = feedbackFormData.filter(
        (item) => !deleteItems.includes(item.key)
      );
      localStorage.setItem("feedbackFormData", JSON.stringify(newFeedbackData));
      refreshData();
    }
  } catch (error) {
    console.log(error);
  }
};
