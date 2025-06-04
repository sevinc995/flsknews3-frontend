$(document).ready(function () {

    $(document).on('keypress', function (e) {
        if (e.which = 13) {
            let url = `https://apithree-delta.vercel.app/api/news`;

            async function mynews() {
                let responce = await fetch(url);
                let data = await responce.json();

                if (Array.isArray(data.news)) {
                    data.news.forEach(item => {
                        const box = document.createElement('div');
                        box.className = 'col-md-4';
                        box.innerHTML = `
                            <div class="box">
                                <div class="imgbox">
                                    <img src="${item.img}" alt="">
                                </div>
                                <h1>${item.tit}</h1>
                                <h4>${item.des}</h4>
                                <div class="infobox">
                                    <div class="lbtn">Good</div>
                                    <div class="dbtn">Bad</div>
                                </div>
                            </div>
                        `;
                        $(".row").append(box);
                    });
                }
            }

            mynews();
        }
    });

    $("h2").click(async function (e) {
        e.preventDefault();
        let url = `https://apithree-delta.vercel.app/api/news`;

        async function mynews() {
            let responce = await fetch(url);
            let data = await responce.json();
            console.log(data);

            if (Array.isArray(data.news)) {
                data.news.forEach(item => {
                    const box = document.createElement('div');
                    box.className = 'col-md-4';
                    box.innerHTML = `
                            <div class="box">
                                <div class="imgbox">
                                    <img src="${item.img}" alt="">
                                </div>
                                <h1>${item.tit}</h1>
                                <h4>${item.des}</h4>
                                <div class="infobox">
                                    <div class="lbtn">Good</div>
                                    <div class="dbtn">Bad</div>
                                </div>
                            </div>
                        `;
                    $(".row").append(box);
                });
            }
        }

        mynews();
    });
});
