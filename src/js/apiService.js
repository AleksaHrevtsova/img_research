export default {
  baseUrl: `https://pixabay.com/api/`,
  imageType: `photo`,
  orientation: `horizontal`,
  q: ``,
  page: 1,
  per_page: 3,
  key: `17634856-dc2baf9a621a1f19c64e21778`,

  getImages(){
    let params = `?image_type=${this.imageType}&orientation=${this.orientation}&q=${this.q}&page=${this.page}&per_page=${this.per_page}&key=${this.key}`;
    let url = `${this.baseUrl}${params}`

    return fetch(url)
    .then(response => response.json())

  },
  get perPage(){
    return this.per_page
  },
  set perPage(val){
    return this.per_page = val
  },
  get query(){
    return this.q
  },
  set query(val){
    return this.q = val
  },

  setPage(){
    this.page += 1
    // console.log(this.page)
    // return this.page
  }
}