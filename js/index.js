const categoryApi = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await res.json();

    const tabContainer = document.getElementById('tab-container');
    console.log(tabContainer)
    data.data.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
    <a onclick="handleNews(('${category.category_id}'))" id"btn-click" class="tab btn normal-case text-lg font-medium bg-slate-200 m-4 ">${category.category}</a> 
    
    `
    // <button onclick="drawingBtn(id)">${category.category}</button>
        tabContainer.appendChild(div)
    })
    // if(tabContainer && data.data){
    //     console.log(data.data)
    // }
    // else{
    //     console.log('no data')
    // }
}




//---------------------- html blog
function htmlBlog(){
    window.open("http://127.0.0.1:5500/blog.html");
}

const handleNews = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    console.log(data)
    // const noData = document.getElementById('no-data');
    // noData.innerHTML = " ";
    if(data.data.length === 0){
        const div = createElement.innerHTML('div')
        div.innerHTML =  `
        <img src="img/onData.svg" alt="">
        <h1 class="text-4xl font-bold">Oops!! Sorry, There is no content here</h1>
        `
        // noData.appendChild(div);
    }else{
        
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
                        <img class="w-full h-[280px]  " src="${news?.thumbnail}" />
                        <div class="absolute left-[250px]  inset-x-9 bottom-52 rounded-md">
                            <div class="max-w-md bg-stone-200">
                                <p onclick="showTime(sec)" class=" ">${news.others.posted_date?"${array[0]}hours and ${array[1]" : ""}
                                
                                </p>
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
                                    <img class="w-14 rounded-full " src="${news?.authors[0].profile_picture}">
                                </div>
                                <h2 class="text-sm font-normal px-4">${news.authors[0].profile_name}</h2>
                                <div class="">
                                ${news?.authors[0].verified ? "<img src='img/varify.svg'>" : " "}
                                </div>
                            </div>
                            <div class="card-actions justify-end">
                            <p>${news.others.views} views</p>
                            
                            
                            </div>
                            
                        </div>
            </div>
        `
        cardHandle.appendChild(div);
    })
}
function showTime(sec){
    let hrs = sec / 36000;
    let min = sec % 3600 / 60;
    let secs = sec % 3600 % 60;
    return `<div>${hrs}hrs ${min}min ${secs}</div>`;
    }
   console.log(showTime, 60000);

handleNews("1000")



categoryApi()

// const s = 5000;

// let h =  s /3600;
// let m = s % 3600 / 60;

// document.getElementById('min').innerHTML = s(h + 'hour' + m + "minute");