import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { countries } from "../utils/countries";
const CountrySelector = ({ handleChange }) => {
  const [selectedCountry, setSeletedCountry] = useState("IN");

  const handleClick = (countryData) => {
    console.log(countryData);
    setSeletedCountry(countryData.countryCode);

    const countryCode = countryData.countryCode;

    // console.log({ target: { name: "countryName", value: countryName } });

    handleChange({ target: { name: "countryCode", value: countryCode } });
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline border form-select"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <ReactCountryFlag
          countryCode={selectedCountry}
          svg
          style={{
            width: "2rem",
            height: "2rem",
          }}
          title={selectedCountry}
        />
      </button>
      <ul
        className="dropdown-menu"
        style={{ maxHeight: "280px", overflowY: "auto" }}
      >
        {/* <li>
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{
              width: "2rem",
              height: "2rem",
            }}
            title="US"
          />
          ;
        </li> */}
        {countries.map((country) => (
          <li key={`${country.iso2_cc}_${country.e164_cc}_emoji`}>
            <div
              className="d-flex flex-wrap align-items-center"
              onClick={() =>
                handleClick({
                  countryCode: country.iso2_cc,
                })
              }
            >
              <ReactCountryFlag
                alt={country.iso2_cc}
                countryCode={country.iso2_cc}
                svg
                style={{
                  width: "2em",
                  height: "2em",
                }}
              />
              <p style={{ fontSize: "0.75rem" }}> (+{country.e164_cc})</p>
              <p style={{ fontSize: "0.75rem" }}> {"-" + country.iso2_cc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountrySelector;
