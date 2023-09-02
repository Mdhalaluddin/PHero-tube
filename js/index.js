const categoryApi = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await res.json();

    const tabContainer = document.getElementById('tab-container');
    // console.log(tabContainer)
    data.data.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
    <a onclick="handleNews(('${category.category_id}'))" id"btn-click" class="tab btn normal-case text-lg font-medium bg-slate-200 m-4 ">${category.category}</a> 
    
    `
        tabContainer.appendChild(div)
    })

}




//---------------------- html blog
function htmlBlog() {
    window.open("http://127.0.0.1:5500/blog.html");
}

// --------------------news category------------
const handleNews = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();

    // ---------------------no data----------------
    const noDataPage = document.getElementById('no-data')
    noDataPage.innerHTML = "";
    if (data.data.length === 0) {
        const nav = document.createElement('nav');
        nav.innerHTML = `
                <img class="mt-8 lg:mx-60 mx-36" src="img/onData.svg" alt="">
                <h1 class="text-4xl font-bold mt-8 ">Oops!! Sorry, There is no content here</h1>
                `
        noDataPage.appendChild(nav);
    }
    const cardHandle = document.getElementById('card-container')
    cardHandle.innerHTML = " ";
    data.data.forEach((news) => {
        console.log(news)
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card w-full item-center mt-8 h-4/5 bg-base-100 shadow-xl">
                    <figure class="flex h-3/4">
                        <div class="hero">
                         <img class="w-full h-[280px]" src="${news?.thumbnail}" />
                        <div class="absolute left-[195px]   bottom-48 rounded-md">
                            <div class="max-w-md bg-stone-200">
                                <p> ${showTime(news.others.posted_date)|| ''}</p>
                            </div>
                        </div>
                        </div>
                    </figure>
                        <div class="card-body">
                            <h2 class="card-title">
                            ${news?.title}
                            </h2>
                            <div class="flex items-center">
                                <div class="rounded-full w-14">
                                    <img class="w-14 h-14 rounded-full " src="${news?.authors[0].profile_picture}">
                                </div>
                                <h2 class="text-sm font-normal px-4">${news.authors[0].profile_name}</h2>
                                <div class="">
                                ${news?.authors[0].verified ? "<img src='img/varify.svg'>" : " "}
                                </div>
                            </div>
                            <div class="card-actions justify-end">
                            <p id="views-id" onclick="sortBtn(data)">${news.others.views} views</p>
                            </div>  
                        </div>
            </div>
        `
        cardHandle.appendChild(div);
    })
}

// const sortViewsBtn = async (categoryFiled) => {
//     const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryFiled}`);
//     const data = await res.json();
//     const card = data.data;
//     console.log(data.data)
//     for (let i = 0; i< card.length; i++){
//         card[i].news.others.views =parseInt(card[i].news.others.views);
//         console.log(card)
//     }

// }

// const shortViewsBtn = (data)=>{
//     let newArray =data;
//     console.log(newArray)
//     newArray.sort((a,b)=>{
//         return parseFloat(b.others.views)-parseFloat(a.others.views);
//     })
// }

function showTime(sec){
    const s = parseFloat(sec)
    let hrs =Math.floor(s / 3600)|| "";
    let min = Math.floor(s % 3600 / 60)|| "";
    let hrs1 = hrs ? `<span>${hrs}hrs</span>`: "";
    let min1 = min ? `<span>${min}min ago</span>`: "";
    return `<div>${hrs1} ${min1}</div>`;
    }

handleNews("1000")

categoryApi()
