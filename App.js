
const data = [{ "title": "John Wick: Chapter 3", 
"cast": ["Keanu Reeves", "Halle Berry", "Laurence Fishburne"], 
"poster": "https://www.dmarge.com/wp-content/uploads/2018/05/john-wick-3.jpg",
 "trailer": "JohnWick.html"},
{ "title": "Avengers: End Game", 
"cast": ["Robert Downey Jr", "Chris Hemsworth", "Mark Ruffalo"],
"post": "https://2.bp.blogspot.com/-CG6HNQyqfgU/XCDvj-laIFI/AAAAAAAAAfU/aw2zCkMUSVsTLtkbTxWC3ULIAzJncXJJwCLcBGAs/s1600/Avengers4_Wallpaper_HD_MarvelSpoilerOficial%25C2%25A92018-2019.png" ,
"trailer": "Avengers.html"},
{ "title": "Godzillar: King Of Monsters", 
"cast": ["Kyle Chandler", "Vera Farmiga", "Millie Bobby Brown"], 
"poster": "https://cdn1us.denofgeek.com/sites/denofgeekus/files/2018/07/godzilla-king-of-the-monsters.jpg",
 "trailer": "Godzillar.html"}
]

var aData = [];

class Movie {
    constructor(title, cast, poster, trailer) {
        this.title = title;
        this.cast = cast;
        this.poster = poster;
        this.trailer = trailer;
    }
    render() {
        return `
        <div class="col s4 m4">
            <div class="card">
                <div class="card-image">
                    <img class="card-img-top" src="${this.poster}" style="height:300px">                          
                </div>

                <div class="card-body">
                       <div class="card-title" style="text-align: center">
                            <h5 class="card-title">${this.title}</h5>                         
                        </div>
                        <div class="card-cast" style="text-align: center">
                            <p class="card-text">${this.cast}</p>                    
                        </div>         
                        <div class="card-action"  style="text-align: center; margin-top: 5px;">
                            <a href="${this.trailer}" class="btn btn-primary" target="_blank" >See Trailer</a>
                        </div>
                </div>                      
            </div>
        </div>
        `
    }

}



for (let index in data) {

    let a = Object.values(data[index]);
    
    let title = a[0];
    let cast = a[1].toString();
    let poster = a[2];
    let trailer = a[3];

    const movie = new Movie(title, cast, poster, trailer);        

    document.querySelector("#movie-template").innerHTML = movie.render();

    const templateTag = document.getElementById("movie-template");
    const productListView = document.getElementById("movie-list");
    const layout = templateTag.innerHTML;
    productListView.innerHTML += layout;          
}