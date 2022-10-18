
var songrun=false;
var count=1;
var mod=1;
var path = [];
var sname = [];
var sd = [];
var bool = [];
var icon = [];
var songs;

function songHindi(){
	path=["songs\\hindi\\ban ja rani.mp3"
		,"songs\\hindi\\Banduk meri laila.mp3"
		,"songs\\hindi\\barish.mp3"
		,"songs\\hindi\\haareya.mp3"
		,"songs\\hindi\\ik vari aa.mp3"
		,"songs\\hindi\\main tera.mp3"
		,"songs\\hindi\\mercy.mp3"
		,"songs\\hindi\\musafir.mp3"
		,"songs\\hindi\\o sathi.mp3"
		,"songs\\hindi\\phir bhi.mp3"
	];

	sname=["Ban Ja tu meri Rani",
		"Banduk Meri Laila",
		"Barish",
		"Haareya",
		"Ik vari aa",
		"main tera boyfriend",
		"mercy",
		"musafir",
		"o sathi",
		"Phir Bhi"
	];

	sd=["Artist: Guru Randhawa<br>Movie: Tumhari Sulu<br>Released: 2017"
		,"Artists: Ash King, Jigar Saraiya<br>Featured artists: Sidharth Malhotra, Raftaar<br>Movie: A Gentleman<br>Released: 2017"
		,"Artists: Ash King, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Awards: Zee Cine Award for Song of the Year"
		,"Artist: Arijit Singh<br>Movie: Meri Pyaari Bindu<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Producer - Programming & Arranging"
		,"Artist: Arijit Singh<br>Movie: Raabta<br>Released: 2017"
		,"Artists: Arijit Singh, Neha Kakkar, Meet Bros<br>Movie: Raabta<br>Released: 2017<br>Composer(s): : Sohrabbudin (Original); Sourav Roy (Revamped).<br>Genre: Dance music"
		,"Artist: Badshah<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Engineer - Recording and Mixing"
		,"Artist: KK<br>Movie: Shab<br>Released: 2017"
		,"Artist: Arijit Singh<br>Movie: Shab<br>Released: 2017"
		,"Artists: Arijit Singh, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Written: 2001 (lyrics)<br>Lyricist(s): Manoj Muntashir<br>Composer(s): Mithoon"
	];

	for(var i=0; i<sd.length; i++)
		bool[i]=false;

	icon=["images\\\\hindi\\\\1.jpg",
		"images\\\\hindi\\\\2.jpg",
		"images\\\\hindi\\\\3.jpg",
		"images\\\\hindi\\\\4.jpg",
		"images\\\\hindi\\\\5.jpg",
		"images\\\\hindi\\\\6.jpg",
		"images\\\\hindi\\\\7.jpg",
		"images\\\\hindi\\\\8.jpg",
		"images\\\\hindi\\\\9.jpg",
		"images\\\\hindi\\\\10.jpg"
	];

	songs=new Array(icon.length);
	for (var i = 0; i<icon.length; i++) {
		songs[i]=new Array(4);
		songs[i][0]=path[i];
		songs[i][1]=sd[i];
		songs[i][2]=icon[i];
		songs[i][3]=mmm[i];
		console.log(songs[i][0]);
		console.log(songs[i][1]);
		console.log(songs[i][2]);
		var ins=document.createElement("div");
		ins.id='b'+i;
		//ins.onclick=function(){
		//next(this);
			//};
		ins.setAttribute("class", "song");
		document.body.appendChild(ins);
		document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
		document.getElementById('a'+i).onclick=function(){
			play(this);
		};
		document.getElementById('c'+i).onclick=function(){
			addq(this);
		};	
	}
}

function songTamil(){
	path=["songs\\tamil\\Ayyayo-Nenju.mp3"
		,"songs\\tamil\\Enna-Solla-Pogirai.mp3"
		,"songs\\tamil\\Kadhal-Sadugudu.mp3"
		,"songs\\tamil\\Netru-Aval-Irundhal.mp3"
		,"songs\\tamil\\Oru-Maalai.mp3"
		,"songs\\tamil\\Oyaayiye-Yaayiye.mp3"
		,"songs\\tamil\\Poongkaatrilae.mp3"
		,"songs\\tamil\\Unnaale-Unnaale.mp3"
		,"songs\\tamil\\Venmathiye.mp3"
		,"songs\\tamil\\Yaaro-Manathile-MassTamilan.fm.mp3"
	];

	sname=["Ayyayo Nenju",
		"Enna Solla Pogirai",
		"Kadhal Sadugudu",
		"Netru Aval Irundhal",
		"Oru Maalai",
		"Oyaayiye Yaayiye",
		"Poongkaatrilae",
		"Unnaale Unnaale",
		"Venmathiye",
		"Yaaro Manathile"
	];

	sd=["Artist: Guru Randhawa<br>Movie: Tumhari Sulu<br>Released: 2017"
		,"Artists: Ash King, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Awards: Zee Cine Award for Song of the Year"
		,"Artists: Ash King, Jigar Saraiya<br>Featured artists: Sidharth Malhotra, Raftaar<br>Movie: A Gentleman<br>Released: 2017"
		,"Artist: Arijit Singh<br>Movie: Meri Pyaari Bindu<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Producer - Programming & Arranging"
		,"Artist: Arijit Singh<br>Movie: Raabta<br>Released: 2017"
		,"Artists: Arijit Singh, Neha Kakkar, Meet Bros<br>Movie: Raabta<br>Released: 2017<br>Composer(s): : Sohrabbudin (Original); Sourav Roy (Revamped).<br>Genre: Dance music"
		,"Artist: Badshah<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Engineer - Recording and Mixing"
		,"Artist: KK<br>Movie: Shab<br>Released: 2017"
		,"Artist: Arijit Singh<br>Movie: Shab<br>Released: 2017"
		,"Artists: Arijit Singh, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Written: 2001 (lyrics)<br>Lyricist(s): Manoj Muntashir<br>Composer(s): Mithoon"
	];

	for(var i=0; i<sd.length; i++)
		bool[i]=false;

	icon=["images\\\\tamil\\\\1.jpg",
		"images\\\\tamil\\\\3.jpg",
		"images\\\\tamil\\\\2.jpg",
		"images\\\\tamil\\\\4.jpg",
		"images\\\\tamil\\\\5.jpg",
		"images\\\\tamil\\\\6.jpg",
		"images\\\\tamil\\\\7.jpg",
		"images\\\\tamil\\\\8.jpg",
		"images\\\\tamil\\\\9.jpg",
		"images\\\\tamil\\\\10.jpg"
	];

	songs=new Array(icon.length);
	for (var i = 0; i<icon.length; i++) {
		songs[i]=new Array(4);
		songs[i][0]=path[i];
		songs[i][1]=sd[i];
		songs[i][2]=icon[i];
		songs[i][3]=mmm[i];
		console.log(songs[i][0]);
		console.log(songs[i][1]);
		console.log(songs[i][2]);
		var ins=document.createElement("div");
		ins.id='b'+i;
		//ins.onclick=function(){
		//next(this);
			//};
		ins.setAttribute("class", "song");
		document.body.appendChild(ins);
		document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
		document.getElementById('a'+i).onclick=function(){
			play(this);
		};
		document.getElementById('c'+i).onclick=function(){
			addq(this);
		};	
	}
}

function songTelugu(){
	path=["songs\\telugu\\1 - Yemunnave Pilla - SenSongsMp3.mp3"
		,"songs\\telugu\\Amma.mp3"
		,"songs\\telugu\\Diamond Rani.mp3"
		,"songs\\telugu\\Eno Kalallu Kanna.mp3"
		,"songs\\telugu\\Full Kicku.mp3"
		,"songs\\telugu\\Manasu Dhari Thappene.mp3"
		,"songs\\telugu\\Naa Kosam.mp3"
		,"songs\\telugu\\Neeli Neeli Aakasam - SenSongsMp3.Co.mp3"
		,"songs\\telugu\\Ninne Ninne - SenSongsMp3.Co.mp3"
		,"songs\\telugu\\Telusa Telusa.mp3"
	];

	sname=["Yemunnave Pilla",
		"Amma",
		"Diamond Rani",
		"Eno Kalallu Kanna",
		"Full Kicku",
		"Manasu Dhari Thappene",
		"Naa Kosam",
		"Neeli Neeli Aakasam",
		"Ninne Ninne",
		"Telusa Telusa"
	];

	sd=["Artist: Guru Randhawa<br>Movie: Tumhari Sulu<br>Released: 2017"
		,"Artists: Ash King, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Awards: Zee Cine Award for Song of the Year"
		,"Artist: Arijit Singh<br>Movie: Meri Pyaari Bindu<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Producer - Programming & Arranging"
		,"Artists: Ash King, Jigar Saraiya<br>Featured artists: Sidharth Malhotra, Raftaar<br>Movie: A Gentleman<br>Released: 2017"
		,"Artist: Arijit Singh<br>Movie: Raabta<br>Released: 2017"
		,"Artists: Arijit Singh, Neha Kakkar, Meet Bros<br>Movie: Raabta<br>Released: 2017<br>Composer(s): : Sohrabbudin (Original); Sourav Roy (Revamped).<br>Genre: Dance music"
		,"Artist: Badshah<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Engineer - Recording and Mixing"
		,"Artist: KK<br>Movie: Shab<br>Released: 2017"
		,"Artist: Arijit Singh<br>Movie: Shab<br>Released: 2017"
		,"Artists: Arijit Singh, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Written: 2001 (lyrics)<br>Lyricist(s): Manoj Muntashir<br>Composer(s): Mithoon"
	];

	for(var i=0; i<sd.length; i++)
		bool[i]=false;

	icon=["images\\\\telugu\\\\1.jpg",
		"images\\\\telugu\\\\3.jpg",
		"images\\\\telugu\\\\4.jpg",
		"images\\\\telugu\\\\2.jpg",
		"images\\\\telugu\\\\5.jpg",
		"images\\\\telugu\\\\6.jpg", 	
		"images\\\\telugu\\\\7.jpg",
		"images\\\\telugu\\\\8.jpg",
		"images\\\\telugu\\\\9.jpg",
		"images\\\\telugu\\\\10.jpg"
	];

	songs=new Array(icon.length);
	for (var i = 0; i<icon.length; i++) {
		songs[i]=new Array(4);
		songs[i][0]=path[i];
		songs[i][1]=sd[i];
		songs[i][2]=icon[i];
		songs[i][3]=mmm[i];
		console.log(songs[i][0]);
		console.log(songs[i][1]);
		console.log(songs[i][2]);
		var ins=document.createElement("div");
		ins.id='b'+i;
		//ins.onclick=function(){
		//next(this);
			//};
		ins.setAttribute("class", "song");
		document.body.appendChild(ins);
		document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
		document.getElementById('a'+i).onclick=function(){
			play(this);
		};
		document.getElementById('c'+i).onclick=function(){
			addq(this);
		};	
	}
}

// var bool=[];


var mood=[["1","2","3"],["4","5"],["6","7","8"],["9","10"]];
var mmm=["1.png","1.png","1.png","2.png","2.png","3.png","3.png","3.png","4.png","4.png"];



function setmod(elem){
	mod=elem.value;
	if(!songrun){
		if(mod==2)
			getTime();
		if(mod==3)
			rand_play();
	}
}

function setlang(elem){
	var lang=elem.value;
	if(lang == "Hindi")
		songHindi();
	else if(lang == "Tamil")
		songTamil();
	else if(lang == "Telugu")
		songTelugu();
}

function play(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	var z=songs[x][0];
	document.getElementById("sname").innerHTML=sname[x];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=sname[x];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=sname[x]+"<br>";
	//var text=document.createTextNode(sname[x]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}

function nextsong(){
	if(sqc==eqc){
				alert("Queue is empty.");
				return;
		}
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;

}

function next_in_Q(){
			songrun=false;
			if(sqc==eqc){
				alert("Queue is empty.");
				return;
			}
			var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;
			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=sname[index];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}
function moody(val){
	var index=Math.random()*mood[val].length;
	index=parseInt(index);
	var pa=songs[mood[val][index]-1][0];
	document.getElementById("sname").innerHTML=sname[mood[val][index]-1];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
	songrun=true;
}

async function getTime() {
		let value = await eel.getEmotion()();
		if(value=="angry")
			moody(0);
		else if(value=="happy")
			moody(1);
		else if(value=="sad")
			moody(2);
		else
			moody(3);
}