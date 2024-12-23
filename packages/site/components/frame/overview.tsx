import usePage from "@/hooks/use-page";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "../ui/button";

function Actions() {
  const theme = useTheme().theme;
  const { title, favicon, appTitle } = usePage();
  /**
   * Not sure why gradients dont seem to be working when applied as a CSS variable.
   */
  return (
    <div
      style={{
        background:
          theme === "light"
            ? "radial-gradient(65.97% 131.94% at 50% -31.94%, rgba(44, 76, 241, 0.22) 0%, rgba(255, 255, 255, 0.00) 100%)"
            : "radial-gradient(65.97% 131.94% at 50% -31.94%, rgba(33, 57, 186, 0.22) 0%, rgba(0, 0, 0, 0.00) 100%)",
      }}
      className="flex w-full items-center justify-between rounded-[6.543px] border border-frame-border-primary bg-frame-gradient-action py-[9.81px] pl-[13.09px] pr-[19.63px]"
    >
      <div className="flex items-center gap-[8.179px]">
        <div className="flex size-9 items-center justify-center rounded-[748.99px] border border-[rgba(28,33,60,0.10)]/10 bg-[rgba(28,33,60)]/[0.04] pb-[1.50px] pl-[1.85px] pr-[1.50px] pt-[1.85px] dark:border-white/10 dark:bg-white/5">
          <div className="inline-flex flex-col items-start justify-start gap-[10.71px] self-stretch p-[5.35px]">
            {favicon ? (
              <Image width={21} height={21} src={favicon} alt={title} />
            ) : (
              <svg
                className="rounded-full"
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
            )}
          </div>
        </div>
        <div className="flex flex-col items-start">
          <span className="truncate text-[11.451px] leading-[19.63px] tracking-[-0.229px] text-frame-text-primary">
            {title}
          </span>
          <p className="text-[9.815px] tracking-[-0.196px] text-[#566FF1]">
            {appTitle}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[4.09px]">
        <Button variant="primary" size="primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M9.92078 9.7959C9.92078 8.25452 11.1703 7.00498 12.7117 7.00498H21.7822C23.3236 7.00498 24.5731 8.25452 24.5731 9.7959V27.2391L17.2469 20.9596L9.92078 27.2391V9.7959Z"
              fill="#566FF1"
            />
          </svg>
        </Button>
        <Button variant="primary" size="primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M3.58078 10.0919V11.0679C3.58078 12.146 4.45473 13.0199 5.53279 13.0199H11.0635C12.1416 13.0199 13.0155 12.146 13.0155 11.0679V10.0919"
              stroke="#787A8E"
              stroke-width="0.976006"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.29813 9.76722V3.58521"
              stroke="#787A8E"
              stroke-width="0.976006"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.18347 7.48914L8.29837 9.76672L10.4133 7.48914"
              stroke="#787A8E"
              stroke-width="0.976006"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
        <Button
          className="w-fit px-[6.543px] dark:bg-frame-background-primary"
          variant="primary"
          size="primary"
        >
          <p className="text-[10.633px] font-semibold tracking-[-0.213px] text-frame-text-secondary">
            PDF
          </p>
        </Button>
      </div>
    </div>
  );
}

export default function Overview() {
  return (
    <div className="flex flex-col items-start gap-[4.09px] self-stretch bg-frame-background-primary px-[9.81px] py-[8.18px]">
      <span className="text-[13.086px] font-semibold leading-[19.63px] tracking-[-0.262px] text-frame-text-primary">
        Overview
      </span>
      <Actions />
    </div>
  );
}
