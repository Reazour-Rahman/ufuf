import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
import { AiOutlineArrowUp } from "react-icons/ai";

class TotalEarningCharts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Desktops",
          data: [130, 41, 97, 75, 35, 65, 25, 35, 130, 90, 200],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#FF5BEF"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100],
          },
        },
        markers: {
          size: 6,
          colors: ["#fff"],
          strokeColors: "#AE8FF7",
          strokeWidth: 3,
          hover: {
            size: 10,
          },
        },
        tooltip: {
          followCursor: false,
          theme: "dark",
          x: {
            show: true,
          },
          marker: {
            show: true,
          },
          y: {
            title: {
              formatter: function () {
                return "";
              },
            },
          },
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yaxis: {
          show: true,
          // logBase: 20,
          tickAmount: 6,
          min: 6,
        },
      },
    };
  }

  

  render() {

 
    return (
      <div
        style={{
          background: "white",
          padding: "30px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          marginTop: "10px",
        }}
        className=""
      >
        <Typography
          variant="h3"
          color="text.secondary"
          component="div"
          sx={{
            fontFamily: `'Poppins', sans-serif`,
            marginTop: "5px",
          }}
        >
          Total Earning
        </Typography>

        <Box sx={{ display: "flex", margin: "10px 0px", justifyContent:'space-between' }}>
          <Box>
            <Typography
              variant="h5"
              color="text.secondary"
              component="div"
              sx={{
                fontFamily: `'Poppins', sans-serif`,
                marginTop: "5px",
              }}
            >
              Monthly
            </Typography>
            <Typography
              variant="h3"
              color="text.secondary"
              component="div"
              sx={{
                fontFamily: `'Poppins', sans-serif`,
                marginTop: "5px",
              }}
            >
              9.8K
            </Typography>

            <Box sx={{
                display:'flex',
                alignItems:'center',
                color:'green'
            }}>
              <AiOutlineArrowUp />
              <Typography
                variant="h5"
                color="text.secondary"
                component="div"
                sx={{
                  fontFamily: `'Poppins', sans-serif`,
                  marginTop: "5px",
                  color:'green'
                }}
              >
                Total Earning
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="h5"
              color="text.secondary"
              component="div"
              sx={{
                fontFamily: `'Poppins', sans-serif`,
                marginTop: "5px",
              }}
            >
              Monthly
            </Typography>
            <Typography
              variant="h3"
              color="text.secondary"
              component="div"
              sx={{
                fontFamily: `'Poppins', sans-serif`,
                marginTop: "5px",
              }}
            >
              9.8K
            </Typography>

            <Box sx={{
                display:'flex',
                alignItems:'center',
                color:'green'
            }}>
              <AiOutlineArrowUp />
              <Typography
                variant="h5"
                color="text.secondary"
                component="div"
                sx={{
                  fontFamily: `'Poppins', sans-serif`,
                  marginTop: "5px",
                  color:'green'
                }}
              >
                Total Earning
              </Typography>
            </Box>
          </Box>


          <Box>
            <Typography
              variant="h5"
              color="text.secondary"
              component="div"
              sx={{
                fontFamily: `'Poppins', sans-serif`,
                marginTop: "5px",
              }}
            >
              Monthly
            </Typography>
            <Typography
              variant="h3"
              color="text.secondary"
              component="div"
              sx={{
                fontFamily: `'Poppins', sans-serif`,
                marginTop: "5px",
              }}
            >
              9.8K
            </Typography>

            <Box sx={{
                display:'flex',
                alignItems:'center',
                color:'green'
            }}>
              <AiOutlineArrowUp />
              <Typography
                variant="h5"
                color="text.secondary"
                component="div"
                sx={{
                  fontFamily: `'Poppins', sans-serif`,
                  marginTop: "5px",
                  color:'green'
                }}
              >
                Total Earning
              </Typography>
            </Box>
          </Box>
        </Box>

        <div style={{ width: "100%" }}>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height="300"
            width="100%"
          />
        </div>
      </div>
    );
  }
}

export default TotalEarningCharts;
