import React from "react";
import business1 from "../images/business1.jpg";
import "./business.css";

const Business: React.FC = () => {
  return (
    <>
      <div>
        <img className="business" src={business1} alt="Business Banner" />
      </div>
      <div>
        <h1 className="h1">Serving business owners like you</h1>
        <p className="p1">
          Your big plans require a good strategy to help you reach your goals. When it comes to business loans, Robertson Banking Company's team delivers personalized service and creates a lending program to fit your specific needs. Choose from a variety of loans and competitive terms. We'll keep things moving with an easy application process and decisions made locally.
        </p>
        <p className="p2">
          We offer loans and lines of credit for various types of businesses.
        </p>
        <h2 className="tit1">Agricultural Loans</h2>
        <p className="p1">
          If you're a farmer in Alabama, you can get a loan to purchase land, build a new facility on your farm, raise a crop, or purchase equipment or livestock.
        </p>
        <h2 className="tit2">Church Loans</h2>
        <p className="p1">
          We support local ministries in various ways with the right type of financing. You can renovate a sanctuary, create a new activity center, purchase a new vehicle for transportation, and more.
        </p>
        <h2 className="tit3">Commercial Real Estate Loans</h2>
        <p className="p1">
          Whether you want to purchase a building or refinance your commercial real estate loan to make improvements, we're ready to work with you.
        </p>
        <h2 className="tit4">Construction Loans</h2>
        <p className="p1">
          These loans are ideal for building a new facility or adding to an existing one. Choose from various terms tailored to your plans.
        </p>
        <h2 className="tit5">Lines of Credit</h2>
        <p className="p1">
          Whenever you need access to temporary working capital for seasonal cash flow, the line of credit is the answer. This works like a credit card, so you can write a check for any amount up to your limit and continue to have access to credit as you make monthly payments.
        </p>
        <h2 className="tit6">Term Loans</h2>
        <p className="p1">
          These fixed-rate loans give you funds in one lump-sum payment so you can make any purchases that help you grow your business.
        </p>
      </div>
    </>
  );
};

export default Business;
