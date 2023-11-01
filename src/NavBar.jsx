import React, { useState } from "react";
import userIcon from "./assets/user-icon.png";
import { GoSearch } from "react-icons/go";

import { FaArrowLeft, FaPlus, FaRegBell } from "react-icons/fa6";

const NavBar = () => {
  const [serach, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="navbarContainer">
      <div className="navbarItemsContainer">
        <div className="userDetailsContainer">
          <img className="profileImage" src={userIcon} alt="profile_image" />
          <div className="userInfoContinaer">
            <div>Partner code : IA234522</div>
            <div>Referral code : IA234522</div>
          </div>
        </div>
        <div className="arrowLeftBtnContainer">
          <FaArrowLeft fill="#FEFEFE" />
        </div>
        <div className="serachContanier">
          <GoSearch />
          <input
            type="text"
            value={serach}
            placeholder="Search Clients, Properties, Services"
            onChange={handleSearch}
          />
        </div>
        <div
          onClick={() => {
            console.log("add button cliked");
          }}
          className="addButton"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
          >
            <path
              d="M16.5 4.54297C13.4728 4.57949 10.5798 5.79829 8.43904 7.93904C6.29829 10.0798 5.07949 12.9728 5.04297 16C5.07949 19.0272 6.29829 21.9202 8.43904 24.061C10.5798 26.2017 13.4728 27.4205 16.5 27.457C19.5272 27.4205 22.4202 26.2017 24.561 24.061C26.7017 21.9202 27.9205 19.0272 27.957 16C27.9205 12.9728 26.7017 10.0798 24.561 7.93904C22.4202 5.79829 19.5272 4.57949 16.5 4.54297ZM23.0469 16.8184H17.3184V22.5469H15.6816V16.8184H9.95312V15.1816H15.6816V9.45312H17.3184V15.1816H23.0469V16.8184Z"
              fill="white"
            />
          </svg>
          <span className="addButtonText">Add</span>
        </div>
        <div>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
          >
            <rect width="54" height="54" rx="10" fill="white" />
            <rect
              x="0.5"
              y="0.5"
              width="53"
              height="53"
              rx="9.5"
              stroke="#0A3A67"
              stroke-opacity="0.15"
            />
            <path
              d="M24.0735 33.6665V34.9999C24.0735 36.0607 24.4575 37.0782 25.1409 37.8283C25.8243 38.5785 26.7512 38.9999 27.7177 38.9999C28.6842 38.9999 29.6111 38.5785 30.2945 37.8283C30.9779 37.0782 31.3619 36.0607 31.3619 34.9999V33.6665M25.2883 17.6665C25.2883 16.9593 25.5443 16.281 25.9999 15.7809C26.4555 15.2808 27.0735 14.9999 27.7178 14.9999C28.3621 14.9999 28.9801 15.2808 29.4357 15.7809C29.8913 16.281 30.1472 16.9593 30.1472 17.6665C31.5422 18.3906 32.7314 19.5176 33.5874 20.9269C34.4433 22.3362 34.9338 23.9746 35.0061 25.6665V29.6665C35.0975 30.4955 35.365 31.2893 35.787 31.984C36.2089 32.6788 36.7736 33.2551 37.4356 33.6665H18C18.6619 33.2551 19.2266 32.6788 19.6486 31.984C20.0706 31.2893 20.338 30.4955 20.4294 29.6665V25.6665C20.5018 23.9746 20.9922 22.3362 21.8482 20.9269C22.7041 19.5176 23.8933 18.3906 25.2883 17.6665Z"
              stroke="#0A3A67"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="54" height="54" rx="10" fill="white" />
            <rect
              x="0.5"
              y="0.5"
              width="53"
              height="53"
              rx="9.5"
              stroke="#0A3A67"
              stroke-opacity="0.15"
            />
            <path
              d="M25 27.0003C25 27.6587 25.2378 28.2902 25.6611 28.7558C26.0845 29.2214 26.6586 29.483 27.2573 29.483C27.8559 29.483 28.4301 29.2214 28.8534 28.7558C29.2767 28.2902 29.5145 27.6587 29.5145 27.0003C29.5145 26.3418 29.2767 25.7103 28.8534 25.2447C28.4301 24.7791 27.8559 24.5176 27.2573 24.5176C26.6586 24.5176 26.0845 24.7791 25.6611 25.2447C25.2378 25.7103 25 26.3418 25 27.0003Z"
              stroke="#0A3A67"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25 36.5179C25 37.1763 25.2378 37.8078 25.6611 38.2734C26.0845 38.739 26.6586 39.0006 27.2573 39.0006C27.8559 39.0006 28.4301 38.739 28.8534 38.2734C29.2767 37.8078 29.5145 37.1763 29.5145 36.5179C29.5145 35.8594 29.2767 35.2279 28.8534 34.7623C28.4301 34.2967 27.8559 34.0352 27.2573 34.0352C26.6586 34.0352 26.0845 34.2967 25.6611 34.7623C25.2378 35.2279 25 35.8594 25 36.5179Z"
              stroke="#0A3A67"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25 17.4827C25 18.1412 25.2378 18.7727 25.6611 19.2383C26.0845 19.7039 26.6586 19.9654 27.2573 19.9654C27.8559 19.9654 28.4301 19.7039 28.8534 19.2383C29.2767 18.7727 29.5145 18.1412 29.5145 17.4827C29.5145 16.8243 29.2767 16.1928 28.8534 15.7272C28.4301 15.2616 27.8559 15 27.2573 15C26.6586 15 26.0845 15.2616 25.6611 15.7272C25.2378 16.1928 25 16.8243 25 17.4827Z"
              stroke="#0A3A67"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
