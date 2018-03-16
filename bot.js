var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            
            case 'Joakim':
                bot.sendMessage({
                    to: channelID,
                    message: 'Også kalt Jotto,		Joakim var lærling i Fjell Kommune fra Aug 2015 - Aug 2017 han fikk karakteren Bestått!, etter læretiden gikk Joakim videre på påbygg hvor han bruker tiden på Reddit og Trening.'
                });
            break;
			case 'Håvard':
                bot.sendMessage({
                    to: channelID,
                    message: 'Også kalt Haasol,		Håvard var lærling i Fjell Kommune fra Aug 2015 - Aug 2017 han fikk karakteren Meget Bestått!, etter læretiden jobbet Håvard som IT Konsulent for Fjell Kommune ut Okt 2017, etter dette flyttet han til Japan.'
                });
            break;
			case 'Kristian':
                bot.sendMessage({
                    to: channelID,
                    message: 'Også kalt Kriutv,		Kristian er lærling i Fjell Kommune Aug 2016 - Aug 2018, han er en klassisk meme.'
                });
            break;
			case 'OliverK':
                bot.sendMessage({
                    to: channelID,
                    message: 'Også kalt Olikol,		OliverK er lærling i Fjell Kommune Aug 2017 - Aug 2019, faren hans eier en golfbane og går på "Plen Kurs"'
                });
            break;
			case 'OliverS':
                bot.sendMessage({
                    to: channelID,
                    message: 'Også kalt Oliste,		OliverS er lærling i Fjell Kommune Aug 2016 - Aug 2018, han hadde en katt som het rolf :('
                });
            break;
			case 'Nicholas':
                bot.sendMessage({
                    to: channelID,
                    message: 'Også kalt Nicho,      Nicholas er lærling i Fjell Kommune Aug 2017 - Aug 2019, han har mange akavrier.'
                });
            break;
			case 'Helpdesk':
                bot.sendMessage({
                    to: channelID,
                    message: 'Man - Søn = Joakim'
                });
            break;
			case 'Random':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://imgur.com/gallery/random'
                });
            break;
			case 'Weeb':
                bot.sendMessage({
                    to: channelID,
                    message: 'A weeb (/wi b/) is a non-Japanese male who watches and is a fan of CGDCT anime, has a waifu, a waifu pillow and is obsessed with Japan. A weeb is always talking about how cute or "kawaii" his favourite characters are and claiming one of them to be his "waifu". He occasionally uses romanized Japanese words instead of English equivalents, such as "kawaii" instead of "cute" and "baka" instead of "dumb" or "jerk" (it has both meanings). Some of them also use Japanese honorifics, for example when they attach the "-chan" honorific to the names of people or characters they like or find cute, or when they use the "-sama" honorific to show they respect someone. Weebs call non-weebs normies. Weebs are harmless. They know theyre disliked by many people but they dont give a fuck because they know they are sugoi (awesome).'
                });
            break;
			case 'ErnaKake':
                bot.sendMessage({
                    to: channelID,
                    message: 'http://ernaspiserkake.tumblr.com/'
					});
			break;
			case 'HåvardFagprøve':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://www.dropbox.com/sh/ahw7x85zr1s1g5z/AACMxXmG223mZMeIvf98D38Ca?dl=0'
					});
			break;
			case 'Rolling':
                bot.sendMessage({
                    to: channelID,
                    message: '(._.)( l: )( .-. )( :l )(._.)'
					});
			break;
			case 'Bitcoin':
                bot.sendMessage({
                    to: channelID,
                    message: '(╯ `Д ́)╯︵(฿)'
					});
			break;
			case 'Sannheten':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://imgur.com/gallery/OtFQo'
					});
			break;
			case 'GodNatt':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://www.youtube.com/watch?v=BUQnooc2HuA'
					});
			break;
			case 'MakkaPakka':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://www.youtube.com/watch?v=ZNnBqclN4IM'
					});
			break;
			case 'JuleBord2016':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://www.youtube.com/watch?v=47jXMrIcuRc'
					});
			break;
			case 'Same':
                bot.sendMessage({
                    to: channelID,
                    message: 'Same er en folkegruppe tradisjonelt bosatt i fra Hedmark i sør til Kola-halvøya i øst, med et kjerneområde i de indre delene av Nordkalotten og fjordstrøkene i Nord-Norge. Tradisjonelle samiske leveveier inkluderer reindrift og kombinasjon av småbruk og fiske, men utøves i dag kun av et mindretall. Samene ansees som en urbefolkning av norske myndigheter.'
					});
			break;
			case 'Ins':
                bot.sendMessage({
                    to: channelID,
                    message: 'dd'
					});
			break;
			case 'TwinJottos':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://folk.snd.no/sites/default/files/styles/w400/public/joakim_alex_f1450131160.jpg'
					});
			break;
			case 'Hjelp':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://www.psykiskhelse.no/hjelpetelefoner-og-nettsteder'
					});
			break;
			case 'Hei':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hei'
					});
			break;
			case 'gp?':
                bot.sendMessage({
                    to: channelID,
                    message: 'ins dd'
					});
			break;
			case 'BotInfo':
                bot.sendMessage({
                    to: channelID,
                    message: 'Info: Laget 06.03.2018, Skrevet i Javascript publisert via Node.js, Idioten som gjorde det mulig = Haasol '
					});
			break;
	
			
			
			
			
            // Just add any case commands if you want to..
         }
     }


});

