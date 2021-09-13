var tela = 1;
var y1 = 150; //usado para o menu do jogo
var x = 2 //usado pra movimentar as peças
var y = 5 //usado pra movimentar as peças
var i;
var papeldeparede;
controle = false

function setup() {
  createCanvas(600, 400);
  papeldeparede = loadImage('pp.jpg');
  cm = loadImage('cm.png');
  cd = loadImage('creditos.png')
  tabuleiro = loadImage('Screenshot_5.png')
  peça = loadImage('peça.png')
  apelo = loadImage('apelo.png')
}

function draw() {
  if(tela==1){
  
    background(papeldeparede);
  textSize(25);//TAMANHO DO TEXTO
  textAlign(CENTER);//ALINHAMENTO
  fill(0,0,0);//PREENCHIMENTO rgb
  rect(10,y1,120,30);//BORDAS
  fill(255,255,255);
  text("ENGINEER HÉRCULES",290,50);
  fill(255,0,0)
  text("vamos lá !", 70,173);
  fill(0,255,255)
  text("como jogar",70,223);
  text("credits",70,273);
  //meus comandos
  if(keyIsPressed==false){
    controle=false
  }
  if(controle==false){
    if(keyIsDown(UP_ARROW)&&(y1 <= 250 && y1 > 150)){
       y1 -= 50;
       controle=true
       }
    if(keyIsDown(ENTER)&& y1==150 ){
      tela = 2
      controle = true
    }else if(keyIsDown(ENTER)&& y1 == 200){
      tela = 3
      controle = true
    }else if(keyIsDown(ENTER)&& y1 == 250){
      tela = 4
      controle = true
    }
    if(keyIsDown(DOWN_ARROW)&& (y1<250 && y1>=150)){
      y1+=50
      controle=true
      }
    }
  
  }//vamos lá
  else if(tela==2){
      background(apelo);
      fill(255,255,255);
      textSize(20)
      text("Para voltar ao Menu pressione ESC",170,50);
      text("Pra topar pressione ESPAÇO",170,350)
      if(keyCode==ESCAPE){tela=1}
      if(keyCode==32){tela=5}
  }
   //codigo do jogo
  else if(tela==5){  
    background(tabuleiro);
  image(peça,x,y,40,40);
      if( y<230 && x==2  ){y=y+1}
      else if(y<340 && x==2){
  text("a) 4           b) 2           c) 10          d)  8",250,50)
  fill(255,255,255);
  textSize(20)
  text("Qual o valor da expressão (3x-6=0) ?",250,20);  
  
      if(keyCode==66){
  y=y+1}//AS DOBRAS
    }else if(y==340 && x<= 92){
      x=x+1
    }else if(y>290 && x==93){
      y=y-1
    }//segunda pergunta
  else if (y>=70 && x==93){
    textAlign(LEFT)
    text("Há um pato entre dois patos, um pato atrás de um pato e um\n pato na frente de outro pato. De quantos patos estamos \nfalando?",50,15);
    text("a)  3      b)  5      c)  10      d)  1",150,55)
  fill(255,255,255);
  textSize(15)
  if(keyCode==65){
    y=y-1
  }
  }else if(y>=70 && x==93){x=x+1}
  //terceira pergunta
  else if(y<70 && x==93){
    textAlign(LEFT)
    text("João comprou 10 pães e pagou 2,00 $. Quanto em dinheiro\n João pagou por cada pão, em centavos ?",50,15);
    text("a)15             b)25             c)20             d)50 ",150,50)
    textSize(15);
    fill(255,255,255);
    if(keyCode==67){x=x+1}
    //as dobras
  }else if(y==69 && x<185){x=x+1}
   else if(y<120 && x==185){y=y+1}
  //quarta pergunta
  else if(y==120 && x==185){
  fill(255,255,255);
  text("No meu jardim existe 3 pés de alface, 1 de pepino e 5 de \ncenoura. Quantos pés eu tenho no total?",50,15);
  text("a) 3          b) 1          c) 4          d) 2",120, 55) 
  textSize(15);
  if(keyCode==68){y=y+1}
  }else if(y<340 && x==185){y=y+1}
  //as dobras para quinta pergunta
    else if(y==340 && x<=185){x=x+1} 
     else if(y==340 && x>185){
      textAlign(LEFT);
      textSize(15);
      text("Qual dessas alternativas não fazem parte da \npotenciação?",50,15);
       text("a) Base     b) probabilidade      c) expoente     d) potência",70, 55)
      fill(255,255,255);
     } 
    else if(keyCode==66){x=x+1}
    else if(y==340 && x>184){x=x+1}

    

    
    
 }//como jogar
  else if(tela==3){
    background(cm)
    if(keyIsDown(ESCAPE)){tela=1}
  }//creditos
  else if(tela==4){
    background(cd)
    fill(0,0,0)
    textSize(25);
    text("Aperte a tecla ESC pra voltar ao Menu",280,320)
    if(keyIsDown(ESCAPE)){tela=1}
  }
  
  
  
  
  
  
}



    
    
    
    
  
  
