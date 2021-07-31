var canvas= new fabric.Canvas("myCanvas");
p_y=10;
p_x=10;
 B_height=30;
 B_width=30;
 var p_object="" ;
 B_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img)
    { 
        p_object=Img;
        p_object.scaleToWidth(150);
        p_object.scaleToHeight(150);
        p_object.set({
            top:p_y,
            left:p_x,
        });
        canvas.add(p_object);
    });


}
function new_img(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    { 
        B_object=Img;
        
        B_object.scaleToWidth(B_width);
        B_object.scaleToHeight(B_height);
        B_object.set({
            top:p_y,
            left:p_x,
        });
        canvas.add(B_object);
    });

}
window.addEventListener("keydown",my_Keydwon);
function my_Keydwon(e){
    KeyPressed=e.keyCode;
    console.log(KeyPressed);
    if(e.shiftKey==true && KeyPressed=="80"){
        console.log("shift & p presed")
        B_height=B_height+10;
        B_width=B_width+10;
        document.getElementById("current_width").innerHTML=B_width;
        document.getElementById("current_height").innerHTML=B_height;
    }
    if(e.shiftKey==true && KeyPressed=="77"){
        console.log("shift & m presed")
        B_height=B_height-10;
        B_width=B_width-10;
        document.getElementById("current_width").innerHTML=B_width;
        document.getElementById("current_height").innerHTML=B_height;
    }
    if(KeyPressed=='38'){
        up();
        console.log("up");
    }
      if(KeyPressed=='40'){
        dwon();
        console.log("dwon");
    }
    if(KeyPressed=='37'){
        left();
        console.log("left");
    }
    if(KeyPressed=='39'){
        right();
        console.log("right");
    }
    if(KeyPressed=='87'){
        new_img("wall.jpg");
        console.log("w");
    }
    if(KeyPressed=='71'){
        new_img("ground.png");
        console.log("g");
    }
    if(KeyPressed=='76'){
        new_img("light_green.png");
        console.log("l");
    }
    if(KeyPressed=='84'){
        new_img("trunk.jpg");
        console.log("t");
    }
    if(KeyPressed=='82'){
        new_img("roof.jpg");
        console.log("r");
    }
    if(KeyPressed=='89'){
        new_img("yellow_wall.png");
        console.log("y");
    }
    if(KeyPressed=='68'){
        new_img("dark_green.png");
        console.log("d");
    }
    if(KeyPressed=='67'){
        new_img("cloud.jpg");
        console.log("c");
    }

}
  function up(){
      if(p_y>=0){
          p_y=p_y-B_height;
          console.log("block image height="+B_height);
          console.log("when up pressed,x="+p_x+",y="+p_y);
          canvas.remove(p_object);
          player_update()
      }
  }
  function dwon(){
    if(p_y<=500){
        p_y=p_y+B_height;
        console.log("block image height="+B_height);
        console.log("when dwon pressed,x="+p_x+",y="+p_y);
        canvas.remove(p_object);
        player_update()
    }
}
function right(){
    if(p_x<=850){
        p_x=p_x+B_width;
        console.log("block image width="+B_width);
        console.log("when right pressed,x="+p_x+",y="+p_y);
        canvas.remove(p_object);
        player_update()
    }
}
function  left(){
    if(p_x>=0){
        p_x=p_x-B_width;
        console.log("block image width="+B_width);
        console.log("when left pressed,x="+p_x+",y="+p_y);
        canvas.remove(p_object);
        player_update()
    }
}
