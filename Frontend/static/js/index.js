import Home from "./views/home.js";


const navigateTo = url => {

    history.pushState(null, null, url);
    router();
};


const router = async () => {

    const routes = [
        { path: "/", view: Home },
        { path: "/posts", view: () => console.log("this is posts!") },
        { path: "/about", view: () => console.log("this is about!") },
        { path: "/404", view: () => console.log("this is 404!") },

    ];

    const potentialMatches = routes.map(route => {

        return {

            route: route,
            isMatch: location.pathname === route.path
        };

    });

    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);

    if (!match) {

        match = {

            route: routes[3],
            isMatch: true
        };
    }

const view = new match.route.view();

document.querySelector("#app").innerHTML = await view.getHtml();

   // console.log(match.route.view());

    console.log(potentialMatches, match);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {

    document.body.addEventListener("click", e => {

        if (e.target.matches("[data-link]")) {

            e.preventDefault();
            navigateTo(e.target.href);
        }

    });

    router();
});