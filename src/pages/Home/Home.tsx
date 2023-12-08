import { Container, Typography } from "@mui/material";
import { Navbar } from "../Components/Navbar";
import { NewsCard } from "../Components/NewsCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { fetchTopHeading } from "../../Utilities/APIs";

export const Home = () => {
  const [newsData, setNewsData] = useState<any[] | null>(null);
  const [category, setCategory] = useState<string>("technology");
  const fetchNews = async () => {
    try {
      const data = await fetchTopHeading({ category });

      setNewsData(data.articles);

      console.log("resp", data);
    } catch (error) {
      console.log(error, "error while fetchingn the news Data");
    }
  };
  useEffect(() => {
    fetchNews();
  }, [category]);
  return (
    <div>
      <Navbar
        onSelectCategory={(e?: string) => {
          e && setCategory(e);
        }}
      />
      <div className="my-8">
        <Typography variant="h3" className="text-center">
          Top Heading
        </Typography>
      </div>
      <Container>
        <div className="flex flex-wrap gap-4 justify-center">
          {newsData &&
            newsData.map((item) => (
              <NewsCard
                description={item.description}
                title={item.title}
                uri={item.urlToImage}
                newsURL={item.url}
              />
            ))}
        </div>
      </Container>
    </div>
  );
};
