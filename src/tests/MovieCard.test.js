import React from "react";
import { render } from "@testing-library/react";
import MovieCard from "../components/MovieCard";

describe("MovieCard", () => {
  const validProps = {
    adult: false,
    backdrop_path: "123.jpg",
    genre_ids: [21],
    id: 1,
    original_language: "en",
    original_title: "Elf",
    overview:
      "When young Buddy falls into Santa's gift sack on Christmas Eve...",
    popularity: 44.253,
    poster_path: "/oOleziEempUPu96jkGs0Pj6tKxj.jpg",
    release_date: "2003-10-09",
    title: "Elf",
    video: false,
    vote_average: 6.6,
    vote_count: 3336,
  };

  test("renders title prop", () => {
    const { getByText } = render(<MovieCard {...validProps} />);

    expect(getByText("Elf").toHaveClass("title"));
  });

  test("renders overview prop", () => {
    const { getByText } = render(<MovieCard {...validProps} />);

    expect(
      getByText(
        "When young Buddy falls into Santa's gift sack on Christmas Eve..."
      ).toHaveClass("overview")
    );
  });

  test("renders popularity prop", () => {
    const { getByText } = render(<MovieCard {...validProps} />);

    expect(getByText("44.253").toHaveClass("popularity"));
  });

  test("renders release date prop", () => {
    const { getByText } = render(<MovieCard {...validProps} />);

    expect(getByText("2003-10-09").toHaveClass("release_date"));
  });

  test("renders vote average prop", () => {
    const { getByText } = render(<MovieCard {...validProps} />);

    expect(getByText("6.6").toHaveClass("vote_average"));
  });

  test("renders vote count prop", () => {
    const { getByText } = render(<MovieCard {...validProps} />);

    expect(getByText("3336").toHaveClass("vote_count"));
  });
});
