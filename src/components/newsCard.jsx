import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ news }) {
  if (!news) {
    return <h1>No news available</h1>;
  }

  // Destructure properties from news object
  const { title, author, urlToImage, description, url } = news;

  return (
    <div className="h-fit sm:w-[520px] w-[330px] rounded-xl m-2 p-6 font-serif hover:bg-[beige]">
      <div className="sm:text-2xl text-md mb-4">{title}</div>
      <div className="mb-2 sm:text-md text-sm">
        {author ? <div>Author: {author}</div> : <div>Author: Anonymous</div>}
      </div>
      <div className="">
        {urlToImage ? (
          <div>
            <Image
              src={urlToImage}
              alt="news"
              width={500}
              height={300}
              className="rounded-[5px]"
            />
          </div>
        ) : (
          <div>No image available</div>
        )}
      </div>
      <div className="my-2 sm:text-lg text-sm">{description}</div>
      <Link href={url} className="">
        <div className="mt-4">
          <button className="readmore-btn sm:h-[55px] h-[35px]">
            <span className="book-wrapper sm:w-[45px] w-[30px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(86, 69, 117)"
                viewBox="0 0 126 75"
                className="book"
              >
                <rect
                  strokeWidth="3"
                  stroke="#fff"
                  rx="7.5"
                  height="70"
                  width="121"
                  y="2.5"
                  x="2.5"
                ></rect>
                <line
                  strokeWidth="3"
                  stroke="#fff"
                  y2="75"
                  x2="63.5"
                  x1="63.5"
                ></line>
                <path
                  strokeLinecap="round"
                  strokeWidth="4"
                  stroke="#fff"
                  d="M25 20H50"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeWidth="4"
                  stroke="#fff"
                  d="M101 20H76"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeWidth="4"
                  stroke="#fff"
                  d="M16 30L50 30"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeWidth="4"
                  stroke="#fff"
                  d="M110 30L76 30"
                ></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 65 75"
                className="book-page"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="4"
                  stroke="#fff"
                  d="M40 20H15"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeWidth="4"
                  stroke="#fff"
                  d="M49 30L15 30"
                ></path>
                <path
                  strokeWidth="3"
                  stroke="#fff"
                  d="M2.5 2.5H55C59.1421 2.5 62.5 5.85786 62.5 10V65C62.5 69.1421 59.1421 72.5 55 72.5H2.5V2.5Z"
                ></path>
              </svg>
            </span>
            <span className="text text-sm ml-2">Read more</span>
          </button>
        </div>
      </Link>
    </div>
  );
}
