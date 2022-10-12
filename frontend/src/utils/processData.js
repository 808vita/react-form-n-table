import _ from "lodash";

export const processData = (feedbackFormData) => {
  let processedTableData = [];
  feedbackFormData.map((item, index) =>
    processedTableData.push({ ...item, key: index })
  );
  console.log(processedTableData);
  return processedTableData;

  //   for (let i = 0; i < 100; i++) {
  //     data.push({
  //       key: i,
  //       name: `Edrward ${i}`,
  //       email: `oof@oof${i}.oof`,
  //       phone: `58${i}${i + 1}`,
  //       countryCode: "IN",
  //       rateBeverage: "Fair",
  //       rateClean: "Bad",
  //       rateExp: "Excellent",
  //       rateService: "Good",
  //     });
  //   }
};
