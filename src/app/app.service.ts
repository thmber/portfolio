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
                  'https://github.com/thmber/join',
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

 backArrow = ['Zurück', 'Back']
  headline1 = ['Rechtliches', 'Legal Notice']
  imprint = ['Impressum', 'Imprint']
  exploringBoard = ['Board', 'Exploring the board']
  termsTitle = ['Nutzungsbedingungen', 'Acceptance of terms']
  terms = ['Durch den Zugriff auf und die Nutzung von „Portfolio“ erkennen Sie die folgenden Nutzungsbedingungen sowie alle Richtlinien, Leitlinien oder Änderungen, die Ihnen von Zeit zu Zeit vorgelegt werden, an und erklären sich damit einverstanden. Wir, die aufgeführten Studenten, können die Nutzungsbedingungen von Zeit zu Zeit ohne vorherige Ankündigung aktualisieren oder ändern.',
           `By accessing and using 'Portfolio', you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. We, the listed students, may update or change the terms and conditions from time to time without notice.`]
  
  scopeTitle = ['Umfang und Eigentumsrechte des Produkts', 'Scope and ownership of the product']
  scope = [['Das Portfolio wurde im Rahmen eines studentischen Gruppenprojekts in einem Webentwicklungs-Bootcamp der Developer Akademie GmbH entwickelt. Es dient zu Bildungszwecken und ist nicht für eine umfassende private oder geschäftliche Nutzung vorgesehen. Daher können wir keine Garantie für die ständige Verfügbarkeit, Zuverlässigkeit, Genauigkeit oder sonstige Qualitätsmerkmale dieses Produkts übernehmen.',
            'Das Design von Portfolio ist Eigentum der Developer Akademie GmbH. Die unbefugte Nutzung, Vervielfältigung, Änderung, Verbreitung oder Reproduktion des Designs ist strengstens untersagt.'], 
          ['Portfolio has been developed as part of a student group project in a web development bootcamp at the Developer Akademie GmbH. It has an educational purpose and is not intended for extensive personal & business usage. As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product.',
            'The design of Portfolio is owned by the Developer Akademie GmbH. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.']]
  propri = ['Abgesehen von dem Design, dessen Eigentümer die Developer Akademie GmbH ist, behalten wir, die aufgeführten Studierenden, alle Eigentumsrechte an Portfolio, einschließlich aller damit verbundenen urheberrechtlich geschützten Materialien, Marken und sonstigen geschützten Informationen.', 
          'Aside from the design owned by Developer Akademie GmbH, we, the listed students, retain all proprietary rights in Portfolio, including any associated copyrighted material, trademarks, and other proprietary information.']
  propriTitle = ['Eigentumsrechte', 'Proprietary rights']
  use = ['Portfolio darf nur für rechtmäßige Zwecke in Übereinstimmung mit allen geltenden Gesetzen und Vorschriften verwendet werden. Jede Nutzung von Portfolio für illegale Aktivitäten oder zur Belästigung, Schädigung, Bedrohung oder Einschüchterung anderer Personen ist strengstens untersagt. Sie sind allein verantwortlich für Ihre Interaktionen mit anderen Nutzern von Portfolio.', 
          'Portfolio is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use of Portfolio for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your interactions with other users of Portfolio.']
  useTitle = ['Benutzung', 'Use of the product']
  disclaimer = ['Das Portfolio wird „wie besehen“ ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt, einschließlich, aber nicht beschränkt auf die stillschweigenden Gewährleistungen der Marktgängigkeit, der Eignung für einen bestimmten Zweck und der Nichtverletzung von Rechten Dritter. In keinem Fall haften wir, die aufgeführten Studenten oder die Developer Akademie für direkte, indirekte, zufällige, besondere, Folge- oder exemplarische Schäden, einschließlich, aber nicht beschränkt auf Schäden für entgangenen Gewinn, Goodwill, Nutzung, Daten oder andere immaterielle Verluste, selbst wenn wir auf die Möglichkeit solcher Schäden hingewiesen wurden, die sich aus oder in Verbindung mit der Nutzung oder Leistung des Portfolios ergeben.',
                 'Portfolio is provided "as is" without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event will we, the listed students, or the Developer Akademie, be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages, arising out of or in connection with the use or performance of Portfolio.']
  disclaimerTitle = ['Haftungsausschluss und Haftungsbeschränkung', 'Disclaimer of warranties and limitation of liability']
  indemn = ['Sie erklären sich damit einverstanden, uns, die aufgeführten Studenten, die Developer Akademie und unsere verbundenen Unternehmen, Partner, Führungskräfte, Direktoren, Vertreter und Mitarbeiter von allen Ansprüchen, Forderungen, Verlusten, Schäden, Kosten oder Haftungen (einschließlich angemessener Rechtskosten) freizustellen, zu verteidigen und schadlos zu halten, die sich aus Ihrer Nutzung des Portfolios und/oder Ihrem Verstoß gegen diesen rechtlichen Hinweis ergeben oder damit in Zusammenhang stehen.', 
              'You agree to indemnify, defend and hold harmless us, the listed students, the Developer Akademie, and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of Portfolio and/or your breach of this Legal Notice.']
  indemnTitle = ['Entschädigung', 'Indemnity']

}