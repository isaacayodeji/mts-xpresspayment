"use client";
import React, { useEffect, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { classNames } from "../utils/classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import {
  ImUserTie,
  ImHome,
  ImEye,
  ImRocket,
  ImBubbles3,
  ImPhone,
} from "react-icons/im";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import AOS from "aos";
import { Button, Drawer, Radio, Space } from "antd";
import type { DrawerProps } from "antd/es/drawer";
import { Divider, Menu, Switch } from "antd";
import type { MenuProps, MenuTheme } from "antd/es/menu";
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  CreditCardOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

//! ANTD MENU FUNCTIONS - START
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <a className="text-[20px] font-semibold py-2" href="/" target="_self">
      Home
    </a>,
    "1",
    <ImHome />
  ),
  getItem(
    <a
      className="text-[20px] font-semibold py-2"
      href="/company"
      target="_self"
    >
      Company
    </a>,
    "2",
    <TeamOutlined />
  ),

  getItem(
    <a
      className="text-[20px] font-semibold py-2"
      href="/products/agency-banking"
      target="_self"
    >
      Agency banking
    </a>,
    "7",
    <AppstoreOutlined />
  ),
  getItem(
    <a
      className="text-[20px] font-semibold py-2"
      href="/products/digital-banking"
      target="_self"
    >
      Digital banking
    </a>,
    "8",
    <LinkOutlined />
  ),
  getItem(
    <a
      className="text-[20px] font-semibold py-2"
      href="/card-services"
      target="_self"
    >
      Card Services
    </a>,
    "9",
    <CreditCardOutlined />
  ),
  getItem(
    <a
      className="text-[20px] font-semibold py-2"
      href="/merchant-business"
      target="_self"
    >
      Merchant Business
    </a>,
    "10",
    <MailOutlined />
  ),
  // getItem(
  //   <a className="text-[20px] font-semibold py-2" href="/signIn" target="_self">
  //     SignIn
  //   </a>,
  //   "11",
  //   <UserOutlined />
  // ),
];
//! ANTD MENU FUNCTIONS END

export const TopBar = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownOpen = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.stopPropagation();
    // console.log("open");
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = (e: any) => {
    e.stopPropagation();
    // console.log("close");
    setIsDropdownOpen(false);
  };

  //! ANTD HAMBURGER MENU FUNCTIONS - START
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  //! END

  //! ANTD MENU - START
  const [mode, setMode] = useState<"vertical" | "inline">("inline");
  const [theme, setTheme] = useState<MenuTheme>("light");

  const [fix, setFix] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 392) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  return (
    <>
      <div className="sticky top-0 z-10 w-full bg-white h-18 md:h-20">
        <header
          id="navbar"
          className="flex justify-between items-center h-20 md:h-20  2xl:w-[100%] xl:mx-auto px-2 sm:px-10 py-4 md:py-4 "
        >
          {/* //! MTS LOGOO */}
          <a href="/">
            <img
              src={"/images/logo.png"}
              alt=""
              // height={100}
              // width={200}
              // className={"-mt-8"}
              className="w-[150px] sm:w-[200px]"
            />
          </a>
          <div>
            <NavigationMenu.Root
              id="menu"
              className="relative flex w-full justify-center items-center max-lg:hidden"
            >
              <NavigationMenu.List className="NavigationMenuList ">
                {/* company dropdown */}
                {/* <NavigationMenu.Item>
                <NavigationMenu.Trigger
                  onPointerEnter={(e) => handleDropdownOpen(e)}
                  onMouseLeave={(e) => handleDropdownClose(e)}
                  className="NavigationMenuTrigger"
                >
                  <span>Company</span>
                  <CaretDownIcon className="CaretDown" aria-hidden />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content
                  onPointerEnter={(e) => handleDropdownOpen(e)}
                  onMouseLeave={(e) => handleDropdownClose(e)}
                  className="NavigationMenuContent"
                >
                  <ul className="List w-[500px]">
                    <ListItem
                      title={
                        <div className="mt-[2px] text-[14px] font-semibold">
                          Home
                        </div>
                      }
                      href="/"
                      icon={
                        <ImHome className="text-black bg-gray-300 p-1 rounded-full font-extrabold text-[20px]" />
                      }
                    />
                    <ListItem
                      title={
                        <div className="mt-[2px] text-[14px] font-semibold">
                          Vision
                        </div>
                      }
                      href="/#vision"
                      icon={
                        <ImEye className="text-black bg-orange-300 p-1 rounded-full font-extrabold text-[20px]" />
                      }
                    />
                    <ListItem
                      title={
                        <div className="mt-[2px] text-[14px] font-semibold">
                          Mission
                        </div>
                      }
                      href="/#mission"
                      icon={
                        <ImRocket className="text-black bg-green-300 p-1 rounded-full font-extrabold text-[20px]" />
                      }
                    />
                    <ListItem
                      title={
                        <div className="mt-[2px] text-[14px] font-semibold">
                          Testimonials
                        </div>
                      }
                      href="/#testimonials"
                      icon={
                        <ImBubbles3 className="text-black bg-blue-300 p-1 rounded-full font-extrabold text-[20px]" />
                      }
                    />
                    <ListItem
                      title={
                        <div className="mt-[2px] text-[14px] font-semibold">
                          Contact Us
                        </div>
                      }
                      href="/#contact"
                      icon={
                        <ImPhone className="text-black bg-pink-300 p-1 rounded-full font-extrabold text-[20px]" />
                      }
                    />
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item> */}

                {/* Company */}
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="NavigationMenuLink no-underline"
                    href="/company"
                  >
                    Company
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                {/* digital Banking */}
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="NavigationMenuLink"
                    href="/products/digital-banking"
                  >
                    Digital Banking
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                {/* Agency Banking */}
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="NavigationMenuLink"
                    href="/products/agency-banking"
                  >
                    Agency Banking
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                {/* SERVICES */}
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="NavigationMenuLink"
                    href="/card-services"
                  >
                    Card Services
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                {/* BUSINESS */}
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="NavigationMenuLink"
                    href="/merchant-business"
                  >
                    Merchant Business
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Indicator className="NavigationMenuIndicator">
                  <div className="Arrow" />
                </NavigationMenu.Indicator>
              </NavigationMenu.List>

              <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
                <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
              </div>
            </NavigationMenu.Root>
          </div>

          {/* SIGN IN */}
          {/* <button
            onClick={() => (window.location.href = "/signIn")}
            className={classNames(
              "font-medium p-[8px] h-[40px] rounded-lg text-white text-[14px] ",
              "bg-green-800 w-[100px] max-lg:hidden"
            )}
          >
            Sign In
          </button> */}

          {/* //! DRAWER START*/}
          <Space className="block lg:hidden">
            <Button
              className="text-black focus:text-[#2cac5d!important]  focus:border-[#2cac5d!important]"
              onClick={showDrawer}
            >
              <AiOutlineMenu size={19} />
            </Button>
          </Space>
          <Drawer
            // title="Drawer with extra actions"
            placement={placement}
            // width={500}
            onClose={onClose}
            open={open}
            extra={
              <Space>
                {/* <Button onClick={onClose}>Cancel</Button>
              <Button className="text-red-500" onClick={onClose}>
                OK
              </Button> */}
              </Space>
            }
          >
            <Menu
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode={mode}
              theme={theme}
              items={items}
            />
          </Drawer>
          {/* //! DRAWER END */}
        </header>
        {isDropdownOpen && (
          <div
            className=" absolute h-[100vh] w-[100vw] -mt-[20px] bg-green-200 -z-[10]"
            onMouseLeave={handleDropdownClose}
          />
        )}
      </div>
    </>
  );
};

// eslint-disable-next-line react/display-name
const ListItem = React.forwardRef(
  ({ className, children, title, icon, ...props }: any, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            "focus:shadow-[0_0_0_2px] focus:shadow-violet7  hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="flex gap-2">
            <div>{icon}</div>
            <div className="flex flex-col">
              <span className="font-semibold ">{title}</span>
              <span className=" text-sm leading-[1.4]">{children}</span>
            </div>
          </div>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);
