import React, { useEffect, useState } from "react";
import NewsItem from "./Newsitem";
import axios from "axios";
import Loadinganimation from "./loadinganimation";
import Navbar from "./Navbar";

function News2() {
  const [selectedOption, setSelectedOption] = useState("General");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setPage(1);
    console.log(event.target.value.toLowerCase());
  };

  const radioOptions = [
    { label: "General", value: "General" },
    { label: "Business", value: "Business" },
    { label: "Entertainment", value: "Entertainment" },
    { label: "Health", value: "Health" },
    { label: "Science", value: "Science" },
    { label: "Sports", value: "Sports" },
    { label: "Technology", value: "Technology" },
  ];

  const handleNextClick = () => {
    console.log(page);
    setPage(page + 1);
  };

  const handlePreviousClick = () => {
    console.log("Prevous");
    setPage(page - 1);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${selectedOption}&apiKey=d81dc0ef8318442984472cfda902ddfc&page=${page}&pageSize=21`
      )
      .then((res) => {
        setData(res.data.articles);
        setLoading(false);
      });
  }, [page, selectedOption]);

  return (
    <>
      <Navbar newsTopic={selectedOption} />


      <div className="bg-cyan-50">
        <div className="px-5 md:mx-10 md:px-10">
          <div className="flex justify-center ">
            <div className="my-5 md:m-5 p-2 w-auto h-auto border rounded-lg shadow-sm border-black">
              <label className="block text-center font-bold text-lg text-gray-700">
                CATEGORY
              </label>
              <div className="text-center mt-2 text-md md:text-sm lg:text-lg">
                {radioOptions.map((option) => (
                  <label key={option.value} className="inline-flex items-center">
                    <input
                      type="radio"
                      value={option.value}
                      checked={selectedOption === option.value}
                      onChange={handleOptionChange}
                    />
                    <span className="ml-1 mr-5 my-1 md:my-0">{option.label}</span>
                  </label>
                ))}
              </div>
              {/* <p className="mt-4">Selected Option: {selectedOption}</p> */}
            </div>
          </div>

          {loading && <Loadinganimation />}

          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
              {data.map((value) => {
                return (
                  <div>
                    <NewsItem
                      title={value.title.slice(0, 60)}
                      description={value.description}
                      imageUrl={value.urlToImage}
                      articleUrl={value.url}
                    ></NewsItem>
                  </div>
                );
              })}
            </div>
          )}

          <div className="flex gap-3 m-5 justify-center">
            <button className="btn solid info" onClick={handlePreviousClick}>
              &larr; Previous
            </button>
            <button className="btn solid info" onClick={handleNextClick}>
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default News2;
