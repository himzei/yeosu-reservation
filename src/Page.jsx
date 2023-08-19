import { Helmet, HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import { mainCarouselData } from "./lib/mainCarouselData";
import ResponsiveCarousel from "./components/ResponsiveCarousel";
import { Button, Input } from "@material-tailwind/react";

export default function Page() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>여수엑스포</title>
      </Helmet>
      <Layout>
        <div className="w-full h-[450px] overflow-hidden">
          <ResponsiveCarousel data={mainCarouselData} />
        </div>
        {/* 7xl */}
        <div className="py-16 w-full flex justify-center">
          <div className="max-w-5xl w-full">
            hello
            <Button>Button</Button>
            <Input label="Username" />
          </div>
        </div>
      </Layout>
    </HelmetProvider>
  );
}
