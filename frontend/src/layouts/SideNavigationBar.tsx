import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoFreebsdDevil } from "react-icons/io";
import menuData, { MenuDataItem } from "../data/sideNavMenuData";
import { useTranslation } from "react-i18next";
import Toggle from "../ui/ToggleLanguage";
import { RiMenuFold4Fill, RiMenuFold3Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import {
  SideNavContainer,
  Hero,
  HeroHeading,
  ListIems,
  ToggleIconContainer,
  variants,
} from "../styles/sideNavigationBar/sideNavStyles";

export default function SideNavigationBar() {
  const { t } = useTranslation();
  const [toggleNav, setToggleNav] = useState(false);

  const handelToggleIconClick = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <>
      <ToggleIconContainer>
        <motion.div
          initial={{ rotate: 0, scale: 1 }}
          animate={
            toggleNav ? { rotate: 360, x: 225, y: -15 } : { rotate: 0, x: 0 }
          }
          transition={{ duration: 0.3 }}
        >
          {toggleNav ? (
            <RiMenuFold3Fill
              size={30}
              color="#1363df"
              onClick={handelToggleIconClick}
            />
          ) : (
            <RiMenuFold4Fill
              size={30}
              color="#1363df"
              onClick={handelToggleIconClick}
            />
          )}
        </motion.div>
      </ToggleIconContainer>

      <SideNavContainer
        className={toggleNav ? "overlay" : ""}
        animate={toggleNav ? "visible" : ""}
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <Hero>
          <IoLogoFreebsdDevil size={50} color="#1363DF" />
          <HeroHeading>{t("appName")}</HeroHeading>
        </Hero>

        <Toggle />

        {menuData.map((item: MenuDataItem, i: number) => {
          return (
            <ListIems
              key={item.title}
              style={i === menuData.length - 1 ? { marginTop: "auto" } : {}}
              role="menuitem"
              aria-label={item.title}
              onClick={item.onClick}
            >
              <Link
                to={item.path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {React.cloneElement(item.icon, {
                  size: 25,
                  "aria-hidden": true,
                })}
                <p>{t(item.title)}</p>
              </Link>
            </ListIems>
          );
        })}
      </SideNavContainer>
    </>
  );
}
