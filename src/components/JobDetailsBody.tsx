import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Map from './Map';

type DetailedJobProps = {
  email: string,
  phone: string,
  title: string,
  salary: string,
  address: string,
  benefits: string[],
  location: {
    lat: number,
    long: number,
  },
  pictures: string[],
  createdAt: string,
  description: string,
  employment_type: string[],
}

const JobDetailsBody: React.FC<DetailedJobProps> = ({
    email,
    phone,
    title,
    salary,
    address,
    benefits,
    location,
    pictures,
    createdAt,
    description,
    employment_type
}) => {
  const [slides, setSlides] = React.useState(3);
  const [settings, setSettings] = React.useState({
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: slides,
    slidesToScroll: 1,
  });

  let currentDate = Date.parse(new Date().toDateString());
  let days = Math.round((currentDate - Date.parse(createdAt)) / 86400000); //86400000 - ms в ондому дні

  const { lat, long } = location;
  const position = {
    lat,
    lng: long,
  };

  const first = description.split('Responsopilities:', 2);
  const second = first[1].split('Compensation & Benefits:', 2);

  const text = first[0];
  const responsopilitiesText = second[0];
  const benefitsText = second[1].split('.');
  benefitsText.pop();

  React.useEffect(() => {
    const mediaQueryMax = window.matchMedia('(max-width: 510px)');
    mediaQueryMax.matches ? setSlides(2) : setSlides(3);
    mediaQueryMax.addEventListener('change', () => {
      mediaQueryMax.matches ? setSlides(2) : setSlides(3);
    });
  }, []);

  React.useEffect(() => {
    setSettings((prev) => ({ ...prev, slidesToShow: slides }));
  }, [slides]);

  return (
    <>
      <div className="flex max-w-[1440px] mx-[auto] my-[10px] mt-[55px] mb-[100px] justify-between flex-wrap">
        {/* L E F T  */}
        <div className="px-[15px] max-w-full">
          {/* H E A D E R */}
          <div className="flex justify-between mb-[40px] border-b-[1px] border-[rgb(58,69,98,0.1)] pb-[9px] md:border-b-none md:border-none md:flex-col">
            <h2 className="title text-3xl text-main md:border-b-[1px] md:border-[rgb(58,69,98,0.1)] md:pb-[9px]">
              Job Details
            </h2>
            <div className="flex items-center md:mt-[25px]">
              <a href="#" className="link flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="23"
                  viewBox="0 0 19 23"
                  fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 4.00016C1.5 2.5274 2.69391 1.3335 4.16667 1.3335H14.8333C16.3061 1.3335 17.5 2.5274 17.5 4.00016V19.9936C17.5 21.1595 16.109 21.7639 15.2567 20.9682L10.4099 16.4428C9.89761 15.9645 9.10239 15.9645 8.59007 16.4428L3.74327 20.9682C2.89104 21.7639 1.5 21.1595 1.5 19.9936V4.00016Z"
                    stroke="#70778B"
                    strokeWidth="2"
                  />
                </svg>
                <p className="mr-[31px] pl-[15px]">Save to my list</p>
              </a>
              <a href="#" className="link flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.54 14.9096L6.41 10.743C6.46 10.512 6.5 10.2811 6.5 10.0402C6.5 9.7992 6.46 9.56827 6.41 9.33735L13.46 5.21084C14 5.71285 14.71 6.0241 15.5 6.0241C17.16 6.0241 18.5 4.67871 18.5 3.01205C18.5 1.34538 17.16 0 15.5 0C13.84 0 12.5 1.34538 12.5 3.01205C12.5 3.25301 12.54 3.48394 12.59 3.71486L5.54 7.84137C5 7.33936 4.29 7.02811 3.5 7.02811C1.84 7.02811 0.5 8.37349 0.5 10.0402C0.5 11.7068 1.84 13.0522 3.5 13.0522C4.29 13.0522 5 12.741 5.54 12.239L12.66 16.4157C12.61 16.6265 12.58 16.8474 12.58 17.0683C12.58 18.6847 13.89 20 15.5 20C17.11 20 18.42 18.6847 18.42 17.0683C18.42 15.4518 17.11 14.1365 15.5 14.1365C14.74 14.1365 14.06 14.4378 13.54 14.9096Z"
                    fill="#70778B"
                  />
                </svg>
                <p className=" pl-[15px]">Share</p>
              </a>
            </div>
          </div>
          {/* B U T T O N (REPEAT TWICE) */}
          <a
            href="#"
            className="px-[30px] py-[18px] bg-main inline-block rounded text-[#fff] text-l uppercase md:hidden">
            Apply now
          </a>
          {/* T I T L E */}
          <div className="mt-[32px]">
            <div className="flex justify-between md:block">
              <h1 className="max-w-[500px] text-xxl text-main mb-[7px]">{title}</h1>
              <div className="md:flex md:mt-[25px] md:mb-[20px] md:absolute r-[0px] mt-[15px] flex-col-reverse right-[15px]">
                <h4 className="text-2xl text-main">€ {salary}</h4>
                <p className="text-xll md:text-end">Brutto, per year</p>
              </div>
            </div>
            <p className="text-xll text-[rgba(56,65,93,0.355988);] mb-[7px] md: mt-[30px]">
              Posted {days} days ago
            </p>
          </div>
          {/* T E X T */}
          <div className="text-main text-xll max-w-[725px]">
            <p className="mb-[40px] md:mt-[20px] md:pt-[15px]">{text}</p>
            {/* R E S P O N S I B I L I T I E S */}
            <div>
              <h4 className="text-2xl mb-[15px]">Responsopilities</h4>
              <p className="mb-[20px]">{responsopilitiesText}</p>
            </div>
            {/* B E N E F I T S */}
            <div>
              <h3 className="text-2xl mb-[15px]">Compensation & Benefits:</h3>
              <h4>Our physicians enjoy a wide range of benefits, including:</h4>
              <ul className="list-[square] max-w-[450px] mb-[30px] pl-[20px]">
                {benefitsText.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="md:flex md:justify-center">
              <a
                href="#"
                className="px-[30px] py-[18px] bg-main inline-block rounded text-[#fff] text-l uppercase ">
                Apply now
              </a>
            </div>
            {/* A D D I T I O N A L */}
            <div>
              <h2 className="text-3xl mt-[86px] border-b-[1px] border-[rgb(58,69,98,0.1)] pb-[9px] mb-[25px]">
                Additional info
              </h2>
              <p className="text-xll mb-[10px]">Employment type</p>
              <div className="flex text-s">
                {employment_type.map((type, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center justify-center w-[225px] h-[50px] bg-[rgba(161,177,219,0.317343)] rounded border-[1px] border-[rgba(85,105,158,0.3);] mr-[8px]">
                    {type}
                  </a>
                ))}
              </div>
              <p className="text-xll mt-[23px] mb-[10px]">Benefits</p>
              <div className="flex text-s text-[#988B49]">
                {benefits.map((benefit, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center justify-center w-[225px] h-[50px] bg-[rgba(255,207,0,0.15)] rounded border-[1px] border-[#FFCF00] mr-[8px]">
                    {benefit}
                  </a>
                ))}
              </div>
            </div>
            {/* A T T A C H E D   I M A G E S  */}
            <div className="overflow-hidden	">
              <h3 className="border-b-[1px] border-[rgb(58,69,98,0.1)] pb-[9px] text-3xl mt-[85px] mb-[22px]">
                Attached images
              </h3>
              <Slider {...settings} className="mb-[85px] md:mb-0 max-w-[800px]">
                {pictures.map((picture, i) => (
                  <div key={i} className="max-w-[200px] max-h-[130px] rounded md:max-w-[150px]">
                    <img
                      src={picture}
                      alt={picture}
                      className="w-[200px] max-h-[130px] rounded object-cover md:max-width-[150px]"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            {/* </div> */}
          </div>
          {/* B U T T O N    R E T U R N */}
          <Link
            to="/"
            className="flex items-center w-[215px] h-[50px] bg-[rgb(56,69,100,0.14);] justify-center rounded md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.66053 0.401157C10.1272 0.915451 10.108 1.72975 9.61804 2.21833L3.37247 8.69844C3.21164 8.8613 3.21164 9.13559 3.37247 9.29845L9.62137 15.7786C10.1105 16.2671 10.128 17.0814 9.66053 17.5957C9.19305 18.1186 8.41725 18.1357 7.92894 17.6386L0.390931 9.96703C-0.114047 9.45274 -0.13238 8.61272 0.350933 8.08129L7.92894 0.358299C8.41809 -0.138852 9.19389 -0.113138 9.66053 0.401157Z"
                fill="#384564"
              />
            </svg>
            <p className="ml-[19px] text-l text-main">RETURN TO JOB BOARD</p>
          </Link>
        </div>
        {/* R I G H T */}
        <div className="pl-[15px] max-w-full">
          <h2 className="title text-3xl text-main border-b-[1px] border-[rgb(58,69,98,0.1)] pb-[9px] mt-[70px] mb-[30px] hidden xl:block">
            Contacts
          </h2>
          <div className="max-w-full">
            <div className="bg-[#2A3047] max-w-full px-[62px] pt-[30px] rounded-t-lg mr-[15px]">
              <h4 className="text-2xl text-[#E7EAF0] max-w-[250px] mb-[8px]">
                Department name. University Hospital Giessen.
              </h4>
              <div className="pb-[30px]">
                <div className="flex items-center">
                  <svg
                    className="mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="18"
                    viewBox="0 0 13 18"
                    fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.5 18C6.5 18 13 11.9706 13 7C13 2.02944 10.0899 0 6.5 0C2.91015 0 0 2.02944 0 7C0 11.9706 6.5 18 6.5 18ZM6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10Z"
                      fill="#878D9D"
                    />
                  </svg>
                  <p className="text-xll text-[#E8EBF3]">{address}</p>
                </div>
                <a href={'tel:' + { phone }} className="text-xll text-[#E8EBF3]">
                  {phone}
                </a>
                <a href={'mailto:' + { email }} className="block text-[#E8EBF3]">
                  {email}
                </a>
              </div>
            </div>
            <Map {...position} />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailsBody;
