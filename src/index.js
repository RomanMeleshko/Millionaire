import $ from "jquery";
$( document ).ready(function(){
    
   //Массив вопросов 
   var arrQuestions = ["Кто был первым человеком  в космосе?",
                       "Каким был цвет шарика у пяточка?",
                       "Что петляет между деревьев в лесу?",
                       "Как звали девочку которя уронила в речку мячик?",
                       "Как называется родной город Чехова?",
                       "Как правильно закончить фразу \"Не откладывай на завтра то что  можно...\" ",
                       "Что говорит человек, когда замечает что-то необычное?",
                       "Что помагает туристу ориентироватся в незнакомом городе?",
                       "Как звали старшую сестру императора Петра Первого?",
                       "Какой врач первым в истории русской медецины применил гипсовую повязку?",
                       "Где в Древней Греции можно было увидеть надпись \"Здесь живут мертвые\n\
                       и говорят немые\"?",
                       "Кто был одним из авторов сценария фильма \"Музыкальная история\" c \n\
                       Сергеем Лемешеем в главной роли?",
                       "Каким видом спортом серезно увлекался французкий летчик Ролан Гарос?",
                       "В каком из своих фильмов не снимался Эльдар Рязанов?",
                       "В какой стране был построен ледокол \"Ермак\""];
                   
                   
   //Массив возможных ответов                    
   var arrAnsverses = ["Боря Моисеев","Александр Стрикало","Валентин Серов","Юрий Гагарин", 
                       "Красный","Коричневый","Зеленый","Голубой",
                       "Волк","Тропа","Велосепедист","Чупакабра",
                       "Света","Таня","Тома","Елена",
                       "Санкт-Петербург","Таганрог","Волгоград","Новосибирск",
                       "никогда не делать","сделать затра","сделать через месяц","сделать сегодня",
                       "Попало в рот","Залетело в уши","Бросилось в глаза","Накапало в лоб",
                       "Путепровод","Путеукладчик","Путеводная звезда","Путеводитель",
                       "Вера","Надежда","Любовь","Софья",
                       "Субботин","Пирогов","Боткин","Склифосовский",
                       "На кладбищах","В больнацах","В библиотеках","В тюрмах",
                       "Илья Ильф","Михаил Зощенко","Аркадий Аверченко","Евгений Петров",
                       "Регби","Пин-понгом","Поло","Гольфом",
                       "Дайте жалобную книгу","Старики-разбойники","Вокзал для двоих","Зигзаг удачи",
                       "Россия","Великобритания","Германия","Нидерланды"];
                   
                   
   //Массив с правильными ответами                   
   var arrRightAnsver = ["Юрий Гагарин","Зеленый","Тропа","Таня","Таганрог","сделать сегодня",
                         "Бросилось в глаза","Путеводитель","Софья","Пирогов","В библиотеках",
                         "Евгений Петров","Регби","Зигзаг удачи","Великобритания"];
   
  
   var elemsLi = $("li");
   
   var globalElem = $(".block");
   
   //Функция которая показывает следуюший вопрос и следующие ответы
   //при правильном ответе игрока.
   function bulkheadOfArr(arrQuest, arrAnsv, arrRightAnsv ) {
       
    var rem = -1, count = 0, countAnsv = 4;;
    
    var elem = $(".questions");  
    
    var arrElem = [$(".answerA"),$(".answerB"),$(".answerC"),$(".answerD")];
    
    elem.text(arrQuest[0]);//Первый вопрос из массива.
    
    for(var i = 0; i < arrAnsv.length; i++){
        
        $(arrElem[++rem]).text(arrAnsv[i]);
         $(arrElem[rem]).on("click", function(){
            
               if($(this).text() === arrRightAnsv[count]){
                   
                   $(elem).text(arrQuest[++count]);
                   rem = -1;
                   
                   moveWindowOfCount();
                   
                   for(var j = 0; j < arrAnsv.length;j++){
                       
                    var x = arrElem[++rem].text(arrAnsv[countAnsv++]);
                    
                    var arr = [];
                    arr.push(x.text());
                     
                
                   }
                    
                    arrRightAnsv[count];
                    
               }else {
                   //В случае неправильного ответа вызываем функцию.
                   incorrectAnswer($(this), arrQuest, arrAnsv);
                   
               }
               
           });
       }
   } 
   
    bulkheadOfArr( arrQuestions, arrAnsverses, arrRightAnsver );
   
   
   //Функция как классическое замыкание.
    function sumRes() {
        
        var sum = 0;
        
        return function() {
            
            return sum += 30;
            
        };
       
    }
   
   var count = sumRes();
   
   //Функция для передвижения окошка ввыиграша вверх.
    function moveWindowOfCount() {
        
       var res = count();
       
       var top = 440; 
       
       if(res > 440) {
           
           res = 420;
           
           isWinner();
           
       }
       
       var elemWindowLine = $(".windowline");
       
       elemWindowLine.animate({"top": top - res + "px"}, 500);
       
        return top;
        
    } 
    
    //Функция для окрашивания прайса вопросов.
    function colorCount(elem){
        
       if($(elem)){
           for(var i = 0;i < elem.length; i++){
               
              if(i % 5) //Каждый пятый прайс.
              $(elem[i]).css({"color": "rgba(223, 160, 71, 0.8)"});
              
           }
       }else {
           
           console.log("no element");
           
       }
        
    }
    colorCount( elemsLi );
  
   //Функция для ввывода подсказок при навидении мышки.
   function toolType(param1, param2) {
   
     var createElem = $("<p></p>").text(param2);
    
      $(param1).on("mousemove", function(event){

        $(".block").append(createElem);

         var x = event.pageX / 2;
         var y = event.pageY / 2;

         createElem.addClass("tooltype");
         createElem.css({"top": y + -220 + "px", 
                        "left": x + 0 + "px",
                        "visibility": "visible"});
         event.preventDefault();
         
      });

      $(param1).on("mouseout", function(){
          
          createElem.css({"visibility": "hidden"});
          
      });
      
    };
  
   var blockPrice = $(".blockprice");
   var strForPrice = "Блок стоимости вопросов";
   
   var blockAnsver = $(".questions");
   var strForAnsver = "Блок для вопросов и ответов";
   
  
   toolType( blockPrice, strForPrice );
   toolType( blockAnsver, strForAnsver );
   
   //Функция которая окрашивает в красный цвет неправильный ответ и
   //устанавливает вопрос и ответы в начальное положение.
   function incorrectAnswer(elem, arrQuest, arrAnsv) {
       
       $(elem).css({"background-color": "rgba(239, 111, 48, 0.9)"});
       
       var elemWindowLine = $(".windowline");
       
       var elemQuestion = $(".questions");  
    
       var arrElem = [$(".answerA"),$(".answerB"),$(".answerC"),$(".answerD")];
       
       var stop = setTimeout(function() {
           
           $(elem).css({"background-color": "rgba(40, 119, 99, 0.9)"});
           
            elemQuestion.text(arrQuest[0]);
            
            for(var i = 0;i < 4;i++){
                
                 arrElem[i].text(arrAnsv[i]);
                
            }
           
            clearTimeout(stop);
            
       }, 2000);
       
       elemWindowLine.css({"top": "440px" });
       
   }
   
   //Функция для помощи игрока.50/50, помощь зала, звонок другу.
   function helpBlock(elem, rightansvers) {
       
       var elemFromDom = [$(".fiftyfifty"), $(".callfriend"), $(".hallassistance")];
       
       for(var i = 0;i < elemFromDom.length;i++){
           
           elemFromDom[i].on("click", function() {
              
               if($(this).attr("class") == "hallassistance"){
                   
                    hallAssistance(elem);
                   
               }else if($(this).attr("class") == "callfriend"){
                   
                   
                   
               }else if($(this).attr("class") == "fiftyfifty"){
                   
                    fiftyfifty( rightansvers );
                   
               }
               
           });
           
       }
       
   }
  helpBlock( globalElem, arrRightAnsver );
  
   //Функция помощи из зала.
   function hallAssistance(elem) {
       
       var width = elem.width() / 2; //половина ширины елемента
       var height = elem.height() / 2; //половина высоты елемента 
       
       
       var createElem = $("<div></div>").attr("class", "dix");
       var createButton = $("<button></button>").text("X");
       
       createButton.addClass("styleButton");
       createElem.addClass("styleDiv");
      
       
       createElem.append( createButton );
       
       createElem.css({"width": width - (width / 6)});
       
       createElem.animate({"height": height - (height / 3)}, 1000, function() {
           
           createButton.on("click", function(){
              
               $(this).parent().remove();
               
           });
           
           addOtherElements( createElem, arrRightAnsver );
           
       });
       
       
       elem.append( createElem );
       
   }       
   
   //Вспомогательная функция для hallAssistance.Функция добавляет 
   //новые елементы и добаляет ширину правильному элементу.
   function addOtherElements(elem, arrRightAnsv) {
       
       var createDivs = [$("<div><p>A</p></div>").attr("class", "A"),
                         $("<div><p>B</p></div>").attr("class", "B"),
                         $("<div><p>C</p></div>").attr("class", "C"),
                         $("<div><p>D</p></div>").attr("class", "D")];
                     
       var arrClasses = ["styleDivA", "styleDivB", "styleDivC", "styleDivD"]; 
       
       var arrElems = [$(".answerA"),$(".answerB"),$(".answerC"),$(".answerD")];
       
       for(var i = 0;i < createDivs.length;i++){
           
           createDivs[i].addClass(arrClasses[i]);  //добавляем всем елементам классы  
           
           var res = arrElems[i].text(); //получаем текст и затем сравниваем его.
           
           for(var j = 0;j < arrRightAnsv.length;j++){
               
               if(res === arrRightAnsv[j]) {
                   
                  createDivs[i].css({"width": "200px"}); 
                   
               }
               
           }
         elem.append( createDivs[i] );
       
       }              
      
   }
   
   //Функция посказка 50/50.
   function fiftyfifty(rightansvers) {
       
     var arrElem = [$(".answerA"),$(".answerB"),$(".answerC"),$(".answerD")]; 
     
     for(var i = 0;i < arrElem.length;i++) {
         
         var foo = arrElem[i].text();
         
         for(var j = 0;j < rightansvers.length;j++) {
             
             if(foo == rightansvers[j]) {
                 
                arrElem[i].text(rightansvers[j]);
                arrElem[i-1].text(arrElem[i+1].text());
              
                break;
             }
            
              arrElem[i].text("");
              
         }
        
     }  
       
   }     
      
   //Функция поздравления победителя.Вызываем ее если игрок ответил на все 
   //вопросы.
   function isWinner() {
     
     var globalElem = $(".block");
     
     var widthGlobalElem = globalElem.width() / 2;
     var heightGlobalElem = globalElem.height() / 2;
     
     var createElement = $("<div></div>");
     var createElemP = $("<p></p>").text("Поздравляем!");
     var createElemMillione = $("<p></p>").text("1 000 000");
     
     createElement.addClass("WinerWindow");
     createElemP.addClass("p");
     createElemMillione.addClass("Millione");
     createElement.css({"width": widthGlobalElem, 
                        "height": heightGlobalElem,
                        "top": heightGlobalElem / 2,
                        "left": widthGlobalElem / 2});
     
     
     createElement.append(createElemP, createElemMillione);
     globalElem.append(createElement);
     
     createElement.on("click", function(){
        
         $(createElement).remove();
         
     });
     
   }
     
   
});