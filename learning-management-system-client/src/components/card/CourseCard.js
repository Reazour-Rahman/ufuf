import React from "react";
import { Grid, Box, Typography, useTheme, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PlayCircleOutlined } from "@ant-design/icons";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { GrLocation } from "react-icons/gr";
import { FaBook, FaComment } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

import CardMedia from "@mui/material/CardMedia";

const BannerContainerStyle = styled("section")(({ theme }) => ({
  backgroundImage:
    'url("https://20093980.fs1.hubspotusercontent-na1.net/hubfs/20093980/raw_assets/public/saasweb/images/icons/banner-shape-1.jpg")',
  position: "relative",

  backgroundColor: "#320fa1",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
}));
const BannerPadding = {
  padding: {
    md: "185px 0 0px",
    sm: "145px 0 0px",
    xs: "130px 0 0px",
  },
};
const LayerOuter = styled("div")(({ theme }) => ({
  position: "absolute",
  right: "0",
  top: "0",
  bottom: "-70px",
  width: "50%",
}));
const LayerImage = styled("div")(({ theme }) => ({
  position: "absolute",
  left: "0",
  top: "100px",
  width: "1057px",
  height: "958px",
  backgroundImage:
    "url(https://f.hubspotusercontent30.net/hubfs/20093980/saasweb/big-shape-10.png)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom center",
  display: "initial",
}));
const AutoContainer = styled("div")(({ theme }) => ({
  position: "static",
  maxWidth: "90%",
  width: "1280px",
  margin: "0 auto",
}));
const H1 = styled("h1")(({ theme }) => ({
  color: "white",
  marginBottom: "28px",
  fontSize: "45px",
  lineHeight: "58px",
}));
const PlayIcon = {
  padding: "40px",
  textAlign: "center",
  fontSize: "24px",
  color: "#fff",
  backgroundColor: "#e654bd",
  boxShadow: "0px 11px 21.25px 3.75px rgb(45 5 156 / 65%)",
  borderRadius: "50%",
};
const Lay = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // justifyContent: 'space-between',
  gap: "10px",
  textDecoration: "underline",
  color: "white",
  marginTop: "38px",
}));
const Small = styled("small")(({ theme }) => ({
  color: theme.palette.common.white,
}));

const mystery = {
  display: {
    md: "block",
    sm: "none",
    xs: "none",
  },
};
const mysteryActive = {
  display: {
    md: "none",
    sm: "block",
    xs: "block",
  },
};

const CardImage = {
  zIndex: "500",
  position: "absolute",
  width: "470px",
  ...mystery,
};
const CardImageMobile = {
  width: "70%",
  ...mysteryActive,
};

const CourseCard = () => {
  const theme = useTheme();
  return (
    <>
      <BannerContainerStyle sx={{ ...BannerPadding }}>
        <LayerOuter sx={{ ...mystery }}>
          <LayerImage></LayerImage>
        </LayerOuter>
        <AutoContainer>
          <Grid
            container
            spacing={2}
            rowSpacing={8}
            sx={{ pb: { xs: 8, sm: 20 } }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <H1>
                Intelligent Business <br />
                Startup makes <br />
                Life Easier
              </H1>
              <Small>
                The most flexible way of combine practice and analyzing startup
                projects to maximize its effectiveness.
              </Small>
              <Lay>
                <IconButton style={{ ...PlayIcon }} aria-label="play">
                  <PlayCircleOutlined />
                </IconButton>
                <Small>
                  <strong>Watch the video</strong>
                </Small>
              </Lay>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}></Grid>
          </Grid>
        </AutoContainer>
      </BannerContainerStyle>

      <div>
        <div
          className=" hover:scale-105  duration-300  relative rounded-lg  sm:w-[370px] w-full mx-auto min-h-[420px]  h-full "
          style={{
            position: "relative",
            width: "370px",
            boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.07)",
            margin: "0 auto",
            minHeight: "420px",
            borderRadius: "5px",
            background: "#FFFFFF",
          }}
        >
          <div className="select-none  ">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                // justifyContent:'center',
                // background: "#EAECF0",
                padding: "10px 14px",
              }}
              className="flex items-center justify-center rounded-lg p-3 bg-[#EAECF0]"
            >
              <img
                src={
                  "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                }
                className=""
                style={{
                  width: "100%",
                  minHeight: "213px",
                  height: "100%",
                  borderRadius: "4px",
                  position: "relative",
                }}
                alt=""
              />

              {/* <StarFilled /> */}
              <p
                style={{
                  background: "#1EC902",
                  // background:
                  //   "linear-gradient(90.18deg, #7D23E0 -38.65%, #009EF7 62.68%)",
                  position: "absolute",
                  left: "20px",
                  top: "5px",
                  color: "white",

                  fontWeight: "600",
                  fontSize: "12px",
                  borderRadius: "2px",
                  padding: "5px 3px",
                }}
                className=""
              >
                Trending Course
              </p>

              {/* <StarFilled /> */}
              <AiOutlineHeart
                style={{
                  background: " rgba(0, 0, 0, 0.16)",
                  // background:
                  //   "linear-gradient(90.18deg, #7D23E0 -38.65%, #009EF7 62.68%)",
                  position: "absolute",
                  right: "20px",
                  top: "18px",
                  color: "white",

                  fontWeight: "600",
                  fontSize: "30px",
                  borderRadius: "2px",
                  padding: "5px 3px",
                }}
              />
            </div>

            <div
              style={{
                padding: "0px 22px",
              }}
              className="p-4 "
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                className="flex justify-between items-center  "
              >
                {/* <Link prefetch={false} href={slugUrl}> */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "30px",
                  }}
                >
                  <FaBook
                    style={{
                      color: "#5F2DED",
                      fontSize: "18px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      marginLeft: "5px",
                      color: "#53545B",
                    }}
                    className="text-[16px] font-[600] mt-1"
                  >
                    21 lessons
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <BsStopwatch
                    style={{
                      color: "#5F2DED",
                      fontSize: "18px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      marginLeft: "5px",
                      color: "#53545B",
                    }}
                    className="text-[16px] font-[600] mt-1"
                  >
                    1hr 30 min
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "600",
                  // lineHeight: "27px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis
              </p>

              <p
                style={{
                  fontSize: "18px",
                  color: "#5F2DED",
                  fontWeight: "600",
                  // lineHeight: "27px",
                }}
                className="text-[14px] my-1"
              >
                $32.00{" "}
                <span
                  style={{
                    color: "#C4C4C4",

                    fontSize: "16px",
                  }}
                >
                  /{" "}
                  <span
                    style={{
                      textDecorationLine: "line-through",
                    }}
                  >
                    $67.00
                  </span>
                </span>{" "}
                <span
                  style={{
                    color: "red",
                    marginLeft: "20px",
                    textDecorationLine: "line-through",
                  }}
                >
                  Free
                </span>
              </p>

              <hr />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                className="flex justify-between items-center  "
              >
                {/* <Link prefetch={false} href={slugUrl}> */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "30px",
                  }}
                >
                  <div
                    style={{
                      width: "35px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "35px",
                      borderRadius: "100%",
                      background: "#FFFFFF",
                      boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <img
                      src={
                        "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      }
                      className=""
                      style={{
                        width: "30px",

                        height: "30px",
                        borderRadius: "100%",
                      }}
                      alt=""
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      marginLeft: "5px",
                      color: "#53545B",
                    }}
                    className="text-[16px] font-[600] mt-1"
                  >
                    Mehedii .H
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",

                    alignItems: "center",
                  }}
                  className="text-gray text-[14px] flex items-center"
                >
                  <Rating
                    className={`mr-2`}
                    name="read-only"
                    value={5}
                    size="small"
                    readOnly
                  />
                  <p
                    style={{
                      marginLeft: "5px",
                      fontWeight: "600",
                      fontSize: "15px",
                      color: "#6D6E75",
                    }}
                    className={`text-[#faaf00]  font-semibold mr-1`}
                  >
                    (2)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
