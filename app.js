const $searchInput = $('#text')
const $gifArea = $('#gif')



   $("form").on("submit", async function(e) {
       e.preventDefault()
       const searchTerm = $searchInput.val();
       $searchInput.val("");
       const apiKey = 'Tcoq2krbE1kUfXXLAT3KqMFxHaMfVF9c'
       const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&rating=g&api_key=${apiKey}`
       let response = await axios.get(url)

       let numResults = response.data.data.length;
       if (numResults) {
         let randomIdx = Math.floor(Math.random() * numResults);
         const gifUrl = response.data.data[randomIdx].images.original.url

       const gifImage = new Image();
       gifImage.src = gifUrl;
       $gifArea.append(gifImage)
       }
   console.log(response)
   })   

const btn = document.querySelector('#remove')
btn.addEventListener('click',function(){
  $gifArea.empty()
})
  






