var quiz = {

  data: [
  {
    q : "Qui est sacré empereur de France le 2 décembre 1804 ?",
    o : [
      "Clovis",
      "Abraham Lincoln",
      "Napoleon Bonaparte",
     
    ],
    a : 2 // commence par 0
  },
  {
    q : "Quand la déclaration d'indépendance des Etats-Unis a-t-elle été votée ? ",
    o : [
      "4 juillet 1776",
      "18 avril 1856",
      "30 juin 1925",
      
    ],
    a : 0
  },
  {
    q : "Quand a eu lieu la chute de l'empire romain d'occident ?",
    o : [
      "15 ap. J.C ",
      "476 ap. J.C",
      "-740 av J.C",
    ],
    a : 1
  },
  {
    q : "Quel est la capitale de la Slovénie ?",
    o : [
      "Ljubljana",
      "Belgrade",
      "Brastislava",
    ],
    a : 0
  },
  {
    q : "Combien d'habitants compte l'Irlande en 2020 ?",
    o : [
      "1,365 Million",
      "21 Milions",
      "4,9 Millions",
    ],
    a : 2
  }
  ],

  //élément html
  hWrap: null, //Conteneur de quiz HTML
  hQn: null, // Wrapper de question HTML - appel une autre fonction
  hAns: null, // Wrapper de réponses HTML 

  //DRAPEAUX DE JEU
  now: 0, // question actuelle
  score: 0, //score actuelle

// (B) INIT QUIZ HTML
  init: () => {
   
//SECTION DES QUESTIONS
    quiz.hWrap = document.getElementById("quizWrap");

    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    //SECTION DES RÉPONSES
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    //GO!
    quiz.draw();
  },
 
  //Dessin des questions
  draw: () => {
   
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

   //options
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", () => { quiz.select(label); });
      quiz.hAns.appendChild(label);
    }
  },

  //selection des questions 
  select: (option) => {
    
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }
    //Vérification si c'est correct
    let correct = option.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
      quiz.score++;
      option.classList.add("correct");
    } else {
      option.classList.add("wrong");
    }

    //QUESTION SUIVANTE OU FIN DE PARTIE
    quiz.now++;
    setTimeout(() => {
      if (quiz.now < quiz.data.length) { quiz.draw(); }
      else {
        quiz.hQn.innerHTML = `Ton score est ${quiz.score} / ${quiz.data.length}.`;
        quiz.hAns.innerHTML = "";
      }
    }, 1000);
  },

  //REDÉMARRER LE QUIZ
  reset : () => {
    quiz.now = 0;
    quiz.score = 0;
    quiz.draw();
  }
};
window.addEventListener("load", quiz.init);
