const categoryApi = async ()=>{
   const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
   const data = await res.json();
    
   const tabContainer = document.getElementById('tab-container');
   data.data.forEach((category)=>{
    const div = document.createElement('div');
    div.innerHTML = `
    <a onclick="handleNews(('${category.category_id}'))" id"btn-click" class="tab">${category.category}</a> 
    `
    tabContainer.appendChild(div)
   })

    // console.log(data.data)
}
const handleNews = async (categoryId)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    // console.log(data)

    const cardHandle = document.getElementById('card-container')
    data.data.forEach((news)=>{
        console.log(news)
        console.log(news?.authors[0].profile_picture);

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-96 h-4/5 bg-base-100 shadow-xl">
                    <figure class="flex h-3/4">
                    <img class="w-full " src="${news?.thumbnail}" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">
                        ${news?.title}
                        </h2>
                        <div class="flex items-center">
                            <div class="rounded-full w-14">
                                <img class="rounded-full " src="${news?.authors[0].profile_picture}">
                            </div>
                            <h2 class="text-sm font-normal px-4">${news.authors[0].profile_name}</h2>
                            <div class="">
                            ${news?.authors[0].verified? "<img src='img/varify.svg'>" : " " }
                            </div>
                        </div>
                        <div class="card-actions justify-end">
                        <p>${news.others.views} views</p>
                        </div>
                    </div>
                </div>
        `
        cardHandle.appendChild(div)
    })

}



handleNews()







categoryApi()