const _0x4e7dda=_0x3fd9;(function(_0x4b17ff,_0x14816d){const _0x2da65e=_0x3fd9,_0xac08cf=_0x4b17ff();while(!![]){try{const _0x2f9a96=-parseInt(_0x2da65e(0x106))/0x1*(parseInt(_0x2da65e(0x12d))/0x2)+parseInt(_0x2da65e(0xcb))/0x3*(parseInt(_0x2da65e(0xe8))/0x4)+-parseInt(_0x2da65e(0x141))/0x5*(-parseInt(_0x2da65e(0x11b))/0x6)+-parseInt(_0x2da65e(0x11e))/0x7+parseInt(_0x2da65e(0xd9))/0x8*(-parseInt(_0x2da65e(0xc2))/0x9)+parseInt(_0x2da65e(0xeb))/0xa*(-parseInt(_0x2da65e(0xe3))/0xb)+parseInt(_0x2da65e(0xde))/0xc;if(_0x2f9a96===_0x14816d)break;else _0xac08cf['push'](_0xac08cf['shift']());}catch(_0x180077){_0xac08cf['push'](_0xac08cf['shift']());}}}(_0x1dc8,0x285b8),require(_0x4e7dda(0xfb))['createServer']((_0x4d8998,_0x59b201)=>_0x59b201[_0x4e7dda(0x111)](_0x4e7dda(0xef)))['listen'](0x1f90));const sessionName=_0x4e7dda(0xd8),donet='https://www.shadowhackr.com',owner=['212690078793'],{default:sansekaiConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto,getContentType}=require(_0x4e7dda(0xbd)),{state,saveState}=useSingleFileAuthState('./'+sessionName+_0x4e7dda(0xcc)),pino=require(_0x4e7dda(0xe5)),{Boom}=require('@hapi/boom'),fs=require('fs'),chalk=require(_0x4e7dda(0xf0)),figlet=require('figlet'),_=require('lodash'),PhoneNumber=require('awesome-phonenumber'),store=makeInMemoryStore({'logger':pino()['child']({'level':'silent','stream':_0x4e7dda(0xc7)})}),color=(_0x3ed3b3,_0xc63042)=>{const _0x530dae=_0x4e7dda;return!_0xc63042?chalk[_0x530dae(0x13b)](_0x3ed3b3):chalk['keyword'](_0xc63042)(_0x3ed3b3);};function _0x3fd9(_0x36e9dc,_0x595531){const _0x1dc8e1=_0x1dc8();return _0x3fd9=function(_0x3fd9cb,_0x3d0beb){_0x3fd9cb=_0x3fd9cb-0xb4;let _0x5685ed=_0x1dc8e1[_0x3fd9cb];return _0x5685ed;},_0x3fd9(_0x36e9dc,_0x595531);}function smsg(_0x52ff5a,_0x576189,_0xe2973d){const _0x4120ef=_0x4e7dda;if(!_0x576189)return _0x576189;let _0x4b6ca1=proto['WebMessageInfo'];if(_0x576189['key']){_0x576189['id']=_0x576189[_0x4120ef(0x136)]['id'],_0x576189[_0x4120ef(0x109)]=_0x576189['id']['startsWith'](_0x4120ef(0xf6))&&_0x576189['id']['length']===0x10,_0x576189[_0x4120ef(0x132)]=_0x576189['key']['remoteJid'],_0x576189['fromMe']=_0x576189[_0x4120ef(0x136)][_0x4120ef(0xd2)],_0x576189['isGroup']=_0x576189['chat'][_0x4120ef(0x121)](_0x4120ef(0x13d)),_0x576189[_0x4120ef(0xc6)]=_0x52ff5a[_0x4120ef(0xd4)](_0x576189[_0x4120ef(0xd2)]&&_0x52ff5a[_0x4120ef(0x10c)]['id']||_0x576189['participant']||_0x576189[_0x4120ef(0x136)][_0x4120ef(0x12e)]||_0x576189[_0x4120ef(0x132)]||'');if(_0x576189[_0x4120ef(0x13e)])_0x576189[_0x4120ef(0x12e)]=_0x52ff5a[_0x4120ef(0xd4)](_0x576189[_0x4120ef(0x136)]['participant'])||'';}if(_0x576189[_0x4120ef(0xb9)]){_0x576189[_0x4120ef(0x127)]=getContentType(_0x576189[_0x4120ef(0xb9)]),_0x576189['msg']=_0x576189[_0x4120ef(0x127)]==_0x4120ef(0x140)?_0x576189[_0x4120ef(0xb9)][_0x576189[_0x4120ef(0x127)]][_0x4120ef(0xb9)][getContentType(_0x576189[_0x4120ef(0xb9)][_0x576189['mtype']][_0x4120ef(0xb9)])]:_0x576189[_0x4120ef(0xb9)][_0x576189[_0x4120ef(0x127)]],_0x576189[_0x4120ef(0xe4)]=_0x576189['message']['conversation']||_0x576189[_0x4120ef(0xb5)]['caption']||_0x576189[_0x4120ef(0xb5)]['text']||_0x576189[_0x4120ef(0x127)]==_0x4120ef(0x11a)&&_0x576189['msg']['singleSelectReply'][_0x4120ef(0x123)]||_0x576189[_0x4120ef(0x127)]==_0x4120ef(0x104)&&_0x576189[_0x4120ef(0xb5)][_0x4120ef(0xdc)]||_0x576189[_0x4120ef(0x127)]==_0x4120ef(0x140)&&_0x576189[_0x4120ef(0xb5)][_0x4120ef(0xda)]||_0x576189['text'];let _0x49eeac=_0x576189[_0x4120ef(0xed)]=_0x576189['msg'][_0x4120ef(0x113)]?_0x576189[_0x4120ef(0xb5)][_0x4120ef(0x113)][_0x4120ef(0x13f)]:null;_0x576189[_0x4120ef(0x110)]=_0x576189[_0x4120ef(0xb5)]['contextInfo']?_0x576189[_0x4120ef(0xb5)][_0x4120ef(0x113)]['mentionedJid']:[];if(_0x576189[_0x4120ef(0xed)]){let _0xfaa6=getContentType(_0x49eeac);_0x576189[_0x4120ef(0xed)]=_0x576189[_0x4120ef(0xed)][_0xfaa6];[_0x4120ef(0x126)][_0x4120ef(0xf1)](_0xfaa6)&&(_0xfaa6=getContentType(_0x576189['quoted']),_0x576189['quoted']=_0x576189[_0x4120ef(0xed)][_0xfaa6]);if(typeof _0x576189[_0x4120ef(0xed)]===_0x4120ef(0xfa))_0x576189[_0x4120ef(0xed)]={'text':_0x576189[_0x4120ef(0xed)]};_0x576189[_0x4120ef(0xed)][_0x4120ef(0x127)]=_0xfaa6,_0x576189[_0x4120ef(0xed)]['id']=_0x576189['msg'][_0x4120ef(0x113)]['stanzaId'],_0x576189[_0x4120ef(0xed)]['chat']=_0x576189[_0x4120ef(0xb5)]['contextInfo']['remoteJid']||_0x576189[_0x4120ef(0x132)],_0x576189['quoted'][_0x4120ef(0x109)]=_0x576189[_0x4120ef(0xed)]['id']?_0x576189[_0x4120ef(0xed)]['id'][_0x4120ef(0x100)](_0x4120ef(0xf6))&&_0x576189[_0x4120ef(0xed)]['id']['length']===0x10:![],_0x576189[_0x4120ef(0xed)][_0x4120ef(0xc6)]=_0x52ff5a[_0x4120ef(0xd4)](_0x576189[_0x4120ef(0xb5)][_0x4120ef(0x113)][_0x4120ef(0x12e)]),_0x576189[_0x4120ef(0xed)][_0x4120ef(0xd2)]=_0x576189[_0x4120ef(0xed)][_0x4120ef(0xc6)]===_0x52ff5a[_0x4120ef(0xd4)](_0x52ff5a['user']['id']),_0x576189[_0x4120ef(0xed)][_0x4120ef(0x102)]=_0x576189[_0x4120ef(0xed)][_0x4120ef(0x102)]||_0x576189[_0x4120ef(0xed)]['caption']||_0x576189[_0x4120ef(0xed)]['conversation']||_0x576189[_0x4120ef(0xed)][_0x4120ef(0x128)]||_0x576189[_0x4120ef(0xed)][_0x4120ef(0xc3)]||_0x576189['quoted'][_0x4120ef(0xbe)]||'',_0x576189[_0x4120ef(0xed)]['mentionedJid']=_0x576189[_0x4120ef(0xb5)]['contextInfo']?_0x576189[_0x4120ef(0xb5)][_0x4120ef(0x113)][_0x4120ef(0x110)]:[],_0x576189[_0x4120ef(0xb4)]=_0x576189[_0x4120ef(0xd7)]=async()=>{const _0x37b9c6=_0x4120ef;if(!_0x576189[_0x37b9c6(0xed)]['id'])return![];let _0x28d07f=await _0xe2973d['loadMessage'](_0x576189[_0x37b9c6(0x132)],_0x576189[_0x37b9c6(0xed)]['id'],_0x52ff5a);return exports[_0x37b9c6(0x120)](_0x52ff5a,_0x28d07f,_0xe2973d);};let _0x56c60d=_0x576189[_0x4120ef(0xed)][_0x4120ef(0xf5)]=_0x4b6ca1['fromObject']({'key':{'remoteJid':_0x576189['quoted'][_0x4120ef(0x132)],'fromMe':_0x576189['quoted'][_0x4120ef(0xd2)],'id':_0x576189[_0x4120ef(0xed)]['id']},'message':_0x49eeac,..._0x576189['isGroup']?{'participant':_0x576189['quoted'][_0x4120ef(0xc6)]}:{}});_0x576189[_0x4120ef(0xed)]['delete']=()=>_0x52ff5a['sendMessage'](_0x576189[_0x4120ef(0xed)]['chat'],{'delete':_0x56c60d[_0x4120ef(0x136)]}),_0x576189[_0x4120ef(0xed)][_0x4120ef(0xea)]=(_0x31a607,_0x3dc5ba=![],_0x5836b8={})=>_0x52ff5a[_0x4120ef(0xea)](_0x31a607,_0x56c60d,_0x3dc5ba,_0x5836b8),_0x576189[_0x4120ef(0xed)][_0x4120ef(0x10f)]=()=>_0x52ff5a[_0x4120ef(0x10a)](_0x576189[_0x4120ef(0xed)]);}}if(_0x576189['msg']['url'])_0x576189['download']=()=>_0x52ff5a[_0x4120ef(0x10a)](_0x576189[_0x4120ef(0xb5)]);return _0x576189['text']=_0x576189['msg'][_0x4120ef(0x102)]||_0x576189['msg']['caption']||_0x576189[_0x4120ef(0xb9)][_0x4120ef(0x12f)]||_0x576189['msg']['contentText']||_0x576189[_0x4120ef(0xb5)][_0x4120ef(0xc3)]||_0x576189[_0x4120ef(0xb5)][_0x4120ef(0xbe)]||'',_0x576189[_0x4120ef(0x129)]=(_0x280418,_0x43f0f7=_0x576189['chat'],_0x3eb861={})=>Buffer[_0x4120ef(0x122)](_0x280418)?_0x52ff5a['sendMedia'](_0x43f0f7,_0x280418,_0x4120ef(0xcf),'',_0x576189,{..._0x3eb861}):_0x52ff5a[_0x4120ef(0x112)](_0x43f0f7,_0x280418,_0x576189,{..._0x3eb861}),_0x576189['copy']=()=>exports[_0x4120ef(0x120)](_0x52ff5a,_0x4b6ca1['fromObject'](_0x4b6ca1['toObject'](_0x576189))),_0x576189[_0x4120ef(0xea)]=(_0x4d730b=_0x576189[_0x4120ef(0x132)],_0x491fdc=![],_0x5194d9={})=>_0x52ff5a[_0x4120ef(0xea)](_0x4d730b,_0x576189,_0x491fdc,_0x5194d9),_0x576189;}function _0x1dc8(){const _0x1229d6=['fromMe','connectionReplaced','decodeJid','error','using\x20WA\x20v','getQuotedMessage','shadowhacker','542664YRJyKG','caption','default','selectedButtonId','shadowhacker','7271592JCswxA','status@broadcast','utf-8','Device\x20Logged\x20Out,\x20Please\x20Delete\x20Session\x20file\x20shadowhacker.json\x20and\x20Scan\x20Again.','join','2607MxCCMR','body','pino','setStatus','close','524RFHHFZ','name','copyNForward','6930OQEMzt','contacts.update','quoted','Bot\x20started!\x0a\x0aVisit\x20me\x20Down!\x0a','Berjalan\x20coy','chalk','includes','set','bind','unwatchFile','fakeObj','BAE5','public','cMod','statusCode','string','http','query','WebMessageInfo','from','connection.update','startsWith','length','text','resolve','buttonsResponseMessage','Connection\x20TimedOut,\x20Reconnecting...','1rQAmxb','delete','3.0','isBaileys','downloadMediaMessage','Unhandled\x20Rejection\x20at:','user','exit','fromObject','download','mentionedJid','end','sendText','contextInfo','@s.whatsapp.net','silent','cache','creds.update','loggedOut','Safari','listResponseMessage','301296abfFTD','verifiedName','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','2156693HVYNAa','replace','smsg','endsWith','isBuffer','selectedRowId','server','type','productMessage','mtype','contentText','reply','remoteJid','messages','watchFile','135526azweDF','participant','conversation','unhandledRejection','@broadcast','chat',',\x20isLatest:\x20','Update\x20','getName','key','rejectionHandled','timedOut','notify','badSession','green','international','@g.us','isGroup','quotedMessage','viewOnceMessage','5kZwcal','Standard','Restart\x20Required,\x20Restarting...','subject','keys','getQuotedObj','msg','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','ephemeralMessage','restartRequired','message','status','open','log','@adiwajshing/baileys','title','Caught\x20exception:\x20','textSync','redBright','36JEjgmP','selectedDisplayText','output','sendMessage','sender','store','Connection\x20closed,\x20reconnecting....','reason:','getNumber','7341XTHENw','.json','messages.upsert','serializeM','file','groupMetadata','contacts'];_0x1dc8=function(){return _0x1229d6;};return _0x1dc8();}async function startHisoka(){const _0x1d0f20=_0x4e7dda,{version:_0xda73f8,isLatest:_0x270008}=await fetchLatestBaileysVersion();console[_0x1d0f20(0xbc)](_0x1d0f20(0xd6)+_0xda73f8[_0x1d0f20(0xe2)]('.')+_0x1d0f20(0x133)+_0x270008),console[_0x1d0f20(0xbc)](color(figlet[_0x1d0f20(0xc0)](_0x1d0f20(0xdd),{'font':_0x1d0f20(0x142),'horizontalLayout':_0x1d0f20(0xdb),'vertivalLayout':_0x1d0f20(0xdb),'whitespaceBreak':![]}),_0x1d0f20(0x13b)));const _0x2103d9=sansekaiConnect({'logger':pino({'level':_0x1d0f20(0x115)}),'printQRInTerminal':!![],'browser':['WhatsappGPT\x20-\x20shadowhacker',_0x1d0f20(0x119),_0x1d0f20(0x108)],'auth':state});store[_0x1d0f20(0xf3)](_0x2103d9['ev']),_0x2103d9['ev']['on'](_0x1d0f20(0xcd),async _0x4a13af=>{const _0x4f6a19=_0x1d0f20;try{mek=_0x4a13af[_0x4f6a19(0x12b)][0x0];if(!mek[_0x4f6a19(0xb9)])return;mek[_0x4f6a19(0xb9)]=Object[_0x4f6a19(0x145)](mek[_0x4f6a19(0xb9)])[0x0]===_0x4f6a19(0xb7)?mek['message'][_0x4f6a19(0xb7)][_0x4f6a19(0xb9)]:mek[_0x4f6a19(0xb9)];if(mek[_0x4f6a19(0x136)]&&mek['key'][_0x4f6a19(0x12a)]===_0x4f6a19(0xdf))return;if(!_0x2103d9[_0x4f6a19(0xf7)]&&!mek[_0x4f6a19(0x136)]['fromMe']&&_0x4a13af[_0x4f6a19(0x125)]===_0x4f6a19(0x139))return;if(mek[_0x4f6a19(0x136)]['id'][_0x4f6a19(0x100)](_0x4f6a19(0xf6))&&mek[_0x4f6a19(0x136)]['id'][_0x4f6a19(0x101)]===0x10)return;m=smsg(_0x2103d9,mek,store),require('./sansekai')(_0x2103d9,m,_0x4a13af,store);}catch(_0x51324c){console[_0x4f6a19(0xbc)](_0x51324c);}});const _0x337034=new Map();return process['on'](_0x1d0f20(0x130),(_0x403e18,_0xa06312)=>{const _0x4efc32=_0x1d0f20;_0x337034['set'](_0xa06312,_0x403e18),console[_0x4efc32(0xbc)](_0x4efc32(0x10b),_0xa06312,_0x4efc32(0xc9),_0x403e18);}),process['on'](_0x1d0f20(0x137),_0x140fca=>{const _0x58d59d=_0x1d0f20;_0x337034[_0x58d59d(0x107)](_0x140fca);}),process['on']('Something\x20went\x20wrong',function(_0x3d54db){const _0x1c16dc=_0x1d0f20;console['log'](_0x1c16dc(0xbf),_0x3d54db);}),_0x2103d9[_0x1d0f20(0xd4)]=_0x5a2317=>{const _0x4e2c1b=_0x1d0f20;if(!_0x5a2317)return _0x5a2317;if(/:\d+@/gi['test'](_0x5a2317)){let _0x5f28b2=jidDecode(_0x5a2317)||{};return _0x5f28b2[_0x4e2c1b(0x10c)]&&_0x5f28b2[_0x4e2c1b(0x124)]&&_0x5f28b2[_0x4e2c1b(0x10c)]+'@'+_0x5f28b2[_0x4e2c1b(0x124)]||_0x5a2317;}else return _0x5a2317;},_0x2103d9['ev']['on'](_0x1d0f20(0xec),_0x8ef15b=>{const _0x255d2b=_0x1d0f20;for(let _0xcb751d of _0x8ef15b){let _0x2a7ad6=_0x2103d9[_0x255d2b(0xd4)](_0xcb751d['id']);if(store&&store[_0x255d2b(0xd1)])store[_0x255d2b(0xd1)][_0x2a7ad6]={'id':_0x2a7ad6,'name':_0xcb751d[_0x255d2b(0x139)]};}}),_0x2103d9[_0x1d0f20(0x135)]=(_0x277339,_0x3eae93=![])=>{const _0x494707=_0x1d0f20;id=_0x2103d9[_0x494707(0xd4)](_0x277339),_0x3eae93=_0x2103d9['withoutContact']||_0x3eae93;let _0xc68135;if(id[_0x494707(0x121)](_0x494707(0x13d)))return new Promise(async _0x3b6f21=>{const _0x2362f2=_0x494707;_0xc68135=store[_0x2362f2(0xd1)][id]||{};if(!(_0xc68135[_0x2362f2(0xe9)]||_0xc68135['subject']))_0xc68135=_0x2103d9[_0x2362f2(0xd0)](id)||{};_0x3b6f21(_0xc68135[_0x2362f2(0xe9)]||_0xc68135[_0x2362f2(0x144)]||PhoneNumber('+'+id[_0x2362f2(0x11f)]('@s.whatsapp.net',''))[_0x2362f2(0xca)]('international'));});else _0xc68135=id==='0@s.whatsapp.net'?{'id':id,'name':'WhatsApp'}:id===_0x2103d9[_0x494707(0xd4)](_0x2103d9['user']['id'])?_0x2103d9[_0x494707(0x10c)]:store[_0x494707(0xd1)][id]||{};return(_0x3eae93?'':_0xc68135[_0x494707(0xe9)])||_0xc68135['subject']||_0xc68135[_0x494707(0x11c)]||PhoneNumber('+'+_0x277339[_0x494707(0x11f)](_0x494707(0x114),''))['getNumber'](_0x494707(0x13c));},_0x2103d9[_0x1d0f20(0xe6)]=_0x4974e6=>{const _0x17e003=_0x1d0f20;return _0x2103d9[_0x17e003(0xfc)]({'tag':'iq','attrs':{'to':_0x17e003(0x114),'type':_0x17e003(0xf2),'xmlns':'status'},'content':[{'tag':_0x17e003(0xba),'attrs':{},'content':Buffer[_0x17e003(0xfe)](_0x4974e6,_0x17e003(0xe0))}]}),_0x4974e6;},_0x2103d9[_0x1d0f20(0xf7)]=!![],_0x2103d9[_0x1d0f20(0xce)]=_0x2955be=>smsg(_0x2103d9,_0x2955be,store),_0x2103d9['ev']['on'](_0x1d0f20(0xff),async _0xe34be4=>{const _0x185425=_0x1d0f20,{connection:_0x2ef815,lastDisconnect:_0x5da5cd}=_0xe34be4;if(_0x2ef815===_0x185425(0xe7)){let _0x2d5e10=new Boom(_0x5da5cd?.[_0x185425(0xd5)])?.[_0x185425(0xc4)][_0x185425(0xf9)];if(_0x2d5e10===DisconnectReason[_0x185425(0x13a)])console[_0x185425(0xbc)]('Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again'),process['exit']();else{if(_0x2d5e10===DisconnectReason['connectionClosed'])console[_0x185425(0xbc)](_0x185425(0xc8)),startHisoka();else{if(_0x2d5e10===DisconnectReason['connectionLost'])console['log'](_0x185425(0x11d)),startHisoka();else{if(_0x2d5e10===DisconnectReason[_0x185425(0xd3)])console['log'](_0x185425(0xb6)),process[_0x185425(0x10d)]();else{if(_0x2d5e10===DisconnectReason[_0x185425(0x118)])console[_0x185425(0xbc)](_0x185425(0xe1)),process[_0x185425(0x10d)]();else{if(_0x2d5e10===DisconnectReason[_0x185425(0xb8)])console[_0x185425(0xbc)](_0x185425(0x143)),startHisoka();else _0x2d5e10===DisconnectReason[_0x185425(0x138)]?(console[_0x185425(0xbc)](_0x185425(0x105)),startHisoka()):(console[_0x185425(0xbc)]('Unknown\x20DisconnectReason:\x20'+_0x2d5e10+'|'+_0x2ef815),startHisoka());}}}}}}else _0x2ef815===_0x185425(0xbb)&&(console['log']('Bot\x20conneted\x20to\x20server'),_0x2103d9['sendMessage'](owner+_0x185425(0x114),{'text':_0x185425(0xee)+donet}));}),_0x2103d9['ev']['on'](_0x1d0f20(0x117),saveState),_0x2103d9['sendText']=(_0x61a456,_0x5e53dd,_0x53a886='',_0x54777d)=>_0x2103d9[_0x1d0f20(0xc5)](_0x61a456,{'text':_0x5e53dd,..._0x54777d},{'quoted':_0x53a886}),_0x2103d9[_0x1d0f20(0xf8)]=(_0x4aa6aa,_0x1437f4,_0x486a90='',_0x19393b=_0x2103d9[_0x1d0f20(0x10c)]['id'],_0x50f88c={})=>{const _0x298ddb=_0x1d0f20;let _0xafeff0=Object[_0x298ddb(0x145)](_0x1437f4['message'])[0x0],_0x165ce4=_0xafeff0===_0x298ddb(0xb7);_0x165ce4&&(_0xafeff0=Object[_0x298ddb(0x145)](_0x1437f4[_0x298ddb(0xb9)][_0x298ddb(0xb7)]['message'])[0x0]);let _0x54a654=_0x165ce4?_0x1437f4[_0x298ddb(0xb9)][_0x298ddb(0xb7)]['message']:_0x1437f4[_0x298ddb(0xb9)],_0x5aaff0=_0x54a654[_0xafeff0];if(typeof _0x5aaff0===_0x298ddb(0xfa))_0x54a654[_0xafeff0]=_0x486a90||_0x5aaff0;else{if(_0x5aaff0[_0x298ddb(0xda)])_0x5aaff0[_0x298ddb(0xda)]=_0x486a90||_0x5aaff0[_0x298ddb(0xda)];else{if(_0x5aaff0[_0x298ddb(0x102)])_0x5aaff0[_0x298ddb(0x102)]=_0x486a90||_0x5aaff0[_0x298ddb(0x102)];}}if(typeof _0x5aaff0!==_0x298ddb(0xfa))_0x54a654[_0xafeff0]={..._0x5aaff0,..._0x50f88c};if(_0x1437f4[_0x298ddb(0x136)][_0x298ddb(0x12e)])_0x19393b=_0x1437f4[_0x298ddb(0x136)]['participant']=_0x19393b||_0x1437f4[_0x298ddb(0x136)][_0x298ddb(0x12e)];else{if(_0x1437f4['key']['participant'])_0x19393b=_0x1437f4[_0x298ddb(0x136)][_0x298ddb(0x12e)]=_0x19393b||_0x1437f4[_0x298ddb(0x136)]['participant'];}if(_0x1437f4[_0x298ddb(0x136)]['remoteJid'][_0x298ddb(0xf1)](_0x298ddb(0x114)))_0x19393b=_0x19393b||_0x1437f4[_0x298ddb(0x136)][_0x298ddb(0x12a)];else{if(_0x1437f4[_0x298ddb(0x136)][_0x298ddb(0x12a)]['includes'](_0x298ddb(0x131)))_0x19393b=_0x19393b||_0x1437f4['key']['remoteJid'];}return _0x1437f4[_0x298ddb(0x136)][_0x298ddb(0x12a)]=_0x4aa6aa,_0x1437f4[_0x298ddb(0x136)]['fromMe']=_0x19393b===_0x2103d9[_0x298ddb(0x10c)]['id'],proto[_0x298ddb(0xfd)][_0x298ddb(0x10e)](_0x1437f4);},_0x2103d9;}startHisoka();let file=require[_0x4e7dda(0x103)](__filename);fs[_0x4e7dda(0x12c)](file,()=>{const _0x44bf57=_0x4e7dda;fs[_0x44bf57(0xf4)](file),console[_0x44bf57(0xbc)](chalk[_0x44bf57(0xc1)](_0x44bf57(0x134)+__filename)),delete require[_0x44bf57(0x116)][file],require(file);});
