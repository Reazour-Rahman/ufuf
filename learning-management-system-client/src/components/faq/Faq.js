import React, { useState } from "react";
import { Grid, Box, Typography, useTheme, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  BsArrowRight,
  BsChevronDoubleDown,
  BsChevronDown,
  BsStopwatch,
} from "react-icons/bs";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { AutoContainer } from "../../themes/customTheme/customTheme";
import Heading from "../heading/Heading";

const data = [
  {
    id: 1,
    ques: "1. আপনারা কি অফার করেন?",
    ans: "আমাদের প্ল্যাটফর্মে আপনি পাবেন টাস্ক বেইজড কারিকুলামসহ ইন্ডাস্ট্রি ফোকাসড লাইভ ব্যাচ।",
  },
  {
    id: 2,
    ques: "2. কোর্সগুলো কি প্রিরেকর্ডেড?",
    ans: "না, আমাদের সবগুলো কোর্স লাইভ। আপনি শিডিউল্ড সময়ে আপনার ড্যাশবোর্ড থেকে লাইভ কোর্সগুলোতে জয়েন করতে পারবেন।",
  },
  {
    id: 3,
    ques: "3. আমি কিভাবে ব্যাচে জয়েন করবো?",
    ans: "প্ল্যাটফর্মে রেজিস্ট্রেশন করুন, আপনার পছন্দের স্কিল এবং শিডিউল সিলেক্ট করুন আর পেমেন্ট করে ব্যাচে জয়েন করুন।",
  },
  {
    id: 4,
    ques: "4. আপনারা কি কি স্কিল অফার করেন?",
    ans: "আমরা ৫ টি ক্যাটাগরিতে আমাদের লাইভ ব্যাচগুলো অফার করি - Higher Study Abroad, Play with Data, Language Learning, Content Creation এবং Al Quran",
  },
  {
    id: 5,
    ques: "5. আমি কি সার্টিফিকেট পাবো?",
    ans: "কোর্সের সবগুলো হোমওয়ার্ক, এসাইনমেন্ট এবং প্রজেক্ট সম্পন্ন করার পর সার্টিফিকেট পেয়ে যাবেন।",
  },
  {
    id: 6,
    ques: "6. আপনাদের ক্লাসগুলো কতক্ষনের হয়?",
    ans: "আমাদের ক্লাসগুলো ১-২ ঘন্টা হয়।",
  },
  {
    id: 7,
    ques: "7. আপনারা কি রিসোর্স দিবেন?",
    ans: "জ্বী, আমরা আপনাকে আপনার লাইভ কোর্সের জন্য রিসোর্স দিবো।",
  },
  {
    id: 8,
    ques: "8. ফ্রি ক্লাস কি পাবো?",
    ans: "প্রতিটি কোর্সের জন্য রয়েছে ফ্রি লাইভ ক্লাস, যেগুলো পরবর্তিতে আপনি রিভিউ করতে পারবেন লাইব্রেরী থেকে।",
  },
  {
    id: 9,
    ques: "9. আমার এসেসমেন্ট কিভাবে হবে?",
    ans: "প্রতিদিনের লাইভ ক্লাসে জয়েন করা, হোমওয়ার্ক, এসাইনমেন্ট কিংবা প্রজেক্টগুলো সাবমিট করা, কুইজ এবং এক্সাম দেয়া- এসবকিছুর ওপর ভিত্তি করে আপনার প্রতিদিনের প্রোগ্রেস ট্র্যাক করা হবে।",
  },
  {
    id: 10,
    ques: "10. আমাদের পড়াবেন কারা?",
    ans: "আপনাদের ইন্সট্রাক্টর হিসেবে আছেন ৫-১৫ বছরের এক্সপেরিয়েন্সড টপ ইন্ডাস্ট্রি এক্সপার্টদের টিম, যারা আপনাকে শেখাবেন লাইভে।",
  },
  {
    id: 11,
    ques: "11. আপনাদের কারিকুলাম কেমন?",
    ans: "আমাদের কারিকুলামগুলো day to day task based অর্থাৎ প্রতিদিনই আপনাদের জন্য থাকছে কোনো না কোনো টাস্ক (লাইভ ক্লাস, এসাইনমেন্ট, কুইজ অথবা টেস্ট)। এই কারিকুলাম সিস্টেম আপনাদের আপনার স্কিল ডেভেলপমেন্ট জার্নিটাকে করবে আরো শক্ত এবং আপনি হবেন সঠিকভাবে স্কিল্ড।",
  },
  {
    id: 12,
    ques: "12. আমি কিভাবে একজন ইন্সট্রাক্টর হবো?",
    ans: "বাংলাদেশের দক্ষ জনশক্তির বিপ্লবে আমাদের সাথে অংশ নিতে চাইলে ইমেইল করুন - instructor@ostad.app",
  },
];

const BannerContainerStyle = styled("section")(({ theme }) => ({
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
}));

const BannerPadding = {
  padding: {
    md: "50px  0px",
    xs: "20px  0px",
  },
};

const MoreAboutButton = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 0px",
  cursor: "pointer",
  width: "100%",
  color: "white",
  gap: "10px",
  margin: "35px 0px",
  background: "#5F2DED",
  borderRadius: "15px",
}));

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  padding: "10px 0px",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <BsChevronDoubleDown
        style={{ fontSize: "20px", color: "black", fontWeight: 900 }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const AccordionBackground = {
  padding: 2,
  borderRadius: "15px",
  boxShadow:
    "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
};
const SingleAccordionStyle = {
  margin: "0px 0px",
  boxShadow: "0",
};

const HeaderStyling = {
  marginBottom: "20px",
  textAlign: "center",
};

const Faq = () => {
  const theme = useTheme();
  const [count, setCount] = useState(5);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <BannerContainerStyle sx={{ ...BannerPadding }}>
      <AutoContainer>
        <Heading title={"জিজ্ঞাসা"} head={"আপনাদের সাধারণ জিজ্ঞাসা"}/>
        <Box
          sx={{
            ...AccordionBackground,
            backgroundColor: theme.palette.common.white,
          }}
        >
          {data.slice(0, count).map((a) => {
            return (
              <Accordion
                sx={{
                  ...SingleAccordionStyle,
                  borderBottom: `${
                    expanded === a.id
                      ? `2px solid ${theme.palette.background.defaultPink}`
                      : "1px solid #eaecf0"
                  }`,
                  "&:(last-child)": {
                    borderBottom: 0,
                  },
                  background: `${
                    expanded === a.id
                      ? `${theme.palette.background.transparent}`
                      : "white"
                  }`,
                }}
                expanded={expanded === a.id}
                onChange={handleChange(a.id)}
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5">{a.ques}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="soft">{a.ans}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
        <MoreAboutButton
          onClick={() => {
            if (count === 10) {
              setCount(5);
            }
            if (count === 5) {
              setCount(10);
            }
          }}
        >
          {count === 5 ? " আরো দেখুন" : "কমিয়ে দেখুন"}
        </MoreAboutButton>
      </AutoContainer>
    </BannerContainerStyle>
  );
};

export default Faq;
