import axios from "axios";

interface fetchTopHeadingProps {
  category?: string;
}

export const fetchTopHeading = async ({ category }: fetchTopHeadingProps) => {
  try {
    const resp = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1693a30b9ead4081affe1504e8d73e69`
    );
    return resp.data;
  } catch (error) {
    return null;
  }
};
