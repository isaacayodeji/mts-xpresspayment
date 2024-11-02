import { ThemeConfig } from "antd";

export const getThemeConfig = (): ThemeConfig | undefined => {
  return {
    token: {
      colorPrimary: "#003700",
    },
    components: {
      Steps: {
        controlItemBgActive: "#006F01",
        colorPrimary: "#006F01",
        colorText: "#ffffff",
        colorFillContent: "#D9D9D9",
        colorTextDescription: "#ffffff"
      },
      Radio: {
        colorBorder: "#C4C4C4"
      },
      Checkbox: {
        colorBorder: "#C4C4C4"
      },
      Menu: {
        itemSelectedBg: "#076806",
        // itemSelectedColor: "#ffffff",
        itemBorderRadius: 5,
        // itemColor: "#ffffff",
        // subMenuItemBg: "#003700",
        // itemHoverColor: "#006f01",
        // controlHeightLG: 50,
        // subMenuItemBorderRadius: 20,
        // lineWidth: 0,
      },
      Table: {
        colorTextHeading: "#000",
        fontWeightStrong: 700,
        fontSize: 12,
      },
      Select: {
        controlHeight: 48
      },
      Tabs: {
        horizontalItemPadding: "12px 25px!important"
      },
      Popconfirm: {
        colorWarning: "red"
      },
      Modal: {
        borderRadiusLG: 5
      }, 
      Input: {
        colorPrimaryHover: "#c4c4c4"
      }
    }
  };
};
