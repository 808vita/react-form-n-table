export const processData = (feedbackFormData) => {
  let processedTableData = [];
  feedbackFormData.map((item, index) =>
    processedTableData.push({ ...item, key: index })
  );
  console.log(processedTableData);
  return processedTableData;
};
