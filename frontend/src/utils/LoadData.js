export const postFormData = async (data, navigate, setSubmitting) => {
  data.phone = Number(data.phone);

  try {
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

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

export const getFormData = async (setTableData) => {
  try {
    const response = await fetch("/api/feedback", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      console.log("oof", json);
      setTableData(json);
      // return json;
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
    const response = await fetch("/api/feedback/delete", {
      method: "DELETE",
      body: JSON.stringify({ deleteItems }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      console.log("oof", json);
      refreshData();
      return;
    }
  } catch (error) {
    console.log("error", error);
  }
};
