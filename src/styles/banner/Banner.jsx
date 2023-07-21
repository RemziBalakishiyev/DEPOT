import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { colors, fontFamilies } from "../theme/theme";

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  width: "94%",
  height: "500px",
  marginInline: "0px 100px",
  padding: "0px 0px",
  backgroundColor: colors.light_gray,
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));
export const BannerSection = styled(Box)(({ theme, src }) => ({
  width: "100%",
  height: "500px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
}));

export const BannerImage = styled("img")(({ theme, src }) => ({
  objectFit: "cover",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const BannerContent = styled(Box)(({ theme, src }) => ({
  marginBottom: "40px",
  marginTop: "auto",
}));

export const SliderLine = styled("div")(({ theme, isShow, index }) => ({
  width: "100px",
  height: "3px",
  transform: `translateY(${(index + 1) * 30}px)`,
  position: "absolute",
  left: "10px",
  top: "30%",
  background: "#000",
  zIndex: isShow ? "1" : "-1",
  "&:before": {
    content: `'${index + 1}'`,
    display: "inline-block",
    position: "absolute",
    top: "-25px",
    left: "0",
    fontSize: "1rem",
    fontFamily: fontFamilies.catamaran,
  },
}));

export const SliderLineContainer = styled("div")(
  ({ theme, isShow, index }) => ({
    width: "100px",
    height: "3px",
    display: "flex",
  })
);

export const BannerTitle = styled(Typography)(({ theme, src }) => ({
  fontFamily: fontFamilies.catamaran,
  fontSize: "2.4rem",
  color: "#000",
  letterSpacing: "4px",
  fontWeight: "900",
}));

export const BannerBody = styled(Typography)(({ theme, src }) => ({
  fontFamily: fontFamilies.catamaran,
  fontSize: "1.2rem",
  color: colors.md_light_gray,
  width: "70%",
}));
