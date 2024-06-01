export const useConfiguration = async () => {
  const data = await useFetch('/api/v3/configuration')
  return ref(data)
}
