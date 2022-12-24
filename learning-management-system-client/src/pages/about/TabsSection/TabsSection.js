import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AutoContainer } from "../../../themes/customTheme/customTheme";

const TabColor = {
  background: "#F7F7F7",
  fontWeight: "bold",
  fontSize: "15px",
  color: "#191B1E",
  marginRight: "10px",
};

const TabsSection = () => {
  const [value, setValue] = React.useState("about");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value);
  const theme = useTheme();

  return (
    <AutoContainer>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          TabIndicatorProps={{
            style: {
              background: "#5F2DED",
              height: "5px",
            },
          }}
        >
          <Tab style={TabColor} value="about" label="সম্পর্কে" wrapped />
          <Tab style={TabColor} value="course" label="কোর্স" />
          <Tab
            style={TabColor}
            value="awards"
            label="
পুরস্কার"
          />
          <Tab
            style={TabColor}
            value="education"
            label="
শিক্ষা"
          />
        </Tabs>

        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          {" "}
          {value === "about" && (
            <Typography variant="soft">
              আমাদের সম্পর্কে অনলাইন শিক্ষা কেন্দ্রে স্বাগতম, আমার স্টার্টআপের
              সাথে দেখা করুন ডিজাইন এজেন্সি শেপ রেক্স বর্তমানে আমি CodeNext এ
              কাজ করছি পণ্য ডিজাইনার। এই গেমটিতে 10+ বছরের অভিজ্ঞতা, মানে পণ্য
              ডিজাইনিং আমি ইউজার এক্সপেরিয়েন্স এবং ইউজার ইন্টারফেসে কাজ করতে
              ভালোবাসি ডিজাইনিং কারণ আমি ডিজাইনের সমস্যা সমাধান করতে এবং খুঁজে
              পেতে ভালোবাসি এটি সমাধান করার জন্য সহজ এবং ভাল সমাধান। আমি সবসময়
              আমার সাধ্যমত চেষ্টা করি সেরা ব্যবহারকারীর অভিজ্ঞতার সাথে ভাল
              ব্যবহারকারী ইন্টারফেস তৈরি করুন। আমার আছে ইউএক্স ডিজাইনার হিসেবে
              কাজ করছেন কোর্স পুরষ্কার সম্পর্কে আরও শিক্ষা ডিপিআর ইঞ্জিনিয়ারিং
              ঢাকা বিশ্ববিদ্যালয়ে অনেক আছে Lorem Ipsum এর প্যাসেজের ভিন্নতা
              পাওয়া যায়, কিন্তু সংখ্যাগরিষ্ঠ ইনজেকশনের হাস্যরস দ্বারা, বা
              এলোমেলো শব্দ এমনকি সামান্য বিশ্বাসযোগ্য দেখায়. আপনি যদি যাচ্ছেন
              Lorem একটি উত্তরণ ব্যবহার করতে
            </Typography>
          )}
          {value === "course" && (
            <Typography variant="soft">
              কিছু আকারে, ইনজেক্টেড হিউমার দ্বারা, এর অনেক বৈচিত্র রয়েছে
              সামান্য বিশ্বাসযোগ্য। আপনি যদি Lorem একটি উত্তরণ ব্যবহার করতে
              যাচ্ছেন ইপসাম, ইন্টারঅ্যাকশন ডিজাইন - অ্যানিমেশন এর অনেক বৈচিত্র
              রয়েছে Lorem Ipsum এর প্যাসেজ উপলব্ধ, কিন্তু সংখ্যাগরিষ্ঠ ভোগা
              হয়েছে ইনজেক্টেড হাস্যরস, বা এলোমেলো শব্দ দ্বারা কিছু আকারে
              পরিবর্তন যা একটুও বিশ্বাসযোগ্য মনে হয় না
            </Typography>
          )}
          {value === "awards" && (
            <Typography variant="soft">
              ইনজেক্টেড হিউমার দ্বারা, লরেমের প্যাসেজের অনেক বৈচিত্র রয়েছে
              Ipsum উপলব্ধ, কিন্তু সংখ্যাগরিষ্ঠ কিছু পরিবর্তন ভোগ করেছে ফর্ম,
              ইনজেক্টেড হিউমার দ্বারা,এর প্যাসেজের অনেক বৈচিত্র রয়েছে Lorem
              Ipsum উপলব্ধ, কিন্তু সংখ্যাগরিষ্ঠ পরিবর্তন ভোগ করেছে কিছু আকারে,
              ইনজেকশনের হাস্যরস দ্বারা, অনেক বৈচিত্র আছে Lorem Ipsum এর প্যাসেজ
              উপলব্ধ, কিন্তু সংখ্যাগরিষ্ঠ ভোগা হয়েছে কিছু আকারে পরিবর্তন,
              ইনজেকশনের হাস্যরস দ্বারা, অনেক আছে Lorem Ipsum এর প্যাসেজের
              বৈচিত্র উপলব্ধ, অনেক আছে Lorem Ipsum এর প্যাসেজের ভিন্নতা পাওয়া
              যায়, কিন্তু সংখ্যাগরিষ্ঠ ইনজেকশনের হাস্যরস দ্বারা, বা এলোমেলো
              শব্দ যা সামান্য বিশ্বাসযোগ্য দেখায় না। আপনি যদি ইউজারির ইউজার
              রিসার্চ অ্যাওয়ার্ড 2020 ডিসাইনিং অ্যাওয়ার্ড 2021 হতে যাচ্ছে
              কম্পিউটার সায়েন্স - ইংল্যান্ড প্যাসেজের অনেক বৈচিত্র রয়েছে Lorem
              Ipsum উপলব্ধ, কিন্তু সংখ্যাগরিষ্ঠ ভোগা হয়েছে কিছু আকারে পরিবর্তন,
            </Typography>
          )}
          {value === "education" && (
            <Typography variant="soft">
              কিছু আকারে, ইনজেক্টেড হিউমার দ্বারা, এর অনেক বৈচিত্র রয়েছে
              সামান্য বিশ্বাসযোগ্য। আপনি যদি Lorem একটি উত্তরণ ব্যবহার করতে
              যাচ্ছেন ইপসাম, ইন্টারঅ্যাকশন ডিজাইন - অ্যানিমেশন এর অনেক বৈচিত্র
              রয়েছে Lorem Ipsum এর প্যাসেজ উপলব্ধ, কিন্তু সংখ্যাগরিষ্ঠ ভোগা
              হয়েছে ইনজেক্টেড হাস্যরস, বা এলোমেলো শব্দ দ্বারা কিছু আকারে
              পরিবর্তন যা একটুও বিশ্বাসযোগ্য মনে হয় না
            </Typography>
          )}
        </Box>
      </Box>
    </AutoContainer>
  );
};

export default TabsSection;
