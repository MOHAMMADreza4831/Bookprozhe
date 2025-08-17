import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import Buttonicone from "@src/components/buttonIcone/buttonsicone";
import Rating from "@src/components/buttonIcone/Raring";
import { Book } from "@src/components/Data/interfaceDATA";
import { PATH_BOOKS } from "@src/routes/paths";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Specialoffer from "./Special offer";

export default function Search() {
  const [Data, setData] = useState<Book[]>([]);
  const [search, setsearch] = useState("");
  const [Historysearch, setHistorysearch] = useState<string[]>([]);
  useEffect(() => {
    axios.get("http://10.10.50.76:8002/api/books").then((res) => {
      if (Array.isArray(res.data.data)) {
        setData(res.data.data);
      } else {
        setData([]);
      }
    });
    const history = localStorage.getItem("serchhistory");
    if (history) {
      setHistorysearch(JSON.parse(history));
    }
  }, []);

  const filtersearch = Data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handelsearch = () => {
    if (search.trim() === "") return;
    if (!Historysearch.includes(search)) {
      const newsearch = [search, ...Historysearch];
      setHistorysearch(newsearch);
      localStorage.setItem("serchhistory", JSON.stringify(newsearch));
    }
  };

  const handelsub = (term: string) => {
    setsearch(term);
  };

  const handeldelete = (term: string) => {
    const newHistory = Historysearch.filter((item) => item !== term);
    setHistorysearch(newHistory);
    localStorage.setItem("serchhistory", JSON.stringify(newHistory));
  };

  const handelkey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handelsearch();
    }
  };
  console.log(Data);

  return (
    <>
      <div>
        <div className="flex flex-row w-full  items-center ">
          <Autocomplete
            className="mt-5 "
            onInputChange={(event, newValue) => setsearch(newValue)}
            options={filtersearch}
            getOptionLabel={(option) => option.title}
            renderInput={(props) => (
              <TextField
                value={search}
                type="text"
                sx={{ borderColor: "red" }}
                onKeyDown={handelkey}
                className="w-[370px]"
                {...props}
                label="جستجو"
              />
            )}
            renderOption={(props, option) => (
              <li {...props} key={option.id}>
                <li>{option.title}</li>
              </li>
            )}
          />
          <Button
            onClick={handelsearch}
            variant="contained"
            className="w-[100px] mt-[20px] p-3"
            sx={{ backgroundColor: "#95BCCC" }}
          >
            جستجو
          </Button>

          {/* <div>
            {Historysearch.map((item,index) => (
              <Card sx={{}} key={index.id} onClick={() => setsearch(item)} >
                {item}
              </Card>
            ))}
          </div> */}
        </div>
        {Historysearch.length > 0 && (
          <div>
            <h2 className="font-bold">جستجو های اخیر </h2>
            {Historysearch.map((term, index) => (
              <div
                key={index}
                className="flex items-center justify-between w-full "
              >
                <div>
                  <AccessTimeIcon sx={{ opacity: 0.5 }} />
                  <Button
                    style={{ color: "black", borderRadius: "0 0 0px 0px" }}
                    className=" p-4 "
                    onClick={() => handelsub(term)}
                  >
                    {term}
                  </Button>
                </div>
                <button onClick={() => handeldelete}>
                  <CloseIcon />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {search ? (
          filtersearch.length > 0 ? (
            filtersearch.map((item) => (
              <Card>
                <Link to={PATH_BOOKS.navigator.details(item.id)}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    className="w-full h-48 object-contain"
                  />
                </Link>

                <Box className="flex flex-col">
                  <Typography variant="h6" className="w-40">
                    {item.title}
                  </Typography>

                  <Box className="flex justify-between m-2 ">
                    <Buttonicone book={item} />
                    <Box className="flex items-center gap-1">
                      <Rating rating={item.rating} />
                      <p>{item.rating}</p>
                    </Box>
                  </Box>
                </Box>
              </Card>
            ))
          ) : (
            <p>کتاب پیدا نشد </p>
          )
        ) : null}
      </div>
      <div>
        <h3>
          <span style={{ color: "#39778D" }}> پیشنهاد ویژه</span> ابان بووک
        </h3>
        <Specialoffer />
      </div>
    </>
  );
}
