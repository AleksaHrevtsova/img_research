export default {
  baseUrl: `https://pixabay.com/api/`,
  imageType: `photo`,
  orientation: `horizontal`,
  page: 1,
  per_page: 3,
  key: `17634856-dc2baf9a621a1f19c64e21778`,

  getImages(query, perPage){
    let params = `?image_type=${this.imageType}&orientation=${this.orientation}&q=${query}&page=${this.page}&per_page=${this.per_page}&key=${this.key}`;
    let url = `${this.baseUrl}${params}`

    return fetch(url)
    .then(response => response.json())

  }
}