$(document).ready(function () {
    var elias = document.querySelectorAll("#NZoomImg")
    var arr = Array.from(elias)
    arr.map((item, index) => {
        let t = item,
            e = t.getAttribute("data-NZoomscale") <= 0 ? 1 : t.getAttribute("data-NZoomscale"),
            s = t.clientWidth,
            o = t.clientHeight;
        item.parentElement.classList.add(`NZoomContainer${index}`)
        let i = $(`.NZoomContainer${index}`),
            n = item;
        i.mouseenter(function () {
            item.style.cursor = "crosshair"
            item.style.transition = "0.2s"
            item.style.transform = `scale(${e})`
        })
        i.mousemove(function (t) {
            let e = $(this).offset(),
                x = (t.pageX - e.left) / 380 * 100 <= 100 ? (t.pageX - e.left) / 380 * 100 : 100,
                c = (t.pageY - e.top) / 380 * 100 <= 100 ? (t.pageY - e.top) / 380 * 100 : 100;
            item.style.transformOrigin = `${x}% ${c}%`

        })
        i.mouseleave(function () {
            item.style.transition = "0.2s"
            item.style.transform = "scale(1)"
        })
    })

})