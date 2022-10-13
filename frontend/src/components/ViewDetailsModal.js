import { Button, Modal } from "antd";
import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
const ViewDetailsModal = ({ record }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  console.log(record);

  return (
    <>
      <Button onClick={showModal}>View Details</Button>
      <Modal
        cancelButtonProps={{ style: { display: "none" } }}
        title={`Feedback from ${record.customerName}`}
        open={isModalOpen}
        onOk={handleOk}
      >
        <div className="p-2 mb-3 border">
          <label className="form-label">Contact Details</label>
          <ReactCountryFlag
            countryCode={record.countryCode}
            svg
            style={{
              width: "2rem",
              height: "2rem",
            }}
            title={record.countryCode}
          />{" "}
          <h6>{record.email}</h6>
          <h6>{record.phone}</h6>
        </div>
        <div className="p-2 mb-3 border">
          <label className="form-label">
            Please rate the quality of the service you received from your host.
          </label>
          <h6>{record.rateService}</h6>
        </div>
        <div className="p-2 mb-3 border">
          <label className="form-label">Was our restaurant clean?</label>
          <h6>{record.rateClean}</h6>
        </div>
        <div className="p-2 mb-3 border">
          <label className="form-label">
            Please rate the quality of the beverage.
          </label>
          <h6>{record.rateBeverage}</h6>
        </div>
        <div className="p-2 mb-3 border">
          <label className="form-label">
            Please rate your overall dining experience.
          </label>
          <h6>{record.rateExp}</h6>
        </div>
      </Modal>
    </>
  );
};
export default ViewDetailsModal;
