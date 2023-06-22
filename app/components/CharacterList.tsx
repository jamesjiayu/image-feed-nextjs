import { Character } from "../types";
import Image from 'next/image'
import React from "react";
export default function CharacterList({
  characters,
}: {
  characters: Character[];
}) {
  //console.log(characters);
  return (
    <div>
      <ul className="flex flex-wrap ">
        {characters.map((character) => (
          <li key={character.id} className="flex flex-col w-1/6 px-2">
            <Image src={character.image} 	width={500} height={500} alt={character.name}/>
            <p> {character.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
