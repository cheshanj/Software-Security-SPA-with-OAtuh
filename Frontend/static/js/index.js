import Home from "./views/home.js";
import Posts from "./views/posts.js";
import About from "./views/About.js";
import Not_Found from "./views/404.js";


const navigateTo = url => {

    history.pushState(null, null, url);
    router();
};


const router = async () => {

    const routes = [
        { path: "/", view: Home },
        { path: "/posts", view: Posts },
        { path: "/about", view: About },
        { path: "/404", view: Not_Found },

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