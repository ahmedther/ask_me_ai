import React from "react";
import store from "../store/store";

import avatarImage from "../assets/images/boy.png";
import { AvatarImage } from "../styles/sideNavigationBar/sideNavStyles";
import { MdLogout } from "react-icons/md";
import { CiMemoPad } from "react-icons/ci";
import { MdOpenInNew } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { GoInfo } from "react-icons/go";
import { resetState } from "../store/conversationSlice";

export type MenuDataItem = {
  icon: React.ReactElement;
  title: string;
  path: string;
  onClick: () => void; // Optional onClick function for this item, defaults to undefined.
};

const handleNewConv = () => {
  store.dispatch(resetState());
};

const menuData: MenuDataItem[] = [
  {
    icon: <MdOpenInNew />,
    title: "newConversation",
    onClick: handleNewConv, //
    path: "/",
  },
  {
    icon: <CiMemoPad />,
    title: "terms",
    onClick: () => console.log("Terms Clicked"),
    path: "/",
  },
  {
    icon: <MdOutlinePrivacyTip />,
    title: "privacy",
    onClick: () => console.log("Privacy Clicked"),
    path: "/",
  },
  {
    icon: <IoIosHelpCircleOutline />,
    title: "help",
    onClick: () => console.log("Help Clicked"),
    path: "/",
  },
  {
    icon: <IoShareSocialOutline />,
    title: "contactUs",
    onClick: () => console.log("Contact Us Clicked"),
    path: "/",
  },
  {
    icon: <GoInfo />,
    title: "about",
    onClick: () => console.log("About Clicked"),
    path: "/",
  },
  {
    icon: <MdLogout />,
    title: "logout",
    onClick: () => console.log("Logout Clicked"),
    path: "/",
  },
  {
    icon: <AvatarImage src={avatarImage} />,
    title: "account",
    onClick: () => console.log("Account Clicked"),
    path: "/",
  },
];

export default menuData;
