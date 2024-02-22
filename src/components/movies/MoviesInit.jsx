const movies = [
  {id:1, name:'beauty and the beast', description:"A prince cursed to spend his days as a hideous monster sets out to regain his humanity by earning a young woman's love.",
   minutes:84,img_url:'beauty_and_beast.png',rate:8, released_year:1991,
   genres:['fantasy']},

  {id:2, name:'the dark knight', description:'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
   minutes:153,img_url:'the_dark_knight.png',rate:9, released_year:2008,
   genres:['action','drama']},

  {id:3, name:'The Lord of the Rings: The Return of the King ', description:"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
   minutes:201,img_url:'the_lord_of_the_rings.png',rate:9, released_year:2003,
   genres:['action','drama']},

  {id:4, name:'the matrix', description:'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
   minutes:136,img_url:'the_matrix.png',rate:8.7, released_year:1999,
   genres:['action']},

  {id:5, name:'oldboy', description:'After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.',
   minutes:120,img_url:'oldboy.png',rate:8.4, released_year:2003,
   genres:['action','drama','mystery']},

  {id:6, name:'psycho', description:"A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
   minutes:109,img_url:'psycho.png',rate:8.5, released_year:1960,
   genres:['horror','mystery']},

  {id:7, name:'Nosferatu', description:"Vampire Count Orlok expresses interest in a new residence and real estate agent Hutter's wife.",
   minutes:94,img_url:'nosferatu.png',rate:7.9, released_year:1922,
   genres:['fantasy','horror']},

  {id:8, name:'diabolique', description:'The wife and mistress of a loathed school principal plan to murder him with what they believe is the perfect alibi.',
   minutes:117,img_url:'diabolique.png',rate:8.1, released_year:1955,
   genres:['drama','horror']},

  {id:9, name:"rosemary's baby", description:'A young couple trying for a baby moves into an aging, ornate apartment building on Central Park West, where they find themselves surrounded by peculiar neighbors.',
   minutes:137,img_url:"rosemary's_baby.png",rate:8, released_year:1968,
   genres:['drama','horror']},

  {id:10, name:'Spider-Man: No Way Home', description:"With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
   minutes:148,img_url:'spider_man.png',rate:8.2, released_year:2021,
   genres:['action','fantasy']},

  {id:11, name:'jai bhim', description:'When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.',
   minutes:164,img_url:'jai_bhim.png',rate:8.8, released_year:2021,
   genres:['drama','mystery']},

  {id:12, name:'forrest gump', description:'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
   minutes:142,img_url:'forrest_gump.png',rate:8.8, released_year:1994,
   genres:['drama','romance']},

  {id:13, name:'Modern Times', description:'The Tramp struggles to live in modern industrial society with the help of a young homeless woman.',
   minutes:87,img_url:'modern_times.png',rate:8.5, released_year:1936,
   genres:['comedy','horror']},

  {id:14, name:'life is beautiful', description:'When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.',
   minutes:116,img_url:'life_is_beautiful.png',rate:8.6, released_year:1997,
   genres:['comedy','drama','romance']},

  {id:15, name:'coco', description:"Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
   minutes:105,img_url:'coco.png',rate:8.4, released_year:2017,
   genres:['comedy','horror']},

  {id:16, name:'up', description:'78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.',
   minutes:96,img_url:'up.png',rate:8.3, released_year:2009,
   genres:['comedy']},

  {id:17, name:'south park', description:'Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.',
   minutes:22,img_url:'south_park.png',rate:9, released_year:1997,
   genres:['comedy']},

  {id:18, name:'Star Wars: Episode V - The Empire Strikes Back', description:'After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.',
   minutes:124,img_url:'star_wars_V.png',rate:8.7, released_year:1980,
   genres:['action','fantasy']},

  {id:19, name:'spirited away', description:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.",
   minutes:125,img_url:'spirited_away.png',rate:8.6, released_year:2001,
   genres:['fantasy']},

  {id:20, name:'your name', description:'Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?',
   minutes:106,img_url:'your_name.png',rate:8.4, released_year:2016,
   genres:['drama','fantasy']},

  {id:21, name:'toy story', description:"A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
   minutes:81,img_url:'toy_story.png',rate:8.3, released_year:1995,
   genres:['comedy']},

  {id:22, name:'sita ramam', description:"An orphan soldier, Lieutenant Ram's life changes, after he gets a letter from a girl named Sita. He meets her and love blossoms between them. When he comes back to his camp in Kashmir,After he gets caught in jail, he sends a letter to Sita which won't reach her.",
   minutes:163,img_url:'sita_ramam.png',rate:8.6, released_year:2022,
   genres:['action','drama','mystery']},

  {id:23, name:'cinema paradiso', description:"A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
   minutes:155,img_url:'cinema_paradiso.png',rate:8.5, released_year:1988,
   genres:['drama','romance']},

  {id:24, name:'amelie', description:"Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
   minutes:122,img_url:'amelie.png',rate:8.3, released_year:2001,
   genres:['comedy','romance']},

  {id:25, name:'the secret in their eyes', description:"A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases and for his unreciprocated love with his superior - both of which still haunt him decades later.",
   minutes:129,img_url:'the_secret_in_their_eyes.png',rate:8.2, released_year:2009,
   genres:['drama','mystery','romance']},

  {id:26, name:'the green mile', description:"The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
   minutes:189,img_url:'the_green_mile.png',rate:8.6, released_year:1999,
   genres:['drama','fantasy']},

  {id:27, name:'the prestige', description:"After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
   minutes:130,img_url:'the_prestige.png',rate:8.5, released_year:2006,
   genres:['drama','mystery']},

  {id:28, name:'the thing', description:"A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
   minutes:109,img_url:'the_thing.png',rate:8.2, released_year:1982,
   genres:['horror','mystery']},

  {id:29, name:'The Blue Elephant', description:"The story of Dr. Yehia, a psychotherapist at Al Abbasia hospital. He works in the department treating the criminally insane, only to find his best friend to be one of the patients.",
   minutes:170,img_url:'the_blue_elephant.png',rate:8, released_year:2014,
   genres:['horror','mystery']},

  {id:30, name:'Sherlock Jr.', description:"A film projectionist longs to be a detective, and puts his meagre skills to work when he is framed by a rival for stealing his girlfriend's father's pocketwatch.",
   minutes:45,img_url:'sherlock_jr.png',rate:8.2, released_year:1924,
   genres:['action','comedy','romance']}
]

export default movies;
