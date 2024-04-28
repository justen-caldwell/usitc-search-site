const searchTariffs = keyword => {
  const request = fetch(`http://localhost:3001/reststop/search/?keyword=${keyword}`)
  return request.then(response => response.json())
}

export default searchTariffs
