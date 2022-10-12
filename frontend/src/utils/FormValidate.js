export default function validateInfo(values) {
  let errors = {};

  if (!values.customerName) {
    errors.customerName = "Customer Name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.phone) {
    errors.phone = "Phone Number is required";
  } else if (values.phone.length < 10 || values.phone.length > 10) {
    errors.phone = "Phone Number needs to be 10 characters";
  }

  const forQuesValidation = (ques, values) => {
    //gets errors variable outside of scope
    if (!values[ques]) {
      errors[ques] = "Requires a selection";
    }
  };

  const questions = ["rateService", "rateClean", "rateBeverage", "rateExp"];
  questions.map((ques) => forQuesValidation(ques, values));

  return errors;
}
