export default async function getData(page: string | null) {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page ? page : 1}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    try {
      return await res.json();
    } catch (error) {
      throw new Error("Failed to parse response as JSON");
    }
  }
  