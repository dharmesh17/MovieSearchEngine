// pager functionality
function pagenxt(e) {
    callApi(pagenum += 1);
    document.getElementById("pagenum").innerHTML = pagenum;
};

function pageprv(e) {
    if (pagenum > 1) {
        callApi(pagenum -= 1);
        document.getElementById("pagenum").innerHTML = pagenum;
    }
};


var model = {
    watermark: "dharmeshgurnani",
    footerlinks: [
        {
            text: "Github",
            href: "https://github.com/dharmeshgurnani",
            faicon: "fa-github"
        },
        {
            text: "Linkedin",
            href: "https://in.linkedin.com/in/dharmeshgurnani",
            faicon: "fa-linkedin-square"
        },
        {
            text: "Portfolio",
            href: "https://dharmeshgurnani.github.io/portfolio",
            faicon: "fa-desktop"
        },
        {
            text: "Trailblazer",
            href: "https://trailblazer.me/dharmeshgurnani",
            faicon: "fa-id-card"
        }
    ]
};

var template = Handlebars.compile(`
    <!-- FOOTER -->
    <footer class="footer-distributed">
        <div class="containor pageingnation">
            <a id="Btnprv" class="previous" onclick="pageprv()">
                <i class="fa fa-backward" aria-hidden="true"></i>
            </a>
            <a id="pagenum" class="pagenum">1</a>
            <a id="Btnnext" class="next" onclick="pagenxt()">
                <i class="fa fa-forward" aria-hidden="true"></i>
            </a>
        </div>
        <div class="footer-left">
            <p class="footer-links">
                {{#each footerlinks}}
                    <a class="link" rel="nofollow" href="{{{this.href}}}">
                        <i class="fa {{{this.faicon}}}" aria-hidden="true"></i>
                        {{{this.text}}}
                    </a>
                {{/each}}
            </p>
            <p> {{{watermark}}}</p>
        </div>

    </footer>
`);

document.write(template(model));