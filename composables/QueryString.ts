export const useQueryString = (params: any) => {
  const queryParts = [];

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(params[key]);
      queryParts.push(`${encodedKey}=${encodedValue}`);
    }
  }

  return queryParts.join("&");
};
