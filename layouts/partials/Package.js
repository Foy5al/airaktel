import config from "@config/config.json";
import ImageFallback from "@layouts/components/ImageFallback";
import dateFormat from "@lib/utils/dateFormat";
import readingTime from "@lib/utils/readingTime";
import Link from "next/link";

const Package = ({ Package, i }) => {
  const { summary_length, blog_folder } = config.settings;
  return (
    <div className="overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,.05)]">
      {Package.frontmatter.image && (
        <Link href={`/${blog_folder}/${Package.slug}`}>
          <ImageFallback
            className="w-full object-cover"
            src={Package.frontmatter.image}
            alt={Package.frontmatter.title}
            width={570}
            height={335}
          />
        </Link>
      )}
      <div className="p-8">
        <h2 className="h4">
          <Link
            href={`/${blog_folder}/${Package.slug}`}
            className="block hover:text-primary hover:underline"
          >
            {Package.frontmatter.title}
          </Link>
        </h2>
        <p className="mt-4">
          {Package.content.slice(0, Number(summary_length))}...
        </p>
        <div className="mt-6 flex items-center">
          <div className="overflow-hidden rounded-full border-2 border-white shadow-[0_0_0_2px] shadow-primary">
            <ImageFallback
              src={Package.frontmatter.author.avatar}
              width={50}
              height={50}
              alt="author"
            />
          </div>
          <div className="pl-5">
            <p className="font-medium text-dark">
              {Package.frontmatter.author.name}
            </p>
            <p>
              {dateFormat(Package.frontmatter.date)} -{" "}
              {readingTime(Package.content)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
