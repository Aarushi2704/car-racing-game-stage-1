class Form{
    constructor(){
this.title = createElement('h2');
this.input = createInput("Name");
this.button = createButton('play');
this.greeting = createElement('h2');
}

hide(){
this.greeting.hide();
this.input.hide();
this.title.hide();
this.button.hide();
}

display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2,displayHeight/8);
    this.input.position(displayWidth/2,displayHeight-265);
    this.button.position(displayWidth/2,displayHeight/2);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value;
        playerCount += 1;
        player.update();
        player.updateCount(playerCount) ;
        greeting.html("Hello!"+player.name);
        this.greeting.position(displayWidth/2,displayHeight/4);
    });

}
}







