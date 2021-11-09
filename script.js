window.onload = function()
{
    function getSrcName(name)
    {
        var asset = new Image();
        var asset_number = Math.floor(Math.random()*3) + 1;
        var asset_name = "assets/" + name + asset_number + ".png";
    
        asset.src = asset_name;
        return asset;
    }

    function buildAsset()
    {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = 1024;
        canvas.height = 1024;

        ctx.drawImage(background, 0, 0);
        ctx.drawImage(clothes, 0, 0);
        ctx.drawImage(skull, 0, 0);
        ctx.drawImage(glasses, 0, 0);
        ctx.drawImage(thing, 0, 0);
    }
    
    background = getSrcName("background");
    skull = getSrcName("skull");
    clothes = getSrcName("clothes");
    glasses = getSrcName("glasses");
    thing = getSrcName("thing");

    background.onload = function()
    {
        buildAsset(); 
    }

    skull.onload = function()
    {
        buildAsset(); 
    }

    clothes.onload = function()
    {
        buildAsset(); 
    }

    glasses.onload = function()
    {
        buildAsset(); 
    }

    thing.onload = function()
    {
        buildAsset(); 
    }
}