import React from "react";

function NewsItem(props) {
  let { title, description, imageUrl, articleUrl } = props;

  return (
    <div className="bg-white overflow-hidden rounded-lg shadow-md h-full">
      <img
        src={
          !imageUrl
            ? "https://i.insider.com/651dc0c0617692f0d03f606b?width=1200&format=jpeg"
            : imageUrl
        }
        className="aspect-video rounded-b-none"
        alt=""
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-extrabold md:text-xl md:font-bold">
          {title}...
        </h3>
        <div className="text-xl md:text-lg">
          <p>{description}</p>
        </div>
        <div className="text-center">
          <a
            href={articleUrl}
            className="btn border border-black font-extrabold"
          >
            READ MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
