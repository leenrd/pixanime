import { ShieldAlert } from "lucide-react";
import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="text-center flex flex-col items-center justify-center">
        <ShieldAlert size={64} className="animate-ping mb-20 mr-5" />
        <h1 className="text-3xl font-semibold">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Pixlens
          </span>{" "}
          is under development...
        </h1>
        <p className="max-w-lg mt-5">
          This allows you to upload a picture or a screenshot of an anime clip
          and Pixlens will find the show for you. Look forward to it! 🥸
        </p>
      </div>
    </section>
  );
};

export default Page;
