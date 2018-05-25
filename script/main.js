"use strict";
class Locations {
    constructor(title, city, address, zipCode, img, createdDate) {
        this.title = title;
        this.city = city;
        this.address = address;
        this.zipCode = zipCode;
        this.img = img;
        this.createdDate = createdDate;
    }
    ;
    render() {
        let formatedDate = moment(this.createdDate).format('dddd, MMMM Do YYYY, h:mm a');
        document.querySelector('.row').innerHTML += `
        <div class="card col-lg-3 col-md-6">
            <img class="card-img-top d-none d-md-block" src="${this.img}" alt="">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">
                    Address: ${this.address} ${this.city} ${this.zipCode}<br>
                    Created at: ${formatedDate}
                </p>
            </div>
        </div>
        `;
    }
    ;
}
;
class Restaurants extends Locations {
    constructor(title, city, address, zipCode, img, createdDate, telNumber, type, webAddress) {
        super(title, city, address, zipCode, img, createdDate);
        this.telNumber = telNumber;
        this.type = type;
        this.webAddress = webAddress;
        this.telNumber = telNumber,
            this.type = type,
            this.webAddress = webAddress;
    }
    ;
    render() {
        let formatedDate = moment(this.createdDate).format('dddd, MMMM Do YYYY, h:mm a');
        document.querySelector('.row').innerHTML += `
        <div class="card col-lg-3 col-md-6">
            <img class="card-img-top d-none d-md-block" src="${this.img}" alt="">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">
                    Address: ${this.address}, ${this.city} ${this.zipCode}<br>
                    Telephone Number: ${this.telNumber}<br>
                    Cuisine: ${this.type}<br>
                    Web site: ${this.webAddress}<br>
                    Created at: ${formatedDate}
                </p>
            </div>
        </div>
        `;
    }
    ;
}
;
class Events extends Locations {
    constructor(title, city, address, zipCode, img, createdDate, eventDate, eventTime, ticketPrice) {
        super(title, city, address, zipCode, img, createdDate);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice;
        this.eventDate = eventDate,
            this.eventTime = eventTime,
            this.ticketPrice = ticketPrice;
    }
    ;
    render() {
        let formatedDate = moment(this.createdDate).format('dddd, MMMM Do YYYY, h:mm a');
        document.querySelector('.row').innerHTML += `
        <div class="card col-lg-3 col-md-6">
            <img class="card-img-top d-none d-md-block" src="${this.img}" alt="">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">
                    Address: ${this.address} ${this.city} ${this.zipCode}<br>
                    Event Date: ${this.eventDate}<br>
                    Event Time: ${this.eventTime}<br>
                    Ticket price: ${this.ticketPrice}&euro;
                    Created at: ${formatedDate}
                </p>
            </div>
        </div>
        `;
    }
    ;
}
;
let church = new Locations("Karlskirche", "Vienna", "Karlsplatz 1", 1010, "/images/church.jpg", new Date('2013-02-08 09:30'));
let zoo = new Locations("Zoo", "Vienna", "Maxingstraße 13b", 1130, "/images/zoo.jpg", new Date('2011-11-20 10:00'));
let lemon = new Restaurants("Lemon Leaf", "Vienna", "Kettenbrückengasse 19", 1050, "/images/lemonleaf.png", new Date('2003-05-10 12:00'), "+43(1)581230", "Thai", "www.lemonleaf.at");
let sixta = new Restaurants("Sixta", "Vienna", "Schönbrunner Straße 21", 1050, "/images/sixta.png", new Date("2013-02-08 09:30"), "+43 1 58 528 56 | +43 1 58 528 56", "Viennese", "http://www.sixta-restaurant.at/");
let kris = new Events("Kris Kristofferson", "Vienna", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", 1150, "/images/kris.jpeg", new Date("2008-11-17 19:30"), "Fr 15 Jun", "20:00", 58.50);
let lenny = new Events("Lenny Kravitz", "Vienna", "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", 1150, "/images/lenny.jpg", new Date("2018-02-18 03:27"), "Sat, 09.06.2018 ", "19:30", 47.80);
let items = [church, zoo, lemon, sixta, kris, lenny];
function sortByDateAsc(array, key) {
    return array.slice().sort(function (a, b) {
        var x = new Date(a[key]).getTime();
        var y = new Date(b[key]).getTime();
        return x - y;
    });
}
;
function sortByDateDesc(array, key) {
    return array.slice().sort(function (a, b) {
        var x = new Date(a[key]).getTime();
        var y = new Date(b[key]).getTime();
        return y - x;
    });
}
;
function displayItems(arr) {
    arr.forEach((item) => {
        item.render();
    });
}
;
displayItems(items);
let itemsAsc = sortByDateAsc(items, "createdDate");
let itemsDesc = sortByDateDesc(items, "createdDate");
let buttonAsc = document.getElementById('asc');
let buttonDesc = document.getElementById('desc');
buttonAsc.addEventListener('click', () => {
    document.querySelector('.row').innerHTML = "";
    displayItems(itemsAsc);
});
buttonDesc.addEventListener('click', () => {
    document.querySelector('.row').innerHTML = "";
    displayItems(itemsDesc);
});
