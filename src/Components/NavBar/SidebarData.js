import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as VscIcon from "react-icons/vsc";
// import * as FiIcon from "react-icons/fi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FontAwesomeIcon icon={faHome} className="mr-2" />,
    cName: "nav-text",
  },
  {
    title: "My Booking",
    path: "/my_booking",
    icon: <FontAwesomeIcon icon={faBook} className="mr-2" />,
    cName: "nav-text",
  },
  {
    title: "My Inbox",
    path: "/my_inbox",
    icon: <FontAwesomeIcon icon={faInbox} className="mr-2" />,
    cName: "nav-text",
  },
  {
    title: " Saved ",
    path: "/saved",
    icon: <FontAwesomeIcon icon={faSave} className="mr-2" />,
    cName: "nav-text",
  },
  {
    title: " Help Center ",
    path: "/help_center",
    icon: <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />,
    cName: "nav-text",
  },
  {
    title: " Partner with us ",
    path: "/partner_us",
    icon: <FontAwesomeIcon icon={faHandshake} className="mr-1" />,
    cName: "nav-text",
  },
  {
    title: " Contact us",
    path: "/contact_us",
    icon: <FontAwesomeIcon icon={faPhoneVolume} className="mr-1" />,
    cName: "nav-text",
  },
];
