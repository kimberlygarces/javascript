var limite=10000;
var prob=0;



function Valorpi(limite)
{

        for (var n=0;n<limite;n++){

                var x=Math.random()*2-1;
                var y=Math.random()*2-1;
                if (x*x+y*y<1)         {
                        prob+=1;
                }
        }



 console.log(`Valor aproximado de PI: ${prob/limite*4}`)

}

