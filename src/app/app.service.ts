import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  projectDescription = [['Objektorientiertes Jump-and-Run-Spiel. Hilf dem Zauberer, seinen Bruder zu finden, und kämpfe dich durch 4 atemberaubende, atmosphärische Levels!',
                        'Jump and run game based on object-oriented approach. Help the wizard find his brother and fight your way through 4 dazzling, atmospheric levels!' 
                          ],
                        ['Eine Übersicht aller Pokémons, erstellt in JS und HTML, ansprechend gestaltet mit CSS. Sortiere die Karten nach allen möglichen Statistiken und finde dein Lieblings-Pokémon!',
                          'Index of every single Pokemon, build in JS and Html, beautifully styled with CSS. Sort the cards by all kinds of stats and find your favourite Pokemon!',
                      ], 
                      ['Dieser Kanban-inspirierte Aufgaben-Planer kann verschiedene Aufgaben priorisieren und ihnen Unteraufgaben zuordnen. Dringende Aufgaben sind in der Summary sofort sichtbar!',
                        'This Kanban-inspired task-manager orders different tasks by priority and even handles subtasks. Urgent tasks are quickly visible in the summary!'
                      ],
                      ['JS-Spiel im „Herr der Ringe“-Style. Fordere die dunkle Macht des Rings heraus! (Sorry, aber es wird dir nicht gelingen.)',
                      `JS-Game in 'Lord of the Rings'-style. Try to challenge the power of the ring! (Sorry, but it will not happen.)`]]

implementationTitle = ['Implementierung', 'Imnplementation Details']
implementationDetails = [['Als ich mit dieser Übung anfing, wurde ich schnell in die Details des Level-Buildings hineingezogen. Der Zauberer kann drei verschiedene Tränke trinken, muss über bewegliche Böden springen und findet verschiedene Dinge, wenn er auf Holzfässer schießt.'
                                                ,'Starting off as a standard project, I quickly became emerged in the details of level-building. The wizard can drink three kinds of potions, has to use moving floors and try his luck in shooting barrels. Building this game was a lot of fun!'],
                                                ['Asynchrone Funktionen laden die Pokemon-Daten aus einer API herunter. Dieses Projekt veranschaulicht, wie Daten, die bereits an anderer Stelle abrufbar sind, in einer neuartigen Weise präsentiert werden können. Auf diese entsteht für den User ein großer Mehrwert.', 
                                                'Asychrone functions are collecting the Pokemon-Data from an API. This project is an example of how data, that is already available, can be presented in a user-benefitting way.'],
                                                ['Dieses html- und JS-Projekt war Teil einer Gruppenarbeit. Wir mussten Merger-Konflikte lösen und verschiedene Coding-Styles miteinander vereinbaren. User-Daten werden online in firebase gespeichert.',
                                                  'Build in JS and html, this project was part of a group-exercise. We had to fight merger-conflicts at git and tackle different coding-apprchoaches. User-Data is stored in a firebase-database.'],
                                                [`In einer Übung für CSS und JS, kam ich auf die Idee, einen CPU-Gegner zu bauen, gegen den ein Spieler nicht mehr gewinnen kann! Probier' es selbst aus!`,
                                                'In a simple exercise for the use of CSS and JS, I wanted to build a CPU, that cannot be beaten by the player.']
                                                ]
projectTitles = [`Wizards' King`,'Pokedex', 'Join', 'Ring XO'];

descriptionTitle = ['Beschreibung', 'Description']

projectGitLinks = ['https://github.com/thmber/wizardsking',
                  'https://github.com/thmber/pokedex', 
                  '',
                  'https://github.com/thmber/Ring-XO'
 ]

projectLinks = ['https://thmahler.net/games/wizardsking/index.html',
                'https://thmahler.net/pokedex/index.html', 
                'https://thmahler.net/join/index.html', 
                'https://thmahler.net/games/ringxo/index.html']
projectScreenshots = ['wizard','poke', 'join', 'tic'];
                                              
projectSkills = [['html','css','javascript', 'scrum'],
                  ['html','css','javascript', 'rest-api'],
                  ['html','css','javascript', 'git', 'firebase'],
                 ['html', 'css', 'javascript']]



}
