import React, { useEffect, useState } from "react";
import NewsItem from "./Newsitem";
import axios from "axios";
import Loadinganimation from "./loadinganimation";

function News() {
  const [selectedOption, setSelectedOption] = useState("General");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
    <div className="mx-11 px-11">
      <div className="container m-11">
        <div className="space-y-3">
          {/* <div className="flex items-center space-x-5">
    <input type="checkbox" id="example1" className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
    <label for="example1" className="text-sm font-medium text-gray-700">All</label>
    <input type="checkbox" id="example1" className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
    <label for="example1" className="text-sm font-medium text-gray-700">India</label>
    <input type="checkbox" id="example1" className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
    <label for="example1" className="text-sm font-medium text-gray-700">US</label>
    <input type="checkbox" id="example1" className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
    <label for="example1" className="text-sm font-medium text-gray-700"></label>
  </div> */}

          <div className="border border-black">
            <label className="block text-center font-bold text-lg text-gray-700">
              CATEGORY
            </label>
            <div className="flex justify-center mt-2 gap-8 text-lg">
              {radioOptions.map((option) => (
                <label key={option.value} className="inline-flex items-center">
                  <input
                    type="radio"
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={handleOptionChange}
                  />
                  <span className="ml-1">{option.label}</span>
                </label>
              ))}
            </div>
            {/* <p className="mt-4">Selected Option: {selectedOption}</p> */}
          </div>

          {loading && <Loadinganimation />}
        </div>
      </div>
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
  );
}

export default News;
