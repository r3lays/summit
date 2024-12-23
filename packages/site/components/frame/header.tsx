import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="ml-auto flex gap-[4.09px] rounded-[6.543px] border-[0.818px] border-frame-border-primary bg-frame-background-secondary p-[1.636px]">
      <Button
        className={cn(
          theme === "light" ? "bg-white" : "",
          "size-5 p-0 hover:bg-transparent",
        )}
        variant="ghost"
        onClick={() => setTheme("light")}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.93513 12.8001C11.4032 12.8001 12.5933 11.61 12.5933 10.1419C12.5933 8.67387 11.4032 7.48376 9.93513 7.48376C8.46705 7.48376 7.27695 8.67387 7.27695 10.1419C7.27695 11.61 8.46705 12.8001 9.93513 12.8001Z"
            stroke="#787A8E"
            stroke-width="1.22685"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.93512 2.57642V3.80327"
            stroke="#787A8E"
            stroke-width="1.22685"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.2291 5.84802L13.2607 6.81655"
            stroke="#787A8E"
            stroke-width="1.22685"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5007 10.1421H16.2739"
            stroke="#787A8E"
            stroke-width="1.22685"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.2291 14.436L13.2607 13.4675"
            stroke="#787A8E"
            stroke-width="1.22685"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.93512 16.4807V17.7076"
            stroke="#787A8E"
            stroke-width="1.22685"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.60959 13.4675L5.64108 14.436"
            stroke="#787A8E"
            stroke-width="1.22685"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.59639 10.1421H2.36954"
            stroke="#787A8E"
            stroke-width="1.22685"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.60959 6.81658L5.64108 5.84802"
            stroke="#787A8E"
            stroke-width="1.22685"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>
      <Button
        className={cn(
          theme === "dark" ? "bg-[#2A2E46]" : "hover:bg-[#2A2E46]/10",
          "size-5 p-0",
        )}
        variant="ghost"
        onClick={() => setTheme("dark")}
      >
        <svg
          className=""
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7662 12.6213C15.3634 12.7131 14.9449 12.7614 14.5155 12.7614C11.3153 12.7614 8.72084 10.0753 8.72084 6.76163C8.72084 5.85003 8.91719 4.98592 9.26853 4.21216C6.66945 4.80421 4.72452 7.20289 4.72452 10.0718C4.72452 13.3855 7.31898 16.0717 10.5192 16.0717C12.839 16.0717 14.8405 14.6602 15.7662 12.6213Z"
            stroke="#787A8E"
            stroke-width="1.22685"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
}

export default function Header() {
  return (
    <div className="flex items-end justify-between self-stretch rounded-[16px] rounded-b-none border-b-[0.818px] border-frame-border-primary bg-frame-header-background px-[19.63px] py-[8.18px]">
      <div className="flex w-full items-center gap-[8.7px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 43 43"
          fill="none"
        >
          <path
            d="M0.0986328 17.3971C0.0986328 11.5027 0.0986328 8.55553 1.24575 6.30418C2.25479 4.32384 3.86485 2.71377 5.8452 1.70474C8.09654 0.557617 11.0437 0.557617 16.9381 0.557617H25.3578C31.2522 0.557617 34.1994 0.557617 36.4507 1.70474C38.431 2.71377 40.0411 4.32384 41.0501 6.30418C42.1973 8.55553 42.1973 11.5027 42.1973 17.3971V25.8168C42.1973 31.7112 42.1973 34.6583 41.0501 36.9097C40.0411 38.89 38.431 40.5001 36.4507 41.5091C34.1994 42.6562 31.2522 42.6562 25.3578 42.6562H16.9381C11.0437 42.6562 8.09654 42.6562 5.8452 41.5091C3.86485 40.5001 2.25479 38.89 1.24575 36.9097C0.0986328 34.6583 0.0986328 31.7112 0.0986328 25.8168V17.3971Z"
            fill="url(#paint0_linear_1_4560)"
          />
          <g filter="url(#filter0_d_1_4560)">
            <path
              d="M6.67654 31.4738L12.9538 20.0606C13.4082 19.2345 14.5585 19.1405 15.141 19.8818L19.8875 25.9228C20.4782 26.6746 21.6481 26.5652 22.0892 25.717L28.1158 14.1273C28.6723 13.0572 30.2555 13.2376 30.5569 14.4056L34.9616 31.4738"
              stroke="url(#paint1_linear_1_4560)"
              stroke-width="4.60454"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_4560"
              x="3.34367"
              y="10.1289"
              width="35.1627"
              height="24.0989"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.328896" />
              <feGaussianBlur stdDeviation="0.657791" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_4560"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_4560"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1_4560"
              x1="21.1479"
              y1="0.557617"
              x2="21.1479"
              y2="42.6562"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#78BEFF" />
              <stop offset="1" stop-color="#312EC4" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_4560"
              x1="20.819"
              y1="11.0823"
              x2="20.819"
              y2="31.4738"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-[13px] font-medium text-frame-header-text">
          Summit
        </span>
        <ThemeToggle />
      </div>
    </div>
  );
}
