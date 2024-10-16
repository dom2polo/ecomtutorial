import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export default function Home() {
  return <MaxWidthWrapper>
    <div className="py-20 max-auto text-center flex flex-col items-center max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Your Market Place for High-Quality{' '}
        <span className="text-gray-600">
          K'nyaw Clothing
        </span>
        .
      </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to HteeShop. Every item on our 
          platform is verified by our team to make 
          sure you have the best shopping experience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6"></div>
        <Link href="/products"> Browse Trending </Link>
    </div>
  </MaxWidthWrapper>
}
