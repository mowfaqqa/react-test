import React, { ReactNode } from "react";
import Tab from "./Tab";
import ProgressLine from "./ProgressLine/ProgressLine";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./Card";
import { AlertOctagon, BookOpen } from "react-feather";
import axios from "axios";

interface LayoutProps {
  children?: ReactNode;
}
const visualPart = [
  {
    percentage: "30%",
    color: "#FFCC00",
  },
  {
    percentage: "23%",
    color: "#5856D5",
  },
  {
    percentage: "18%",
    color: "#2196F3",
  },
  {
    percentage: "14%",
    color: "#A0B0B9",
  },
];
const AppLayout = (props: LayoutProps) => {
  const TAB_PROPS = React.useMemo(
    () => [
      {
        label: "Initial UI",
        content: <TodayTab />,
      },
      {
        label: "New UI",
        content: <LastHourTab />,
      },
      {
        label: "Yesterday",
        content: <h1>Last hour</h1>,
      },
      {
        label: "Last 3 days",
        content: <h1>Last hour</h1>,
      },
    ],
    []
  );
  return (
    <div className="max-w-[900px] bg-white mx-auto p-8 rounded-lg shadow-md">
      <h1 className="text-[22px] px-2 text-gray-main mb-6">Main metrics</h1>
      <Tab tabs={TAB_PROPS} variant="contained" />
    </div>
  );
};

export default AppLayout;

const TodayTab = () => {
  return (
    <div className="mt-11 text-gray-main">
      <div className="px-2 grid grid-cols-3">
        <div className="flex items-start">
          <span className="bg-lime-main w-[10px] h-[10px] rounded-full mr-[8px] mt-2" />
          <div className="">
            <h4 className="text-gray-main font-semibold text-base">
              Errors: 0,12%
            </h4>
            <h5 className="text-gray-fade font-semibold text-xs">
              Average : 0,11%
            </h5>
          </div>
        </div>
        <div className="flex items-start">
          <span className="bg-lime-main w-[10px] h-[10px] rounded-full mr-[8px] mt-2" />
          <div className="">
            <h4 className="text-gray-main font-semibold text-base">
              Zeroes: 5,12%
            </h4>
            <h5 className="text-gray-fade font-semibold text-xs">
              Average : 0,11%
            </h5>
          </div>
        </div>
        <div className="flex items-start">
          <span className="bg-lime-main w-[10px] h-[10px] rounded-full mr-[8px] mt-2" />
          <div className="">
            <h4 className="text-gray-main font-semibold text-base">
              Timeouts: 0,12%
            </h4>
            <h5 className="text-gray-fade font-semibold text-xs">
              Average : 0,11%
            </h5>
          </div>
        </div>
      </div>
      <div className="my-4">
        <ProgressLine label="" visualParts={visualPart} backgroundColor={""} />
        <div className="grid grid-cols-4">
          <div className="flex items-center">
            <span className="bg-[#FFCC00] w-[10px] h-[10px] rounded-[2px] mr-[8px]" />
            <span className="text-xs font-semibold text-gray-main">
              Error 500: 1256
            </span>
          </div>
          <div className="flex items-center">
            <span className="bg-[#5856D5] w-[10px] h-[10px] rounded-[2px] mr-[8px]" />
            <span className="text-xs font-semibold text-gray-main">
              Error 500: 1256
            </span>
          </div>
          <div className="flex items-center">
            <span className="bg-[#2196F3] w-[10px] h-[10px] rounded-[2px] mr-[8px]" />
            <span className="text-xs font-semibold text-gray-main">
              Error 500: 1256
            </span>
          </div>
          <div className="flex items-center">
            <span className="bg-[#A0B0B9] w-[10px] h-[10px] rounded-[2px] mr-[8px]" />
            <span className="text-xs font-semibold text-gray-main">
              Error 500: 1256
            </span>
          </div>
        </div>
      </div>
      <div className="mt-11">
        <div className="grid grid-cols-3 mb-11 border-b border-gray-200 pb-8">
          <div className="flex items-start">
            <span className="bg-[#2196f3] w-[48px] h-[48px] rounded-full flex justify-center items-center">
              <Image
                src="/assets/filter.svg"
                width={16}
                height={18}
                alt="searches"
              />
            </span>
            <div className="ml-5">
              <h3 className="font-semibold">
                Searches{" "}
                <span className="bg-lime-main w-[10px] h-[10px] rounded-2xl text-xs px-1 text-white">
                  +5%
                </span>
              </h3>
              <div>
                <span className="font-semibold mr-3 text-xl">29 380</span>
                <span className="text-xs text-gray-main">Yesterday</span>
              </div>
              <div>
                <span className="font-semibold mr-3 text-gray-fade text-xl">
                  27 380
                </span>
                <span className="text-xs text-gray-main">last Friday</span>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="font-semibold">Mobile traffic: 100%</h2>
            <h2 className="font-semibold">Web traffic: 100%</h2>
            <p className="text-xs text-gray-fade">
              You get 100% traffic on mobile and desktop devices.
            </p>
            <div className="flex text-xs">
              <p>Help:</p>
              <Link href="#" passHref>
                <span className="mx-1 text-[#2196F3] text-xs">
                  Searches, Pessimisation
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 border-b border-gray-200 pb-8">
          <div className="flex items-start">
            <span className="bg-[#2196f3] w-[48px] h-[48px] rounded-full flex justify-center items-center">
              <Image
                src="/assets/path.svg"
                width={16}
                height={18}
                alt="searches"
              />
            </span>
            <div className="ml-5">
              <h3 className="font-semibold text-[#FF6A67]">
                Clicks{" "}
                <span className="bg-[#FF6A67] w-[10px] h-[10px] rounded-2xl text-xs px-1 text-white">
                  -13%
                </span>
              </h3>
              <div>
                <span className="font-semibold mr-3 text-xl">29 380</span>
                <span className="text-xs text-gray-main">Yesterday</span>
              </div>
              <div>
                <span className="font-semibold mr-3 text-gray-fade text-xl">
                  280
                </span>
                <span className="text-xs text-gray-main">last Friday</span>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="font-semibold text-[#FF6A67] mb-2">CTR: 0,04%</h2>

            <p className="text-xs text-gray-fade">
              Conversion from searches to clicks on all devices.
            </p>
            <div className="flex text-xs">
              <p>Help:</p>
              <Link href="#" passHref>
                <span className="mx-1 text-[#2196F3] text-xs">
                  Help: CTR, Cliks
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-11 grid grid-cols-3 mb-11 border-b border-gray-200 pb-8">
          <div className="flex items-start">
            <span className="bg-[#2196f3] w-[48px] h-[48px] rounded-full flex justify-center items-center">
              <Image
                src="/assets/filter.svg"
                width={16}
                height={18}
                alt="searches"
              />
            </span>
            <div className="ml-5">
              <h3 className="font-semibold">Sales </h3>
              <div>
                <span className="font-semibold mr-3 text-xl">29 24</span>
                <span className="text-xs text-gray-main">Yesterday</span>
              </div>
              <div>
                <span className="font-semibold mr-3 text-gray-fade text-xl">
                  24
                </span>
                <span className="text-xs text-gray-main">Last Friday</span>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="font-semibold">STR: 6.2% </h2>
            <h2 className="font-semibold">Avg. Check: 8 903</h2>
            <p className="text-xs text-gray-fade">
              Conversion from cliks to bookings on all devices.
            </p>
            <div className="flex text-xs">
              <p>Help:</p>
              <Link href="#" passHref>
                <span className="mx-1 text-[#2196F3] text-xs">
                  STR, Bookings, Avg. Check
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LastHourTab = () => {
  const [metricData, setMetricData] = React.useState<any>();
  const fetchJson = () => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMetricData(data);
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };
  React.useEffect(() => {
    fetchJson();
  }, []);

  const lastThreedays = metricData?.errors_last_3days;
  const lastHour = metricData?.errors_last_hour;
  const yesterday = metricData?.errors_yesterday;
  const data = metricData?.data;

  return (
    <div className="mt-11 text-gray-main">
      <div className="px-2 grid grid-cols-3">
        <div className="flex items-start">
          <span className="bg-lime-main w-[10px] h-[10px] rounded-full mr-[8px] mt-2" />
          <div className="">
            <h4 className="text-gray-main font-semibold text-base">
              Errors: 0,12%
            </h4>
            <h5 className="text-gray-fade font-semibold text-xs">
              Average : 0,11%
            </h5>
          </div>
        </div>
        <div className="flex items-start">
          <span className="bg-lime-main w-[10px] h-[10px] rounded-full mr-[8px] mt-2" />
          <div className="">
            <h4 className="text-gray-main font-semibold text-base">
              Zeroes: 5,12%
            </h4>
            <h5 className="text-gray-fade font-semibold text-xs">
              Average : 0,11%
            </h5>
          </div>
        </div>
        <div className="flex items-start">
          <span className="bg-lime-main w-[10px] h-[10px] rounded-full mr-[8px] mt-2" />
          <div className="">
            <h4 className="text-gray-main font-semibold text-base">
              Timeouts: 0,12%
            </h4>
            <h5 className="text-gray-fade font-semibold text-xs">
              Average : 0,11%
            </h5>
          </div>
        </div>
      </div>
      <div className="my-4">
        <ProgressLine label="" visualParts={visualPart} backgroundColor={""} />
        <div className="grid grid-cols-4">
          <div className="flex items-center">
            <span className="bg-[#FFCC00] w-[10px] h-[10px] rounded-[2px] mr-[8px]" />
            <span className="text-xs font-semibold text-gray-main">
              Error 500: 1256
            </span>
          </div>
          <div className="flex items-center">
            <span className="bg-[#5856D5] w-[10px] h-[10px] rounded-[2px] mr-[8px]" />
            <span className="text-xs font-semibold text-gray-main">
              Error 500: 1256
            </span>
          </div>
          <div className="flex items-center">
            <span className="bg-[#2196F3] w-[10px] h-[10px] rounded-[2px] mr-[8px]" />
            <span className="text-xs font-semibold text-gray-main">
              Error 500: 1256
            </span>
          </div>
          <div className="flex items-center">
            <span className="bg-[#A0B0B9] w-[10px] h-[10px] rounded-[2px] mr-[8px]" />
            <span className="text-xs font-semibold text-gray-main">
              Error 500: 1256
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div>
          <h1 className="flex font-bold text-2xl">
            <span>
              <AlertOctagon size={30} />
            </span>{" "}
            Errors
          </h1>
          <h2 className="font-semibold">Last 3 days</h2>
          <Card className="grid grid-cols-3 gap-4 border border-gray-300 p-3">
            {lastThreedays?.map((error: any, index: number) => (
              <div key={index}>
                <h2 className="text-xl text-gray-fade font semibold">
                  count: {error.count}
                </h2>
                <h2 className="text-sm text-gray-main">
                  code: {error.code === null ? "N/A" : error.code}
                </h2>
              </div>
            ))}
          </Card>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h2 className="font-semibold"> Last Hour</h2>
              <Card className="grid grid-cols-1 h-[5.5vh] gap-4 border border-gray-300 p-3">
                {lastHour?.length < 1 ? (
                  <div className="flex justify-center items-center">
                    <h1>No Data available</h1>
                  </div>
                ) : (
                  <>
                    {lastHour?.map((error: any, index: number) => (
                      <div key={index}>
                        <h2 className="text-xl text-gray-fade font semibold">
                          count: {error.count}
                        </h2>
                        <h2 className="text-sm text-gray-main">
                          code: {error.code === null ? "N/A" : error.code}
                        </h2>
                      </div>
                    ))}
                  </>
                )}
              </Card>
            </div>
            <div>
              <h2 className="font-semibold">Yesterday</h2>
              <Card className="grid grid-cols-3 gap-4 border border-gray-300 p-3">
                {yesterday?.map((error: any, index: number) => (
                  <div key={index}>
                    <h2 className="text-xl text-gray-fade font semibold">
                      count: {error.count}
                    </h2>
                    <h2 className="text-sm text-gray-main">
                      code: {error.code === null ? "N/A" : error.code}
                    </h2>
                  </div>
                ))}
              </Card>
            </div>
          </div>
        </div>
    
        <h1 className="flex font-bold items-center text-2xl my-3">
          <span>
            <BookOpen size={30} />
          </span>{" "}
          Bookings
        </h1>
        {data?.map((x: any, index: number) => (
          <div key={index}>
        <Card className="p-3 grid grid-cols-1 mb-4 border border-gray-300">
          <h1 className="py-2 font-semibold text-sm text-[#2196f3]">
            Current Bookings
          </h1>
          <div className="grid grid-cols-3 py-2">
            <div>
              <h3 className="text-gray-main">Last Hour</h3>
              <p className="text-2xl text-gray-fade">
                {x?.bookings_current_last_hour}
              </p>
            </div>
            <div>
              <h3 className="text-gray-main">Yesterday</h3>
              <p className="text-2xl text-gray-fade">
                {x?.bookings_current_yesterday}
              </p>
            </div>
            <div>
              <h3 className="text-gray-main">Last 3 days</h3>
              <p className="text-2xl text-gray-fade">
                {x?.bookings_current_last_3days}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-3 grid grid-cols-1 my-4 border border-gray-300">
          <h1 className="py-2 font-semibold text-sm text-[#FFCC00]">
            Previous Bookings
          </h1>
          <div className="grid grid-cols-3 py-2">
            <div>
              <h3 className="text-gray-main">Last Hour</h3>
              <p className="text-2xl text-gray-fade">7556</p>
            </div>
            <div>
              <h3 className="text-gray-main">Yesterday</h3>
              <p className="text-2xl text-gray-fade">7556</p>
            </div>
            <div>
              <h3 className="text-gray-main">Last 3 days</h3>
              <p className="text-2xl text-gray-fade">7556</p>
            </div>
          </div>
        </Card>
      
          </div>
        ))}
        <div>
        {data?.map((x: any, index: number) => (
          <>
          <div className="grid mt-5 grid-cols-3 mb-11 border-b border-gray-200 pb-8">
            <div className="flex items-start">
              <span className="bg-[#2196f3] w-[48px] h-[48px] rounded-full flex justify-center items-center">
                <Image
                  src="/assets/filter.svg"
                  width={16}
                  height={18}
                  alt="searches"
                />
              </span>
              <div className="ml-5">
                <h3 className="font-semibold">
                  Searches{" "}
                  <span className="bg-lime-main w-[10px] h-[10px] rounded-2xl text-xs px-1 text-white">
                    +5
                  </span>
                </h3>
                <div>
                  <span className="font-semibold mr-3 text-xl">{x?.searches_current_last_hour
}</span>
                  <span className="text-xs text-gray-main">Last Hour</span>
                </div>
                <div>
                  <span className="font-semibold mr-3 text-gray-fade text-xl">
                  {x?.searches_current_yesterday
}
                  </span>
                  <span className="text-xs text-gray-main">Yesterday</span>
                </div>
                <div>
                  <span className="font-semibold mr-3 text-gray-fade text-xl">
                  {x?.searches_current_last_3days
}
                  </span>
                  <span className="text-xs text-gray-main">last 3 days</span>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="font-semibold">Mobile Pessimizer: {x?.mobile_pessimizer}
</h2>
              <h2 className="font-semibold">Web Pessimizer:{x?.web_pessimizer
}</h2>
            </div>
          </div>
          
          </>
        ))}
            {data?.map((x: any, index: number) => (
          <>
          <div className="grid grid-cols-2 border-b border-gray-200 pb-8">
            <div className="flex items-start">
              <span className="bg-[#2196f3] w-[48px] h-[48px] rounded-full flex justify-center items-center">
                <Image
                  src="/assets/path.svg"
                  width={16}
                  height={18}
                  alt="searches"
                />
              </span>
              <div className="ml-5">
                <h3 className="font-semibold text-[#FF6A67]">
                  Clicks{" "}
                 
                </h3>
                <h5>Current Clicks</h5>
                <div>
                  <span className="font-semibold mr-3 text-xl">{x?.clicks_current_last_hour
}</span>
                  <span className="text-xs text-gray-main">Last Hour</span>
                </div>
                <div>
                  <span className="font-semibold mr-3 text-xl">{x?.clicks_current_yesterday
}</span>
                  <span className="text-xs text-gray-main">Yesterday</span>
                </div>
                <div>
                  <span className="font-semibold mr-3 text-gray-fade text-xl">
                   {x?.clicks_current_last_3days
}
                  </span>
                  <span className="text-xs text-gray-main">last 3 days</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
            <h5>Previous Clicks</h5>
                <div>
                  <span className="font-semibold mr-3 text-xl">{x?.clicks_previous_last_hour
}</span>
                  <span className="text-xs text-gray-main">Last Hour</span>
                </div>
                <div>
                  <span className="font-semibold mr-3 text-xl">{x?.clicks_previous_yesterday
}</span>
                  <span className="text-xs text-gray-main">Yesterday</span>
                </div>
                <div>
                  <span className="font-semibold mr-3 text-gray-fade text-xl">
                   {x?.clicks_previous_last_3days
}
                  </span>
                  <span className="text-xs text-gray-main">last 3 days</span>
                </div>
                </div>
          </div>
          
          </>
        ))}
        </div>
      </div>
    </div>
  );
};
