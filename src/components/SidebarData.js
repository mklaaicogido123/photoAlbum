import React from "react";
import { FaPhotoVideo } from "react-icons/fa";
import { AiFillHome, AiOutlineCloudUpload } from "react-icons/ai";

export const SidebarData = [
  // {
  //   title: 'Overview',
  //   path: '/overview',
  //   icon: <AiIcons.AiFillHome />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: 'Users',
  //       path: '/overview/users',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Revenue',
  //       path: '/overview/revenue',
  //       icon: <IoIcons.IoIosPaper />
  //     }
  //   ]
  // },
  {
    title: "Home",
    path: "/home",
    icon: <AiFillHome />,
  },
  {
    title: "Gallery",
    path: "/gallery",
    icon: <FaPhotoVideo />,
  },
  {
    title: "Upload",
    path: "/imageUpload",
    icon: <AiOutlineCloudUpload />,
  },
];
