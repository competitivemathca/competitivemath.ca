import PropTypes from "prop-types";
import { dateFormat } from "../public/TimeModules.jsx";

export default function Announcement({
  imgSrc,
  username,
  date, // Pass in a date object instead
  pfp,
  title,
  text,
}) {
  return (
    <div className="bg-blue-50 rounded-2xl m-6 p-8 md:flex flex-row">
      <div className="flex flex-col">
        <img
          className="w-[280px] aspect-square m-auto rounded-2xl object-cover"
          src={imgSrc}
          alt="Image"
        />
        <div className="flex gap-4 mt-4 w-[280px]">
          <img className="w-[32px] h-[32px]" src={pfp} alt="Profile Pickture" />
          <p className="text-xs overlfow-ellipsis">
            Posted by {username} <br /> {dateFormat.format(date)}
            {" UTC"}
          </p>
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <h1 className="text-xl font-bold md:text-3xl">{title}</h1>
        <div className="mt-2">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

Announcement.propTypes = {
  imgSrc: PropTypes.string,
  username: PropTypes.string,
  date: PropTypes.objectOf(Date), // Change to date object later
  pfp: PropTypes.string, // Change to img node later
  title: PropTypes.string,
  text: PropTypes.string,
};
