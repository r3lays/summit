import Header from "./header";
import Headings from "./headings";
import LanguageSelector from "./language-selector";
import Overview from "./overview";
import Summary from "./summary";

export default function Frame() {
  return (
    <div
      style={{
        boxShadow: "0px 7.016px 7.016px 0px rgba(0, 0, 0, 0.25)",
      }}
      className="mx-10 flex w-fit min-w-[292px] flex-col items-start rounded-[16px] border-[0.818px] border-frame-border-primary bg-frame-background-primary shadow-md"
    >
      <Header />
      <Overview />
      <LanguageSelector />
      <Headings />
      <Summary />
    </div>
  );
}
