
let TIME_LIMIT = 60;

let quotes_array = [

"The quick brown fox jumps over the lazy dog.",
"Push yourself, because no one else is going to do it for you.",
"While Bob ate an apple was in the basket",
"pazazz pazazzes tazzas zaqazip pizzazzes pizzazz bezazzes azazel zaqqum gozzan bezazz mazzard hazzan pizzazz pizazzes razzed piazzas razzes pappox pizzas ezzard poppa cozzes cazzie razzer",
"What a beautiful day it is on the beach, here in beautiful and sunny Hawaii.",
" Rex Quinfrey, a renowned scientist, created plans for an invisibility machine.",
"Xavier Puvre counted eighty large boxes and sixteen small boxes stacked outside.",
"Failure is the condiment that gives success its flavor.",
"Wake up with determination. Go to bed with satisfaction.",
"It's going to be hard, but hard does not mean impossible.",
"Learning never exhausts the mind.",
"There is no way you can type this unmanageable, problematical, unaccomodating, troublesome, perplexing, formidable, uncooperative, intransigent description of a sentence"

];

let timer_text = document.querySelector(".curr_time");
let accuracy_text = document.querySelector(".curr_accuracy");
let error_text = document.querySelector(".curr_errors");
let cpm_text = document.querySelector(".curr_cpm");
let wpm_text = document.querySelector(".curr_wpm");
let quote_text = document.querySelector(".quote");
let input_area = document.querySelector(".input_area");
let restart_btn = document.querySelector(".restart_btn");
let cpm_group = document.querySelector(".cpm");
let wpm_group = document.querySelector(".wpm");
let error_group = document.querySelector(".errors");
let accuracy_group = document.querySelector(".accuracy");

let timeLeft = TIME_LIMIT;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let quoteNo = 0;
let timer = null;
function updateQuote() {
    quote_text.textContent = null;
    current_quote = quotes_array[quoteNo];
    
  
    current_quote.split('').forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        quote_text.appendChild(charSpan)
    })
    
    
    if (quoteNo < quotes_array.length - 1)
        quoteNo++;
    else
        quoteNo = 0;
    }
    function processCurrentText() {

        
        curr_input = input_area.value;
        curr_input_array = curr_input.split('');
        
        characterTyped++;
        
        errors = 0;
        
        quoteSpanArray = quote_text.querySelectorAll('span');
        quoteSpanArray.forEach((char, index) => {
            let typedChar = curr_input_array[index]
        
         
            if (typedChar == null) {
            char.classList.remove('correct_char');
            char.classList.remove('incorrect_char');
        
          
            } else if (typedChar === char.innerText) {
            char.classList.add('correct_char');
            char.classList.remove('incorrect_char');
        
            
            } else {
            char.classList.add('incorrect_char');
            char.classList.remove('correct_char');
        
        
            errors++;
            }
        });
        
        error_text.textContent = total_errors + errors;
        
      
        let correctCharacters = (characterTyped - (total_errors + errors));
        let accuracyVal = ((correctCharacters / characterTyped) * 100);
        accuracy_text.textContent = Math.round(accuracyVal);
        
        if (curr_input.length == current_quote.length) {
            updateQuote();
        
            
            total_errors += errors;
        
           
            input_area.value = "";
        }
        }
        function startGame() {

            resetValues();
            updateQuote();
            
        
            clearInterval(timer);
            timer = setInterval(updateTimer, 1000);
            }
            
            function resetValues() {
            timeLeft = TIME_LIMIT;
            timeElapsed = 0;
            errors = 0;
            total_errors = 0;
            accuracy = 0;
            characterTyped = 0;
            quoteNo = 0;
            input_area.disabled = false;
            
            input_area.value = "";
            quote_text.textContent = 'Click on the area below to start the game.';
            accuracy_text.textContent = 100;
            timer_text.textContent = timeLeft + 's';
            error_text.textContent = 0;
            restart_btn.style.display = "none";
            cpm_group.style.display = "none";
            wpm_group.style.display = "none";
            }
            function updateTimer() {
                if (timeLeft > 0) {
                  
                    timeLeft--;
                
                 
                    timeElapsed++;
                
                 
                    timer_text.textContent = timeLeft + "s";
                }
                else {
                 
                    finishGame();
                }
                }
                function finishGame() {
                  
                    clearInterval(timer);
                
                 
                    input_area.disabled = true;
                
                    quote_text.textContent = "Click on restart to start a new game.";
                
                    restart_btn.style.display = "block";
                

                    cpm = Math.round((characterTyped / timeElapsed) * 60);
                    wpm = Math.round((characterTyped / 5 / timeElapsed) * 60);
                
                    cpm_text.textContent = cpm;
                    wpm_text.textContent = wpm;
                
                    cpm_group.style.display = "block";
                    wpm_group.style.display = "block";
                }
                