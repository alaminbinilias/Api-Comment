// console.log("Connected");


const loadcomment=()=>{
     const url='https://jsonplaceholder.typicode.com/comments';
     fetch(url)
     .then(response => response.json())
    .then(data =>{
    commentsdata(data);
     });
}

// {postId: 1, id: 1, name: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'laudantium enim quasi est quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium'}


const commentsdata= (data)=>{

    const containeer = document.getElementById('contain');
    console.log(containeer);
    for(it of data){
        // console.log(it);
        const dv=document.createElement('div');

        dv.innerHTML=`
        
        <div id="mn_dv">
            <h1>${it.name}</h1>
            <p>${it.body}</p>
        </div>
        `

        containeer.appendChild(dv);
    }

}