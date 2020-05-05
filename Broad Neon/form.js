class Form{
    constructor(){
        this.button1 = createButton("Anikin");
        this.button2 = createButton("Darth Vader");
        this.button3 = createButton("Luke Skywalker")
         this.button4 = createButton("Han Solo")
          this.button5 = createButton(" Darth Vader")
           this.button6 = createButton("Palpatine")
           this.score = 0
    }
    display(){
        if(gameState === 0){
        textSize(20)
        text("Star Wars Quiz",150,20);
        line(150,23,290,23)
        text("Who is Lukes Skywalkers fathers name ?",25,50);
        this.button1.position(25,80)
         this.button2.position(100,80)
         text("Who destroys the death star ?",25,150)
        this.button3.position(25,180)
         this.button4.position(140,180);
         text("Who is the evil Emperor ?",25,250);
          this.button5.position(25,280)
         this.button6.position(140,280);
         
         this.button1.mousePressed(()=>{
             this.score = this.score+1;
         });
           this.button3.mousePressed(()=>{
            this.score= this.score+1;
         });
           this.button6.mousePressed(()=>{
             this.score=this.score+1;
         });
            this.button2.mousePressed(()=>{
             this.score=this.score-2;
         });
            this.button4.mousePressed(()=>{
             this.score=this.score-2;
         });
            this.button5.mousePressed(()=>{
             this.score=this.score-3;
         });
        
         
        }
          if(this.score === 3){
             gameState = 1;

         }
         if(this.score < 0){
             gameState = 2;

         }
         if(gameState === 1){
             textFont("forte")
             text("You got all Correct",200,375);
         }
         if(gameState === 2){
             textFont("forte")
             text("INCORRECT",200,375);
         }
    }
}