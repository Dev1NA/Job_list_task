import React from 'react';
import GoogleMapReact from 'google-map-react';
import avatar from '../assets/avatar.jpg';

const JobDetails = () => {
  return (
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
            <h1 className="max-w-[500px] text-xxl text-main mb-[7px]">
              Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin
              (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)
            </h1>
            <div className="md:flex md:mt-[25px] md:mb-[20px] md:absolute r-[0px] mt-[15px] flex-col-reverse right-[15px]">
              <h4 className="text-2xl text-main">€ 54 000—60 000</h4>
              <p className="text-xll md:text-end">Brutto, per year</p>
            </div>
          </div>
          <p className="text-xll text-[rgba(56,65,93,0.355988);] mb-[7px] md: mt-[30px]">
            Posted 2 days ago
          </p>
        </div>
        {/* T E X T */}
        <div className="text-main text-xll max-w-[725px]">
          <p className="mb-[40px] md:mt-[20px] md:pt-[15px]">
            At WellStar, we all share common goals. That’s what makes us so successful – and such an
            integral part of our communities. We want the same things, for our organization, for our
            patients, and for our colleagues. As the most integrated healthcare provider in Georgia,
            this means we pride ourselves on investing in the communities that we serve. We continue
            to provide innovative care models, focused on improving quality and access to
            healthcare.
          </p>
          {/* R E S P O N S I B I L I T I E S */}
          <div>
            <h4 className="text-2xl mb-[15px]">Responsopilities</h4>
            <p className="mb-[20px]">
              Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is
              currently recruiting for a BC/BE cardiothoracic surgeon to join their existing
              cardiovascular program. This is an opportunity to play a key role on a
              multidisciplinary team of cardiologists and surgeons.
            </p>
            <p className="mb-[20px]">
              The ideal candidate will have five or more years of experience in cardiac surgery.
              This candidate should be facile with off-pump revascularization, complex aortic
              surgery, minimally invasive valve and valve repair, transcatheter valve replacement,
              surgical atrial fibrillation ablation, ventricular assist device placement, and extra
              corporeal membrane oxygenation.
            </p>
            <p className="mb-[20px]">
              Wellstar is one of the largest integrated healthcare systems in the Southeast with 11
              hospitals in Atlanta metro region. With two open heart programs at Kennestone Regional
              Medical Center and Atlanta Medical Center, Wellstar cardiac surgeons perform over 1200
              cardiac procedures per year. The cardiac service line is the only center in Georgia
              with the Joint Commission’s Comprehensive Cardiac Center certification.
            </p>
          </div>
          {/* B E N E F I T S */}
          <div>
            <h3 className="text-2xl mb-[15px]">Compensation & Benefits:</h3>
            <h4>Our physicians enjoy a wide range of benefits, including:</h4>
            <ul className="list-[square] max-w-[450px] mb-[30px] pl-[20px]">
              <li>Very competitive compensation package with bonuses</li>
              <li>Medical, Dental, and Vision Insurance </li>
              <li>Occurrence-based Malpractice Coverage </li>
              <li>Short-term and Long-term Disability Insurance and life insurance</li>
            </ul>
          </div>
          {/* B U T T O N (REPEAT TWICE) */}
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
              <a
                href="#"
                className="flex items-center justify-center w-[225px] h-[50px] bg-[rgba(161,177,219,0.317343)] rounded border-[1px] border-[rgba(85,105,158,0.3);] mr-[8px]">
                Full time
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-[225px] h-[50px] bg-[rgba(161,177,219,0.317343)] rounded border-[1px] border-[rgba(85,105,158,0.3);] mr-[8px]">
                Part time
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-[225px] h-[50px] bg-[rgba(161,177,219,0.317343)] rounded border-[1px] border-[rgba(85,105,158,0.3);]">
                Temporary
              </a>
            </div>
            <p className="text-xll mt-[23px] mb-[10px]">Benefits</p>
            <div className="flex text-s text-[#988B49]">
              <a
                href="#"
                className="flex items-center justify-center w-[225px] h-[50px] bg-[rgba(255,207,0,0.15)] rounded border-[1px] border-[#FFCF00] mr-[8px]">
                Flexible shedule
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-[225px] h-[50px] bg-[rgba(255,207,0,0.15)] rounded border-[1px] border-[#FFCF00] mr-[8px]">
                Relocation assistance
              </a>
            </div>
          </div>
          {/* A T T A C H E D   I M A G E S  */}
          <div>
            <h3 className="border-b-[1px] border-[rgb(58,69,98,0.1)] pb-[9px] text-3xl mt-[85px] mb-[22px]">
              Attached images
            </h3>
            <div className="flex justify-between mb-[85px] md:mb-0">
              <img src={avatar} alt="" />
              <img src={avatar} alt="" />
              <img src={avatar} alt="" />
            </div>
          </div>
        </div>
        {/* B U T T O N    R E T U R N */}
        <a
          href="#"
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
        </a>
      </div>
      {/* R I G H T */}
      <div className="pl-[15px] max-w-full">
        <h2 className="title text-3xl text-main border-b-[1px] border-[rgb(58,69,98,0.1)] pb-[9px] mt-[70px] mb-[30px] hidden xl:block">
          Contacts
        </h2>
        <div className="max-w-full">
          <div className="bg-[#2A3047] max-w-full px-[62px] pt-[30px] rounded mr-[15px]">
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
                <p className="text-xll text-[#E8EBF3]">AKH Wien, 1090 Wien, Währinger</p>
              </div>
              <p className="text-xll text-[#E8EBF3] mb-[8px]">Gürtel 18-20</p>
              <a href="tel:+43014040012090" className="text-xll text-[#E8EBF3]">
                +43 (01) 40400-12090
              </a>
              <a href="mailto:post_akh_diz@akhwien.at" className="block text-[#E8EBF3]">
                post_akh_diz@akhwien.at
              </a>
            </div>
          </div>
          <div className="max-w-full h-[300px] mr-[15px] rounded">
            <GoogleMapReact
              options={{ mapId: '624c545343341e2' }}
              bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
              defaultCenter={{ lat: 50.450001, lng: 30.523333 }}
              defaultZoom={11}
              zoom={11}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
