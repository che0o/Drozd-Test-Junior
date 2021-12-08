document.addEventListener(
    "DOMContentLoaded", function(){
        var menu, lang, flag, country, dropdown;
        menu = document.getElementById("menu");
        lang = document.getElementById("lang-btn");
        flag = lang.firstElementChild;
        country = flag.nextElementSibling;
        dropdown = document.getElementById("lang-dropdown");

        dropdown.addEventListener("click",function(e) {e.stopPropagation()});

        function lang_click_handler(e) {
            lang.removeEventListener("click", lang_click_handler);

            e.stopPropagation();

            menu.addEventListener("click", hide_dropdown);

            lang.className = "lang-active";
            dropdown.style.display = "flex";
        }
        function hide_dropdown() {
            menu.removeEventListener("click", hide_dropdown);

            dropdown.style.display = "none";
            lang.className = "lang-unactive";

            lang.addEventListener("click", lang_click_handler);
        }
        lang.addEventListener("click", lang_click_handler);
        function option_click_handler(e) {   
            var current_option = e.currentTarget;

            var active_option = dropdown.querySelector(".dropdown-option-active");

            current_option.removeEventListener("click", option_click_handler);
            current_option.className = "dropdown-option-active";
            active_option.className = "dropdown-option-unactive";

            active_option.addEventListener("click", option_click_handler);
            var old_country = country.innerHTML;
            var new_country = current_option.dataset.country;
            var option_image = current_option.querySelector("div > img.country-flag")
            flag.src = option_image.src;
            flag.alt = flag.title = option_image.dataset.flag;
            country.innerHTML = new_country;
            for (let localization of menu.querySelectorAll("[data-lang]"))
                if (localization.dataset.lang == old_country) {
                    localization.hidden = true;
                } else if (localization.dataset.lang == new_country) {
                    localization.hidden = false;
                }
            hide_dropdown();
        }
        for (let dropdown_option of dropdown.querySelectorAll(".dropdown-option-unactive"))
            dropdown_option.addEventListener("click", option_click_handler);
    });