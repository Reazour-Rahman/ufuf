import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  useTheme,
  Rating,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { BsArrowRight, BsChevronDown, BsStopwatch } from "react-icons/bs";

const BannerContainerStyle = styled("section")(({ theme }) => ({
  //   backgroundColor: "#320fa1",
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

const AutoContainer = styled("div")(({ theme }) => ({
  position: "static",
  maxWidth: "90%",
  width: "1280px",
  margin: "0 auto",
}));

const H1 = styled("h1")(({ theme }) => ({
  marginBottom: "28px",
  color: "black",
  // fontSize: "45px",
  // lineHeight: "58px",
  // fontWeight: "700",
}));
const PlayIcon = {
  padding: "40px",
  textAlign: "center",
  fontSize: "24px",
  color: "#fff",
  backgroundColor: "#e654bd",
  //   boxShadow: "0px 11px 21.25px 3.75px rgb(45 5 156 / 65%)",
  borderRadius: "50%",
};
const Lay = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // justifyContent: 'space-between',
  gap: "10px",
  color: "#68666C",
  margin: "35px 0px",
}));
const PTag = styled("p")(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "16px",
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
  borderRadius: "2px",
}));

const AboutUsStylingButton = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "5x 0px",
  cursor: "pointer",
  width: "100px",
  color: "#5F2DED",
  margin: "35px 0px",
  background: "rgba(94, 45, 237, 0.07)",
  borderRadius: "14px",
  fontWeight: 600,
}));

const data = [
  {
    ques: "1. আপনারা কি অফার করেন?",
    ans: "আমাদের প্ল্যাটফর্মে আপনি পাবেন টাস্ক বেইজড কারিকুলামসহ ইন্ডাস্ট্রি ফোকাসড লাইভ ব্যাচ।",
  },
  {
    ques: "2. কোর্সগুলো কি প্রিরেকর্ডেড?",
    ans: "না, আমাদের সবগুলো কোর্স লাইভ। আপনি শিডিউল্ড সময়ে আপনার ড্যাশবোর্ড থেকে লাইভ কোর্সগুলোতে জয়েন করতে পারবেন।",
  },
  {
    ques: "3. আমি কিভাবে ব্যাচে জয়েন করবো?",
    ans: "প্ল্যাটফর্মে রেজিস্ট্রেশন করুন, আপনার পছন্দের স্কিল এবং শিডিউল সিলেক্ট করুন আর পেমেন্ট করে ব্যাচে জয়েন করুন।",
  },
  {
    ques: "4. আপনারা কি কি স্কিল অফার করেন?",
    ans: "আমরা ৫ টি ক্যাটাগরিতে আমাদের লাইভ ব্যাচগুলো অফার করি - Higher Study Abroad, Play with Data, Language Learning, Content Creation এবং Al Quran",
  },
  {
    ques: "5. আমি কি সার্টিফিকেট পাবো?",
    ans: "কোর্সের সবগুলো হোমওয়ার্ক, এসাইনমেন্ট এবং প্রজেক্ট সম্পন্ন করার পর সার্টিফিকেট পেয়ে যাবেন।",
  },
  {
    ques: "6. আপনাদের ক্লাসগুলো কতক্ষনের হয়?",
    ans: "আমাদের ক্লাসগুলো ১-২ ঘন্টা হয়।",
  },
  {
    ques: "7. আপনারা কি রিসোর্স দিবেন?",
    ans: "জ্বী, আমরা আপনাকে আপনার লাইভ কোর্সের জন্য রিসোর্স দিবো।",
  },
  {
    ques: "8. ফ্রি ক্লাস কি পাবো?",
    ans: "প্রতিটি কোর্সের জন্য রয়েছে ফ্রি লাইভ ক্লাস, যেগুলো পরবর্তিতে আপনি রিভিউ করতে পারবেন লাইব্রেরী থেকে।",
  },
  {
    ques: "9. আমার এসেসমেন্ট কিভাবে হবে?",
    ans: "প্রতিদিনের লাইভ ক্লাসে জয়েন করা, হোমওয়ার্ক, এসাইনমেন্ট কিংবা প্রজেক্টগুলো সাবমিট করা, কুইজ এবং এক্সাম দেয়া- এসবকিছুর ওপর ভিত্তি করে আপনার প্রতিদিনের প্রোগ্রেস ট্র্যাক করা হবে।",
  },
  {
    ques: "10. আমাদের পড়াবেন কারা?",
    ans: "আপনাদের ইন্সট্রাক্টর হিসেবে আছেন ৫-১৫ বছরের এক্সপেরিয়েন্সড টপ ইন্ডাস্ট্রি এক্সপার্টদের টিম, যারা আপনাকে শেখাবেন লাইভে।",
  },
  {
    ques: "11. আপনাদের কারিকুলাম কেমন?",
    ans: "আমাদের কারিকুলামগুলো day to day task based অর্থাৎ প্রতিদিনই আপনাদের জন্য থাকছে কোনো না কোনো টাস্ক (লাইভ ক্লাস, এসাইনমেন্ট, কুইজ অথবা টেস্ট)। এই কারিকুলাম সিস্টেম আপনাদের আপনার স্কিল ডেভেলপমেন্ট জার্নিটাকে করবে আরো শক্ত এবং আপনি হবেন সঠিকভাবে স্কিল্ড।",
  },
  {
    ques: "12. আমি কিভাবে একজন ইন্সট্রাক্টর হবো?",
    ans: "বাংলাদেশের দক্ষ জনশক্তির বিপ্লবে আমাদের সাথে অংশ নিতে চাইলে ইমেইল করুন - instructor@ostad.app",
  },
];
const Faq = () => {
  const theme = useTheme();
  const [count, setCount] = useState(5);
  return (
    <BannerContainerStyle sx={{ ...BannerPadding }}>
      <AutoContainer>
        <Typography
          variant="h1"
          sx={{
            color: theme.palette.common.black,
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          আপনাদের সাধারণ জিজ্ঞাসা
        </Typography>

        {data.slice(0, count).map((a) => {
          return (
            <Accordion
              sx={{
                padding: "10px 0px",
              }}
            >
              <AccordionSummary
                expandIcon={<BsChevronDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h3">{a.ques}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="soft">{a.ans}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}

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
          {/* <BsArrowRight /> */}
        </MoreAboutButton>
      </AutoContainer>
    </BannerContainerStyle>
  );
};

export default Faq;
