import { useNavigate, useParams } from "react-router-dom";

import { IoChevronBackOutline } from "react-icons/io5";
import { Box, Divider, Rating } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import { LiaCalendar } from "react-icons/lia";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Iconeproduct from "./Iconeproduct";
import { PiBaby } from "react-icons/pi";
import { GiEarthAmerica } from "react-icons/gi";
import { useEffect, useState } from "react";
import axios from "axios";
import { Book } from "../Data/interfaceDATA";
import ModalBUY from "./modalbuy";
import axioshandel from "../login/header";

export default function AboutHistoricalBook() {
  const [book, setBook] = useState<Book | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axioshandel
      .get("/books")
      .then((res) => {
        const add = res.data.data.find((b: Book) => b.id.toString() === id);
        if (add) setBook(add);
      })
      .catch((err) => console.log("خطا:", err));
  }, [id]);
  if (!book) return <div>کتاب پیدا نشد!</div>;

  return (
    <>
      <div
        className="sticky to flex-row z-10  w-full h-16  "
        style={{ backgroundColor: "#95bccc" }}
      >
        <div className="flex      py-4 ">
          <IoChevronBackOutline
            style={{ color: "white" }}
            className="  rotate-180 size-5 "
          />
          <button
            onClick={() => navigate(-1)}
            style={{ color: "white" }}
            className="font-bold"
          >
            بازگشت
          </button>
        </div>
      </div>
      <header>
        <div className="flex pt-4 px-4 ">
          <Box className="">
            <img src={book.image} alt={book.title} className=" w-44  " />
          </Box>
          <div className=" p-9">
            <section className="flex flex-col ">
              <div>
                <h2 className="font-bold   pt-2" style={{ fontSize: "20px" }}>
                  {book.title}
                </h2>
              </div>
              <Box className="felx flex-col">
                <Timeline
                  position="left"
                  sx={{ direction: "rtl", width: "1px ", mx: "" }}
                >
                  <TimelineItem sx={{ minHeight: 50, px: 8 }}>
                    <TimelineSeparator>
                      <TimelineDot
                        sx={{
                          width: 2,
                          height: 2,
                          bgcolor: "rgba(215, 215, 215, 1)",
                        }}
                      />
                      <TimelineConnector
                        className=""
                        sx={{ bgcolor: "rgba(215, 215, 215, 1)" }}
                      />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div className="flex flex-row">
                        <div style={{ color: "rgba(107, 107, 107, 1)" }}>
                          {book.author}
                        </div>
                        <p
                          style={{ color: "rgba(107, 107, 107, 1)" }}
                          className="flex text-right  flex-row"
                        >
                          :نویسنده
                        </p>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem sx={{ minHeight: 50, px: 8 }}>
                    <TimelineSeparator>
                      <TimelineDot
                        sx={{
                          width: 2,
                          height: 2,
                          bgcolor: "rgba(215, 215, 215, 1)",
                        }}
                      />
                      <TimelineConnector
                        className=" "
                        sx={{ bgcolor: "rgba(215, 215, 215, 1)" }}
                      />
                    </TimelineSeparator>
                    <TimelineContent className="">
                      <div
                        style={{ display: "inline-flex" }}
                        className=" gap-1 "
                      >
                        <div
                          className="flex     gap-1 "
                          style={{ color: "rgba(107, 107, 107, 1)" }}
                        >
                          {book.genre?.map((g) => (
                            <h5 key={g.id} className=" break-words">
                              {g.title}
                            </h5>
                          ))}
                          :ژانر
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem sx={{ minHeight: 50, px: 8 }}>
                    <TimelineSeparator>
                      <TimelineDot
                        sx={{
                          width: 2,
                          height: 2,
                          bgcolor: "rgba(215, 215, 215, 1)",
                        }}
                      />
                      <TimelineConnector
                        className=""
                        sx={{ bgcolor: "rgba(215, 215, 215, 1)" }}
                      />
                    </TimelineSeparator>
                    <TimelineContent className="">
                      <div className="flex flex-row">
                        <div style={{ color: "rgba(107, 107, 107, 1)" }}>
                          {book.pages}
                        </div>
                        <p
                          style={{ color: "rgba(107, 107, 107, 1)" }}
                          className="flex text-right  flex-row"
                        >
                          :تعداد
                        </p>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem sx={{ minHeight: 50, px: 8 }}>
                    <TimelineSeparator>
                      <TimelineDot
                        sx={{
                          width: "2",
                          height: 2,
                          bgcolor: "rgba(215, 215, 215, 1)",
                        }}
                      />
                      <TimelineConnector
                        className=""
                        sx={{ mt: "-2px", bgcolor: "rgba(215, 215, 215, 1)" }}
                      />
                    </TimelineSeparator>
                    <TimelineContent className="flex flex-row">
                      <div className="flex justify-start">
                        <div
                          className=" "
                          style={{ color: "rgba(107, 107, 107, 1)" }}
                        >
                          شابک:
                          {book.shabak}
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem sx={{ minHeight: 50, px: 8 }}>
                    <TimelineSeparator
                      sx={{
                        p: 0,
                        m: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <TimelineDot
                        sx={{
                          width: 2,
                          height: 2,
                          bgcolor: "rgba(215, 215, 215, 1)",
                        }}
                      />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div className="flex flex-row">
                        <div style={{ color: "rgba(107, 107, 107, 1)" }}>
                          {book.is_translated ? "دارد" : "ندارد "}
                        </div>

                        <p
                          style={{ color: "rgba(107, 107, 107, 1)" }}
                          className="flex text-right  flex-row"
                        >
                          :ترجمه
                        </p>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </Box>
            </section>
          </div>
        </div>
      </header>
      <section className="">
        <div>
          <Box className=" felx flex-row">
            <Box
              className=" flex flex-row items-center  gap-10 pr-3 "
              sx={{
                direction: "ltr",
              }}
            >
              <Iconeproduct />

              <Rating
                size="small"
                className="flex flex-row-reverse"
                precision={0.5}
                name="read-only"
                value={book.rate}
                readOnly
                sx={{
                  direction: "ltr",
                }}
              />
              <div
                className="  flex gap- flex-row justify-center items-center  p-3"
                style={{
                  backgroundColor: "rgba(252, 220, 220, 0.5)",
                  color: "rgba(200, 63, 67, 1)",
                  borderRadius: "4px",
                }}
              >
                <div className="flex flex-row gap-4">
                  <div>قیمت:</div>
                  <div className="flex flex-row gap-1">
                  {book.files?.filter((f)=>f.status===1).map((item)=>item.price)}
                    تومان
                  </div>
                </div>
              </div>
            </Box>
          </Box>
          <div className="pt-10">
            <hr />
          </div>
          <section className="flex flex-row gap-10 justify-center pt-10">
            <div className="flex flex-col items-center">
              <PiBaby className="text-4xl " />
              <p className="items-center">رده سنی {book.age}+</p>
            </div>

            <div className="flex flex-col items-center">
              <LiaCalendar className="text-4xl" />
              تاریخ انتشار:
              {new Date(book.created_at).toLocaleDateString("fa-IR")}
            </div>
            <div className="flex flex-col items-center">
              <GiEarthAmerica className="text-4xl" />
              زبان:{book.language}
            </div>
          </section>

          <div className="px-3 py-6">
            <ModalBUY book={book} />
          </div>
          <section>
            <div>
              <Divider
                textAlign="right"
                className="pr-2"
                sx={{
                  "&::before": {
                    width: 0,
                  },
                  "&::after": {
                    width: "90%",
                  },
                }}
              >
                توضیحات
              </Divider>
              <div
                className="felx flex-col px-5 items-center text-justify"
                style={{ color: "rgba(88, 88, 88, 1)", fontSize: "14px" }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </div>
              <div>
                <Divider
                  textAlign="right"
                  className="pr-2"
                  sx={{
                    "&::before": {
                      width: 0,
                    },
                    "&::after": {
                      width: "90%",
                    },
                  }}
                >
                  خلاصه کتاب
                </Divider>
                <div
                  className="felx flex-col px-5 items-center text-justify"
                  style={{ color: "rgba(88, 88, 88, 1)", fontSize: "14px" }}
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
