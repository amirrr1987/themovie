export default defineEventHandler(async (event) => {
    const base =
      "https://api.themoviedb.org/3/discover/movie?api_key=55ee9c566996339d9859d1ec68533e20";
  //   const url = "discover/movie?";
  //   console.log(event);
  //   console.log(event);
  //   console.log(event);
  //   const apiKey = "api_key=55ee9c566996339d9859d1ec68533e20";

    const data = await $fetch(base, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

  const { name } = getQuery(event);
  const { age } = await readBody(event);

  const { theMovieApiKey } = useRuntimeConfig();
  return {
    message: `hello api name parameter ${name} ${age} ${theMovieApiKey}`,
    data: data,
  };

});
