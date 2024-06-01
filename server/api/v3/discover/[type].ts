export default defineEventHandler(async (event: any) => {
  const { type }: any = event.context.params;
  const params = new URLSearchParams();

  // Set query parameters
//   params.set("language", language.value);
//   params.set("size", size.value.toString());
//   params.set("include_video", includeVideo.value.toString());
//   params.set("include_adult", includeAdult.value.toString());

  const apiUrl = `https://api.themoviedb.org/3/discover/${type}?api_key=55ee9c566996339d9859d1ec68533e20&${params.toString()}`;

  console.log("🚀 ~ defineEventHandler ~ apiUrl:", apiUrl)
  const data = await $fetch(apiUrl);
  return data;
});
