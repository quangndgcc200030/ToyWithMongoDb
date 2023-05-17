class HomeController {
    index(req, res) {
        res.render("content", {
            title: "Home",
            style: "homepage.css"
        });
    }

    shop(req, res) {
        res.render("home/shop", {
            title: "Shop",
            style: "shop.css"
        });
    }

    about(req, res) {
        res.render("home/about", {
            title: "About",
            style: "about.css"
        })
    }

    contact(req, res) {
        res.render("home/contact", {
            title: "Contact",
            style: "contact.css"
        });
    }
}

module.exports = new HomeController