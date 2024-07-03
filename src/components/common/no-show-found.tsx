import { Loader } from "lucide-react";
import { FC } from "react";

interface NoShowFoundProps {}

const NoShowFound: FC<NoShowFoundProps> = ({}) => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="text-center flex flex-col items-center justify-center">
        <Loader size={64} className="animate-spin mb-10" />
        <h1 className="text-3xl font-semibold">Loading...</h1>
        <p>If loading persists, try refreshing the page.</p>
      </div>
    </section>
  );
};

export default NoShowFound;
