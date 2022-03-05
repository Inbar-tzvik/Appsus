export default {
    template: `
<section class="home-page app-main">
    <h1>All Apps In One place</h1>
    <div class="img-home">
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" checked />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <div class="main-carousel" id="carousel">
            <div class="item"><img src="assets/img/book.jpeg"/></div>
            <div class="item"><img src="assets/img/note.jpeg"/></div>
            <div class="item"><img src="assets/img/mail.jpeg"/></div>
            <div class="item"><img src="assets/img/calendar.jpeg"/></div>
            <div class="item"><img src="assets/img/maps.jpeg"/></div> 
        </div>
    </div>
        <div class="home-footer">
            <h2>In one place you can have it ALL</h2>
            <div class="logo footer-logo">
                <i class="fa-brands fa-redhat"></i>                
                <h3>Appsus</h3>
            </div>
            <div class="social-links">
                <div>
                    <a href="https://github.com/Inbar-tzvik"><i class="fa-brands fa-github"></i></a>
                    <div>Inbar</div>
                </div>
                <div>
                    <a href="https://github.com/Talkoosh"><i class="fa-brands fa-github"></i></a>
                    <div>Tal</div>
                </div>
            </div>
            
        </div>
</section>
    `,
};
