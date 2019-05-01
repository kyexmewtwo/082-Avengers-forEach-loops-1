var avengerPics = [
    "https://vignette.wikia.nocookie.net/ironman/images/9/96/Iron-Man-AOU-Render.png/revision/latest?cb=20150306195832",
    "https://pre00.deviantart.net/9e01/th/pre/f/2018/013/a/f/black_panther__1____png_by_captain_kingsman16-dbzwfo1.png",
    "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/fd/AoU_Captain_America_2shield-guard.png/revision/latest?cb=20150310052018",
    "https://pre00.deviantart.net/8197/th/pre/i/2018/013/a/b/avengers_infinity_war___black_widow_png_by_mintmovi3-dbzx3un.png",
    "https://unixtitan.net/images/marvel-transparent-hawkeye-2.png",
    "https://i.pinimg.com/originals/43/31/28/43312819a5838b9ec92e88f2211d0c3d.png",
    "https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1dbc1935-6542-4ee3-822f-135cff4ba62c/dc9rwk8-1606deef-f336-4ef0-bf5c-1a1399e3210e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFkYmMxOTM1LTY1NDItNGVlMy04MjJmLTEzNWNmZjRiYTYyY1wvZGM5cndrOC0xNjA2ZGVlZi1mMzM2LTRlZjAtYmY1Yy0xYTEzOTllMzIxMGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HwOD-En-LsGRq_Zx4DT0OvB_HeqcmWz0Zr43SFrNZiw",
];


$("button").click(function() {
    avengerPics.forEach(function(pics){
    $("body").append("<img src=" + pics + ">");
    avengerNames.forEach(function(ics){
    $("body").append("<img src=" + ics + ">");
});
});
});

