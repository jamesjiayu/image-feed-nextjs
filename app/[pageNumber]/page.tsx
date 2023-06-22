import { Character } from "../types";
import CharacterList from "../components/CharacterList";
import getData from "../api/getData";
import Pagination from "../components/MyPagination";
import React from "react";
export default async function CharactersPage({
  params: { pageNumber },
}: {
  params: {
    pageNumber: string;
  };
}) {
  const res = await getData(pageNumber.toString());
  const maxPage = res.info.pages - 1;
  const characters: Character[] = res.results;
  return (
    <main className="flex flex-col items-center">
      <h1 className="my-5 text-center text-xl"> Image Feed </h1>
      <CharacterList characters={characters} />
      <Pagination currentPage={+pageNumber} maxPage={maxPage} />
    </main>
  );
}
