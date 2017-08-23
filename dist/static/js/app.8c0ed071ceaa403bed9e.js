webpackJsonp([1],[,,,,,,,,,function(e,a,n){"use strict";var t={YI_ZHANG:1,ER_ZHANG:2,SAN_ZHANG:3,SI_ZHANG:4,YI_SHUN:9,ER_SHUN:10,SAN_SHUN:11,HUO_JIAN:17,FEI_JI:18,SAN_DAI_YI:19,SI_DAI_ER:20};a.a=t},function(e,a,n){"use strict";n.d(a,"a",function(){return s});var t=n(9),r=n(17),s={fGetCardsPower:function(e){for(var a=this,n=0,t=a.fGetCardsNumObj(e),r=t.oCardsNum,s=4;s>0;s--){var i=r[s];if(i.length>0){n=Math.max.apply({},i);break}}return n},fSortHandCards:function(e){for(var a=this,n=a.fGetCardsValObj(e),t=n.aCardsVal.sort(a.SORTDESC),r=n.oCardsVal,s=[],i=0;i<t.length;i++){var o=t[i],d=r[o].sort(a.SORTDESC);s=s.concat(d)}return s},fSortOutCards:function(e){for(var a=this,n=a.fGetCardsNumObj(e),t=n.oCardsNum,r=n.oCardsVal,s=[],i=4;i>0;i--)for(var o=t[i].sort(a.SORTDESC),d=0;d<o.length;d++){var l=o[d],u=r[l].sort(a.SORTDESC);s=s.concat(u)}return s},oJudgeCardsFuncList:{fJudgeSingle:t.a.YI_ZHANG,fJudgeDouble:t.a.ER_ZHANG,fJudgeTriple:t.a.SAN_ZHANG,fJudgeBomb:t.a.SI_ZHANG,fJudgeSingleJunko:t.a.YI_SHUN,fJudgeDoubleJunko:t.a.ER_SHUN,fJudgeTripleJunko:t.a.SAN_SHUN,fJudgeRocket:t.a.HUO_JIAN,fJudgePlane:t.a.FEI_JI,fJudgeTriplePlus:t.a.SAN_DAI_YI,fJudgeFourPlusTwo:t.a.SI_DAI_ER},fGetCardsType:function(e){var a=this,n=this.oJudgeCardsFuncList,t=0,r=a.fGetCardsNumObj(e),s=r.oCardsNum,i=e.length;for(var o in n){var d=n[o];if(a[o](i,s)){t=d;break}}return t},fGetAutoJunkoCards:function(e,a){var n=[],s=a-1;if(e.length>4){for(var i=18;i>5;){var o=r.a.fCheckHintCards(t.a.SAN_SHUN,s,i,e);if(o.length>0){n=o[0];break}i-=3}if(0==n.length)for(var i=20;i>5;){var o=r.a.fCheckHintCards(t.a.ER_SHUN,s,i,e);if(o.length>0){n=o[0];break}i-=2}if(0==n.length)for(var i=20;i>4;){var o=r.a.fCheckHintCards(t.a.YI_SHUN,s,i,e);if(o.length>0){n=o[0];break}i-=1}}return n},fTouchCards:function(e,a,n,s){for(var i=this,o={},d=[],l=0;l<a.length;l++){var u=a[l],c=i.fGetCardVal(u);o[c]||(o[c]=[],d.push(c)),o[c].push(u)}var f=0,h=[],v=0,C=0;s&&(h=s.aCards||[],f=s.nPower||0,v=h.length||0,C=s.nType||0);var S=[],g=[],p={};if(1==e.length)if(0==n.length){var _=e[0],m=i.fGetCardVal(_),b=o[m].length;if(2==b&&0==h.length);else if(0!=h.length){var A=C;if(A!=t.a.ER_SHUN&&A!=t.a.SAN_SHUN||(A-=t.a.YI_SHUN-1),A>1&&A<5){if(b==A)for(var l=0;l<o[m].length;l++)S.push(o[m][l])}else if(A==t.a.SAN_DAI_YI){if(3==b)for(var l=0;l<o[m].length;l++)S.push(o[m][l]);if(2==b&&5==v)for(var l=0;l<o[m].length;l++)S.push(o[m][l])}}}else{for(var l=0;l<n.length;l++){var u=n[l],c=i.fGetCardVal(u);p[c]||(p[c]=[],g.push(c)),p[c].push(u)}var _=e[0],m=i.fGetCardVal(_),b=o[m].length,A=C;if(1==g.length&&1==n.length&&_!=n[0]&&m==g[0]&&b>2){var P=n[0]>_?n[0]:_,O=P==n[0]?_:n[0];if(P==Math.max.apply({},o[m])&&O==Math.min.apply({},o[m]))for(var l=0;l<o[m].length;l++){var y=o[m][l];S.push(y)}}var T=[t.a.FEI_JI,t.a.SAN_DAI_YI,t.a.SI_DAI_ER];if(T.indexOf(+A)<0&&1==g.length&&n.length<3&&m!=g[0]){for(var B=m>g[0]?m:g[0],k=B==m?g[0]:m,x=[],l=k;l<=B;l++)if(o[l]&&0!=o[l].length)for(var G=0;G<o[l].length;G++)x.push(o[l][G]);var N=[];if(0!=h.length){var A=C;if(A==t.a.YI_SHUN||A==t.a.ER_SHUN||A==t.a.SAN_SHUN){var H=f;N=r.a.fCheckHintCards(A,H,v,x),N=N.length>0?N[0]:[]}}else N=i.fGetAutoJunkoCards(x,B);if(N.length>0)for(var l=0;l<N.length;l++){var y=N[l];S.push(y)}}if((4==h.length||5==h.length)&&A==t.a.SAN_DAI_YI)if(3==b&&n.length<3)for(var l=0;l<o[m].length;l++)S.push(o[m][l]);else if(2==b&&5==v&&3==n.length){S=n.concat();for(var l=0;l<o[m].length;l++)S.push(o[m][l])}}else if(e.length>4){for(var L=i.fSortHandCards(e),w=L[0],R=L[L.length-1],B=i.fGetCardVal(w),k=i.fGetCardVal(R),x=[],l=0;l<e.length;l++)x.push(e[l]);var N=[];if(0!=h.length){var A=C;if(A==t.a.YI_SHUN||A==t.a.ER_SHUN||A==t.a.SAN_SHUN){var H=f;N=r.a.fCheckHintCards(A,H,v,x),N=N.length>0?N[0]:[]}}else{var T=[t.a.FEI_JI,t.a.SAN_DAI_YI,t.a.SI_DAI_ER],I=i.fGetCardsType(x);T.indexOf(+I)<0&&(N=i.fGetAutoJunkoCards(x,B))}N.length>0&&(S=N)}var E=S.length,M=n.length,J=e.length;if(0==E){for(var F=!0,l=0;l<J;l++){var U=e[l];if(n.indexOf(U)<0){F=!1;break}}for(var l=0;l<J;l++){var U=e[l],Y=n.indexOf(U);Y>-1?F&&J<=M&&n.splice(Y,1):n.push(U)}return n}for(var D=!0,l=0;l<E;l++){var W=S[l];if(n.indexOf(W)<0){D=!1;break}}return M==E&&D&&(S=[]),S},fGetCardsNumObj:function(e){for(var a=this,n=a.fGetCardsValObj(e),t=n.aCardsVal.sort(a.SORTDESC),r=n.oCardsVal,e=e||[],s={4:[],3:[],2:[],1:[]},i=0;i<t.length;i++){var o=t[i];s[r[o].length].push(o)}var n={oCardsVal:r,aCardsVal:t,oCardsNum:s};return n},fGetCardVal:function(e){var a=e%13==0?13:e%13;return e>=53&&(a=e-31),1===a&&(a=14),2===a&&(a=19),a},fGetCardsValObj:function(e){for(var a=this,n={},t=[],e=e||[],r=0;r<e.length;r++){var s=e[r],i=a.fGetCardVal(s);n[i]?n[i].push(s):(n[i]=[s],t.push(i))}return{oCardsVal:n,aCardsVal:t}},fJudgeSingle:function(e,a){return 1==e},fJudgeDouble:function(e,a){return 2==e&&1==a[2].length},fJudgeTriple:function(e,a){return 3==e&&1==a[3].length},fJudgeBomb:function(e,a){return 4==e&&1==a[4].length},fJudgeSingleJunko:function(e,a){var n=this;if(e<5||a[1].length<5||a[1].length!=e)return!1;for(var t=a[1].sort(n.SORTASC),r=1;r<t.length;r++){if(t[r]-t[r-1]!=1)return!1}return!0},fJudgeDoubleJunko:function(e,a){var n=this;if(e<6||a[2].length<3||2*a[2].length!=e)return!1;for(var t=a[2].sort(n.SORTASC),r=1;r<t.length;r++){if(t[r]-t[r-1]!=1)return!1}return!0},fJudgeTripleJunko:function(e,a){var n=this;if(e<6||a[3].length<2||3*a[3].length!=e)return!1;for(var t=a[3].sort(n.SORTASC),r=1;r<t.length;r++){if(t[r]-t[r-1]!=1)return!1}return!0},fJudgeRocket:function(e,a){return!(2!=e||2!=a[1].length||a[1].indexOf(22)<0||a[1].indexOf(23)<0)},fJudgePlane:function(e,a){var n=this,t=!0,r=!1;if(e<8||a[3].length<2)return!1;for(var s=(a[3].length,a[3].sort(n.SORTASC)),i=[],o=0;o<s.length;o++){var d=s[o];i=[],i.push(d);for(var l=o+1,u=l;u<s.length;u++){var c=s[u];if(c-s[u-1]!=1)break;i.push(c)}if(i.length>=2){t=!0;var f=e-3*i.length;if(f!=i.length&&f!=2*i.length||(r=!0),t&&r)break}}return t&&r},fJudgeTriplePlus:function(e,a){var n=!1;if(e<4||e>5||1!=a[3].length)return!1;var t=a[2].length,r=a[1].length;return 1==t&&5==e&&(n=!0),1==r&&4==e&&(n=!0),n},fJudgeFourPlusTwo:function(e,a){return 1==a[4].length&&(6==e||8==e)},SORTASC:function(e,a){return e-a},SORTDESC:function(e,a){return a-e}}},,,,,,,function(e,a,n){"use strict";n.d(a,"a",function(){return o});var t=n(64),r=n.n(t),s=n(9),i=n(10),o={aHelpList:[],nCurIdx:0,nMaxIdx:0,fGetAvailCards:function(e,a,n,t){if(this.nCurIdx=0,this.aHelpList=[],a==s.a.HUO_JIAN)this.aHelpList=[],this.nMaxIdx=0;else if(0==a)this.aHelpList=this.fGetFreeCards(e);else{if(this.aHelpList=this.fCheckHintCards(a,n,t,e),a!=s.a.SI_ZHANG){var r=this.fCheckHintCards(s.a.SI_ZHANG,0,4,e);r.length>0&&(this.aHelpList=this.aHelpList.concat(r))}var i=this.fCheckHintCards(s.a.HUO_JIAN,0,2,e);i.length>0&&(this.aHelpList=this.aHelpList.concat(i))}return this.nMaxIdx=this.aHelpList.length,this.aHelpList},fGetHintCards:function(){var e=this;if(0==e.aHelpList.length)return[];var a=e.aHelpList[e.nCurIdx];return e.nCurIdx++,e.nCurIdx=e.nCurIdx==e.nMaxIdx?0:e.nCurIdx,a},fGetFreeCards:function(e){var a=this;this.aHelpList=[],this.nMaxIdx=0,a.nCurIdx=0;for(var e=e||[],n={},t=[],r={1:[],2:[],3:[],4:[]},s=0;s<e.length;s++){var o=e[s],d=a.fGetCardVal(o);!n[d]&&(n[d]=[]),n[d].push(o),t.indexOf(d)<0&&t.push(d)}for(var s=0;s<t.length;s++){var d=t[s],l=n[d];r[l.length].push(d)}for(var u=r[1].sort(i.a.SORTASC),c=[],s=0;s<u.length;s++){var f=u[s];if(f<10){var h=n[f];c.push(h)}}var v=i.a.fGetAutoJunkoCards(e,1);if(v.length>0&&(c.length>0&&v.indexOf(c[0][0])?c.unshift(v):c.push(v)),0==c.length){t=t.sort(i.a.SORTASC);for(var s=0;s<t.length;s++){var f=t[s],l=n[f];if(!(4==l.length&&e.length>4))if(4==l.length&&4==e.length)c.push(l);else if(3==l.length){var C=r[2].sort(i.a.SORTASC),S=r[1].sort(i.a.SORTASC),g=0;if(C.length>0&&S.length>0?g=Math.min(C[0],S[0]):C.length>0&&0==S.length?g=C[0]:0==C.length&&S.length>0&&(22!=S[0]&&e.length>4||22==S[0]&&4==e.length)&&(g=S[0]),0==g)c.push(l);else{var p=n[g].concat();l=l.concat(p),c.push(l)}}else c.push(l)}}return 2==e.length&&e.indexOf(53)>-1&&e.indexOf(54)>-1&&(c=[],c.push([54,53])),this.aHelpList=c,this.nMaxIdx=this.aHelpList.length,c},fCheckHintCards:function(e,a,n,t){var o=this,t=t||[];"object"==(void 0===t?"undefined":r()(t))&&t.length||(t=[]);for(var a=a||0,d={},l=[],u={1:[],2:[],3:[],4:[]},c=0;c<t.length;c++){var f=t[c],h=o.fGetCardVal(f);!d[h]&&(d[h]=[]),d[h].push(f),l.indexOf(h)<0&&l.push(h)}for(var c=0;c<l.length;c++){var h=l[c];u[d[h].length].push(h)}l=l.sort(i.a.SORTASC);var v={1:"fGetOneTypeCards",2:"fGetOneTypeCards",3:"fGetOneTypeCards",4:"fGetOneTypeCards",9:"fGetJunkoCards",10:"fGetJunkoCards",11:"fGetJunkoCards",17:"fGetRocketCards",18:"fGetPlaneCards",19:"fGetThreePlusCards",20:"fGetFourPlusCards"},C=[s.a.YI_ZHANG,s.a.ER_ZHANG,s.a.SAN_ZHANG,s.a.SI_ZHANG],S=[s.a.HUO_JIAN,s.a.FEI_JI,s.a.SAN_DAI_YI,s.a.SI_DAI_ER],g=[s.a.YI_SHUN,s.a.ER_SHUN,s.a.SAN_SHUN],p=[];if(C.indexOf(+e)>-1){var _=v[e];p=this[_](d,l,u,a,e)}if(g.indexOf(+e)>-1){var m=g.indexOf(+e)+1;p=this.fGetJunkoCards(d,l,u,a,m,n)}if(S.indexOf(+e)>-1){var _=v[e];p=this[_](d,l,u,a,t,n)}return p},fGetCardVal:function(e){var a=e,n=a%13==0?13:a%13;return a>=53&&(n=a-31),1===n&&(n=14),2===n&&(n=19),n},fGetOneTypeCards:function(e,a,n,t,r){var t=t,s=n[r].sort(i.a.SORTASC),a=a||[],o=this.fGetPerfectCards(s,t);return 0==o.length&&r<3&&(o=this.fGetGoodCards(a,e,t,r)),this.fGetSolCards(o,e,r)},fGetJunkoCards:function(e,a,n,t,r,s){t=t||0,a=a||[];for(var o=[],d=0;d<a.length;d++){var l=[],u=+a[d],c=e[u],f=c.length,h=s/r;if(u>t&&u<15&&f>=r){for(var v=0;v<h;v++){var C=u-v,S=e[C];if(!S||!S.length||S.length<r)break;var g=S.sort(i.a.SORTASC),p=g.slice(0,r);l=l.concat(p)}l.length==s&&o.push(l)}}return o},fGetRocketCards:function(e,a){var n=[];return a.indexOf(22)>-1&&a.indexOf(23)>-1&&n.push([54,53]),n},fGetPlaneCards:function(e,a,n,t,r,s){var i=[],s=s,o=s%5==0?2:1,d=s/(3+o),l=this.fGetJunkoCards(e,a,n,t,3,3*d),u=[];if(l.length>0)for(var c=0;c<l.length;c++){var f=l[c];i=[];var h=this.fGetRestCards(r,f);if(1==o){var v=this.fGetRandSingleCard(n,h,d);v.length*o&&(i=v)}if(2==o){var v=this.fGetRandDoubleCards(h,d);v.length==d*o&&(i=v)}i.length==o*d&&(f=f.concat(i),u.push(f))}return u},fGetThreePlusCards:function(e,a,n,t,r,s){var i=this.fGetOneTypeCards(e,a,n,t,3),o=[],s=s,d=s%5==0?2:1,l=[];if(i.length>0)for(var u=0;u<i.length;u++){var c=i[u];o=[];var f=this.fGetRestCards(r,c);if(1==d){var h=this.fGetRandSingleCard(n,f,1);1==h.length&&(o=h)}if(2==d){var h=this.fGetRandDoubleCards(f,1);2==h.length&&(o=h)}o.length==d&&(c=c.concat(o),l.push(c))}return l},fGetFourPlusCards:function(e,a,n,t,r,s){var i=this.fGetOneTypeCards(e,a,n,t,4),o=[],d=[];if(i.length>0)for(var l=0;l<i.length;l++){var u=i[l];o=[];var c=this.fGetRestCards(r,u),f=this.fGetRandSingleCard(n,c,2);2==f.length&&(o=f),2==o.length&&(u=u.concat(o),d.push(u))}return d},fGetRestCards:function(e,a){for(var n=[],a=a||[],t=0;t<e.length;t++){var r=e[t];(a.indexOf(r)<0||a.indexOf(+r)<0)&&n.push(r)}return n},fGetRandSingleCard:function(e,a,n){if((e[1]||e[1]||[]).length>=n)for(var t=this.fCheckHintCards(s.a.YI_ZHANG,0,1,a),r=[],i=0;i<n;i++)t[i]&&(r=r.concat(t[i]));else{var o=this.fCheckHintCards(s.a.ER_ZHANG,0,2,a);r=o.length>0?2==n?o[0]:[o[0][0]]:[]}return r},fGetRandDoubleCards:function(e,a){for(var n=this.fCheckHintCards(s.a.ER_ZHANG,0,2,e),t=[],r=0;r<a;r++)n[r]&&(t=t.concat(n[r]));return t},fGetPerfectCards:function(e,a){a=a||0,e=e||[];var n=[];if(e.length>0)for(var t=e.sort(i.a.SORTASC),r=0;r<t.length;r++){var s=t[r];s>a&&!(t.indexOf(22)>-1&&t.indexOf(23)>-1&&s>19)&&n.push(s)}return n},fGetGoodCards:function(e,a,n,t){var n=n;e=e||[],a=a||{};var r=[];e=e.sort(i.a.SORTASC);for(var s=0;s<e.length;s++){var o=e[s],d=a[o];o>n&&d.length>t&&d.length<4&&r.push(o)}return r},fGetSolCards:function(e,a,n){for(var t=[],n=n||1,r=0;r<e.length;r++){var s=e[r],o=a[s].sort(i.a.SORTASC),d=o.slice(0,n);t.push(d)}return t}}},,,,,,,,,,,,,,,function(e,a,n){var t=n(0)(n(51),n(110),null,null,null);e.exports=t.exports},,function(e,a,n){"use strict";function t(){clearTimeout(w),w=null,T=!1,B=[0,0],k=1,x=1,G=1,N=1,H=1,L=0,R.bStartGame=!0,R.nSelfSeat=0,R.nAgaSeat=1,R.nBankerSeat=-1,R.nSelfPower=0,R.bAvailOutCards=!1,R.aSelfSelectCards=[],R.nSelfSelectCasrdsType=0,R.nSelfSelectCasrdsPower=0,R.aSelfCards=[],R.aAgaCards=[],R.aMult=[1,1,1,1,1],R.nMing=0,R.nSpread=0,R.nBaseScore=10,R.sBaseCardsType="",R.aBaseCards=[],R.oCallLandlord={nSeat:-1,nStep:0,bPower:!1},R.oLastOut={nSeat:-1,aCards:[],nPower:0,nType:0},R.oResult={sWinner:"",sPlayerType:""};var e=l(y);R.aSelfCards=g.a.fSortHandCards(e.aSelfCards),R.aAgaCards=g.a.fSortHandCards(e.aAgaCards),R.aBaseCards=e.aBaseCards,R.sBaseCardsType=e.sBaseCardsType,R.nBaseMult=e.nBaseMult,R.nMing=e.nMing,R.aMult=[k,x,G,N,H],w=setTimeout(function(){o({nSeat:L,nPower:_,nTime:30})},P)}function r(e){var a=e.nSeat,n=e.bPower;if(R.oCallLandlord={nSeat:a,nStep:0,bPower:n},T)return R.nBankerSeat=n?a:L,void o({nSeat:R.nBankerSeat,nPower:b,nTime:30});o({nSeat:a==R.nAgaSeat?R.nSelfSeat:R.nAgaSeat,nPower:n?m:_,nTime:30}),T=!n}function s(e){var a=e.nSeat,n=e.bPower;if(R.nSpread=n?R.nSpread+1:R.nSpread,R.oCallLandlord={nSeat:a,nStep:1,bPower:n},n&&(x*=2,R.aMult=[k,x,G,N,H]),T)R.nBankerSeat=n?a:a==R.nSelfSeat?R.nAgaSeat:R.nSelfSeat;else if(T||a!=L){if(!T&&a!=L)if(n){B[a]++;var t=a==R.nSelfSeat?R.nAgaSeat:R.nSelfSeat;o({nSeat:t,nPower:m,nTime:30})}else{var t=a==R.nSelfSeat?R.nAgaSeat:R.nSelfSeat;R.nBankerSeat=t}}else if(n)if(2==++B[a])R.nBankerSeat=a;else{var t=a==R.nSelfSeat?R.nAgaSeat:R.nSelfSeat;o({nSeat:t,nPower:m,nTime:30})}else{var t=a==R.nSelfSeat?R.nAgaSeat:R.nSelfSeat;R.nBankerSeat=t}-1!=R.nBankerSeat&&(R.nBankerSeat==R.nAgaSeat&&(R.aAgaCards=g.a.fSortHandCards(R.aAgaCards.concat(R.aBaseCards))),R.nBankerSeat==R.nSelfSeat&&(R.aSelfCards=g.a.fSortHandCards(R.aSelfCards.concat(R.aBaseCards))),console.log("====显示底牌===="),console.log(C()(R.aBaseCards)),o({nSeat:R.nBankerSeat,nPower:b,nTime:30}))}function i(e){e.aCards=g.a.fSortOutCards(e.aCards);var a=e.nSeat,n=e.aCards.concat(),t=(n.length,g.a.fGetCardsPower(n)),r=g.a.fGetCardsType(n);R.oLastOut={nSeat:a,aCards:e.aCards,nPower:t,nType:r};for(var s=a==R.nSelfSeat?R.aSelfCards:R.aAgaCards;0!=n.length;){var i=n[0],d=s.indexOf(i);d>-1&&s.splice(d,1),n.shift()}if(r!=S.a.SI_ZHANG&&r!=S.a.HUO_JIAN||(N*=2,R.aMult=[k,x,G,N,H]),h())return R.bStartGame=!1,void(R.nSelfPower=0);o({nSeat:a==R.nSelfSeat?R.nAgaSeat:R.nSelfSeat,nPower:b,nTime:30})}function o(e){var a=e.nSeat,n=e.nPower;if(a==R.nSelfSeat)return void(R.nSelfPower=n);if(R.nSelfPower=0,n==b){var t=(R.oLastOut.nSeat,a==R.nSelfSeat?R.aSelfCards:R.aAgaCards),o=R.oLastOut.nPower,d=R.oLastOut.nType||0,l=R.oLastOut.aCards.length,u={nSeat:a,aCards:[],nPower:0,nType:0},c=[];if(0==d){var f=p.a.fGetAvailCards(t,d,o,l);if(f.length>0)c=f[0];else{c=[t[t.length-1]]}}else{var f=p.a.fGetAvailCards(t,d,o,l);f.length>0&&(c=f[0])}var h=g.a.fGetCardsPower(c),v=g.a.fGetCardsType(c);u.aCards=c,u.nPower=h,u.nType=v,w=setTimeout(function(){i(u)},A)}else if(n==_){var C=Math.random()>.01;w=setTimeout(function(){r({nSeat:a,bPower:C})},P)}else if(n==m){var C=Math.random()>.01;w=setTimeout(function(){s({nSeat:a,bPower:C})},P)}}function d(){return.5-Math.random()}function l(e){var a=[],n=[],t=[];e=e.concat();var r=e.sort(d),s=[],i=Math.floor(34*Math.random());L=i>=17?R.nAgaSeat:R.nSelfSeat,s=r[i],a=r.splice(0,17),n=r.splice(0,17),t=e.splice(0,3);var o=u(t);return{aSelfCards:a,aAgaCards:n,aBaseCards:t,sBaseCardsType:o.sBaseCardsType,nBaseMult:o.nBaseMult,nMing:s}}function u(e){for(var a=1,n="普通",t={},r=!1,s=!1,i=!1,o=!1,d=e.sort(g.a.SORTASC),l=[],u=0;u<d.length;u++){var c=e[u],f=g.a.fGetCardVal(c);t[f]=t[f]?t[f]+1:1,2==u&&3==t[f]?s=!0:2==u&&2==t[19]&&(r=!0),l.push(f),2==u&&l[0]+1==l[1]&&l[1]+1==l[2]&&(i=!0,d[0]+1==d[1]&&d[1]+1==d[2]&&(o=!0))}return e.indexOf(53)>-1&&e.indexOf(54)>-1?(a=4,n="双王"):e.indexOf(53)+e.indexOf(54)>=-1?(a=2,n="单王"):r?(a=2,n="对2"):s?(a=3,n="三条"):i?(a=3,n="顺子"):o&&(a=3,n="同花顺"),{nBaseMult:a,sBaseCardsType:n}}function c(e){var a=g.a.fGetCardVal(e);return 23==a&&(a="BJ"),22==a&&(a="SJ"),14===a&&(a="A"),19==a&&(a=2),13==a&&(a="K"),12==a&&(a="Q"),11==a&&(a="J"),a}function f(e){return Math.floor((e-1)/13)}function h(){var e=R.nBankerSeat==R.nSelfSeat?0:R.nSpread,a=R.nBankerSeat==R.nAgaSeat?0:R.nSpread,n=R.nBaseScore;if(R.aSelfCards.length<=e){var t=R.nBankerSeat==R.nSelfSeat?17:20,r=R.aAgaCards.length==t;r&&(H*=2,R.aMult=[k,x,G,N,H]);var s=k*x*G*N*H,i=n*s,o=n*s;!0,o=-o;var d="我方",l=R.nBankerSeat==R.nSelfSeat?"地主":"农民";return R.oResult={sWinner:d,sWinnerType:l},!0}if(R.aAgaCards.length<=a){!1;var u=R.nBankerSeat==R.nSelfSeat?20:17,r=R.aSelfCards.length==u;r&&(H*=2);var s=k*x*G*N*H,i=n*s,o=n*s;i=-i;var d="对方",l=R.nBankerSeat==R.nAgaSeat?"地主":"农民";return R.oResult={sWinner:d,sWinnerType:l},!0}return!1}n.d(a,"c",function(){return E}),n.d(a,"a",function(){return R}),n.d(a,"b",function(){return O});for(var v=n(60),C=n.n(v),S=n(9),g=n(10),p=n(17),_=1,m=2,b=3,A=2e3,P=1e3,O={POWER_NONE:0,POWER_CALL_BANKER:_,POWER_ROB_BANKER:m,POWER_PLAY_CARD:b},y=[],T=!1,B=[0,0],k=1,x=1,G=1,N=1,H=1,L=0,w=null,R={bStartGame:!1,nSelfSeat:0,nAgaSeat:1,nBankerSeat:-1,nSelfPower:0,bAvailOutCards:!1,aSelfSelectCards:[],nSelfSelectCasrdsType:0,nSelfSelectCasrdsPower:0,aSelfAvailCards:[],aSelfCards:[],aAgaCards:[],aMult:[1,1,1,1,1],nMing:0,nSpread:0,nBaseScore:10,sBaseCardsType:"",aBaseCards:[],oCallLandlord:{nSeat:-1,nStep:0,bPower:!1},oLastOut:{nSeat:-1,aCards:[],nPower:0,nType:0},oResult:{sWinner:"",sPlayerType:""}},I=1;I<55;I++)I%13!=3&&I%13!=4&&y.push(I);var E={};E.startGame=t,E.getCardVal=c,E.getCardType=f,E.handleCallBanker=r,E.handleRobBanker=s,E.handlePlayCards=i},,,,,,,,,,function(e,a,n){"use strict";var t=n(33),r=n(115),s=n(105),i=n.n(s);t.a.use(r.a),a.a=new r.a({routes:[{path:"/",name:"GameScene",component:i.a}]})},function(e,a,n){function t(e){n(98)}var r=n(0)(n(46),n(107),t,null,null);e.exports=r.exports},function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"app"}},function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(32),r=n.n(t);a.default={name:"agacardsLayer",components:{card:r.a},props:["aCards","aOutCards","nCallLandlord","bNoOut"],data:function(){return{}},filters:{ftCallLandlord:function(e){return["","叫地主","不叫","抢地主","不抢"][e]}},methods:{}}},function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(32),r=n.n(t);a.default={name:"basecardsLayer",components:{card:r.a},props:["aCards","nBaseScore","nMult","sBaseCardsType","sBanker","nSpread"],data:function(){return{}},filters:{},methods:{}}},function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(102),r=n.n(t);a.default={name:"btnLayer",components:{btn:r.a},props:["nBtnGroupType","bEnabledPlayCards"],data:function(){return{}},watch:{bEnabledPlayCards:function(e){}},filters:{},computed:{},methods:{handleBtnCallLandlord:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$emit("onBtnCallLandlord",e)},handleBtnRobLandlord:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$emit("onBtnRobLandlord",e)},handleBtnTips:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$emit("onBtnTips")},handleBtnPlayCards:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$emit("onBtnPlayCards",e)}}}},function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"button",props:["nType"],data:function(){return{}},filters:{},computed:{sBtnClass:function(){return["handcard","outcard"][this.nType]}},methods:{}}},function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(34);a.default={name:"card",props:["nCard","nSizeType","bSelected","bPicked"],data:function(){return{}},directives:{},filters:{ftCardType:function(e){return["♦","♣","♠","♥",""][t.c.getCardType(e)]},ftCardVal:function(e){return t.c.getCardVal(e)}},watch:{},computed:{sCardClass:function(){return{handcard:0==this.nSizeType,outcard:1==this.nSizeType,"move-up":this.bSelected,picking:this.bPicked}}},methods:{fCheckCardColor:function(e){var a=t.c.getCardType(e),n={color:"#000000"};return 0!=a&&3!=a&&54!=e||(n.color="#9c2023"),n}},mounted:function(){}}},function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"resultLayer",components:{},props:["sWinner","sWinnerType"],data:function(){return{}},filters:{},methods:{}}},function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(32),r=n.n(t),s=n(55),i=n(58),o=n(57),d=n(56),l=n(10);a.default={name:"selfcardsLayer",components:{card:r.a},directives:{releaseoutside:s.a,touch_start:i.a,touch_move:o.a,touch_end:d.a},props:["aCards","aOutCards","nCallLandlord","bNoOut","oAgaOut","aSelfSelectCards"],data:function(){return{nStartIdx:-1,nEndIdx:-1,aPickedCards:[],aHandCards:[],aUpCards:[]}},filters:{ftCallLandlord:function(e){return["","叫地主","不叫","抢地主","不抢"][e]}},watch:{aCards:function(e){var a=[];e.forEach(function(e){var n={nCard:e,bPicked:!1,bSelected:!1};a.push(n)}),this.aHandCards=a},aSelfSelectCards:function(e){this.handleMoveUpCards(e)}},computed:{},methods:{handleSelect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if(console.info(e),-1!=e){var a=this.aHandCards[e];this.handlePickCardStart(a,e)}},handleMove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if(-1!=e){var a=this.aHandCards[e];this.handlePickCardMove(a,e)}},handleRelease:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if(-1==e)this.handleReleaseOutside();else{var a=this.aHandCards[e];this.handlePickCardEnd(a,e)}},handleReleaseOutside:function(e){-1!=this.nStartIdx&&this.aPickedCards.length>0?this.handlePickCardEnd():this.handleMoveDownAllCards()},handlePickCardStart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;if(-1==this.nStartIdx){var n=e.nCard||0;this.nStartIdx=a,this.nEndIdx=a,this.aPickedCards=[n],e.bPicked=!0}},handlePickCardMove:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;a.nCard;if(-1!=this.nStartIdx&&this.nEndIdx!=n){this.nEndIdx=n;var t=Math.min(this.nStartIdx,this.nEndIdx),r=Math.max(this.nStartIdx,this.nEndIdx);this.aPickedCards=[],this.aHandCards.forEach(function(a,n){a.bPicked=n>=t&&n<=r,a.bPicked&&e.aPickedCards.push(a.nCard)})}},handlePickCardEnd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(-1!=this.nStartIdx){var a=e.nCard||0;-1==this.aPickedCards.indexOf(a)&&0!=a&&this.aPickedCards.push(a),this.aHandCards.forEach(function(e,a){e.bPicked=!1}),this.nStartIdx=-1;var n=l.a.fTouchCards(this.aPickedCards,this.aCards,this.aUpCards,this.oAgaOut);this.$emit("onChangeSelectCards",n)}},handleMoveUpCards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.aHandCards.forEach(function(a,n){var t=a.nCard||0;a.bSelected=e.indexOf(t)>-1}),this.aUpCards=e},handleMoveDownAllCards:function(){this.aHandCards.forEach(function(e,a){e.bSelected=!1}),this.aUpCards=[],this.$emit("onChangeSelectCards",this.aUpCards)}}}},function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(97),r=(n.n(t),n(104)),s=n.n(r),i=n(99),o=n.n(i),d=n(100),l=n.n(d),u=n(103),c=n.n(u),f=n(101),h=n.n(f),v=n(34),C=n(17),S=n(10),g=n(9);a.default={components:{selfcardsLayer:s.a,agacardsLayer:o.a,basecardsLayer:l.a,resultLayer:c.a,btnLayer:h.a},name:"hello",data:function(){return v.a},watch:{oLastOut:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{nSeat:-1,aCards:[],nPower:0,nType:0},a=e.nSeat,n=e.aCards,t=e.nPower,r=e.nType;if(a==this.nAgaSeat){var s=n.length;this.aSelfAvailCards=C.a.fGetAvailCards(this.aSelfCards,r,t,s)}},nBankerSeat:function(e){this.nBankerSeat==this.nSelfSeat&&(this.aSelfAvailCards=C.a.fGetAvailCards(this.aSelfCards,0,0,0))},bAvailOutCards:function(e){console.info(e?"能出":"不能出")},aSelfSelectCards:function(e){var a=S.a.fGetCardsPower(e),n=S.a.fGetCardsType(e);this.nSelfSelectCasrdsType=n,this.nSelfSelectCasrdsPower=a;var t=e.length,r=this.oLastOut,s=r.aCards&&r.aCards.length?r.aCards.length:0,i=r.nType||0,o=r.nPower||0,d=!1;n==g.a.HUO_JIAN?d=!0:n==g.a.SI_ZHANG?i==g.a.SI_ZHANG&&a>o?d=!0:i!=g.a.SI_ZHANG&&i!=g.a.HUO_JIAN&&(d=!0):n==i&&a>o&&t==s?d=!0:0!=n&&0==s&&(d=!0),0==n&&(d=!1),this.bAvailOutCards=d}},computed:{aAgaOut:function(){var e=this.oLastOut||{nSeat:-1,aCards:[],nPower:0,nType:0};return(e.nSeat||0)==this.nAgaSeat?e.aCards:[]},aSelfOut:function(){var e=this.oLastOut||{nSeat:-1,aCards:[],nPower:0,nType:0},a=e.nSeat,n=a==this.nSelfSeat?e.aCards:[];return this.aSelfSelectCards=[],this.bAvailOutCards=!1,n},bSelfNoOut:function(){var e=this.oLastOut||{nSeat:-1,aCards:[],nPower:0,nType:0};return(e.nSeat||0)==this.nSelfSeat&&0==e.aCards.length},bAgaNoOut:function(){var e=this.oLastOut||{nSeat:-1,aCards:[],nPower:0,nType:0};return e.nSeat==this.nAgaSeat&&0==e.aCards.length},nAgaCallLandlord:function(){if(this.nBankerSeat>-1)return 0;var e=this.oCallLandlord||{nSeat:-1,nStep:0,bPower:!1},a=e.nSeat,n=e.nStep,t=e.bPower?1:2;return a==this.nAgaSeat?2*n+t:0},nSelfCallLandlord:function(){if(this.nBankerSeat>-1)return 0;var e=this.oCallLandlord||{nSeat:-1,nStep:0,bPower:!1},a=e.nSeat,n=e.nStep,t=e.bPower?1:2;return a==this.nSelfSeat?2*n+t:0},nMult:function(){for(var e=1,a=this.aMult.length||0,n=0;n<a;n++){e*=this.aMult[n]}return e},sWhoIsBanker:function(){return this.nBankerSeat==this.nSelfSeat?"我方":this.nBankerSeat==this.nAgaSeat?"对方":""},sBtnWords:function(){return this.bStartGame?"重新开始":"开始游戏"},nBtnGroupType:function(){var e=this.nSelfPower,a=this.oLastOut.nType;return e==v.b.POWER_PLAY_CARD?0==a?3:0==this.aSelfAvailCards.length?5:4:e},bEnabledPlayCards:function(){return this.bAvailOutCards&&this.nSelfPower==v.b.POWER_PLAY_CARD}},mounted:function(){},methods:{handleBtnStart:function(){v.c.startGame()},handleBtnCallLandlord:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];v.c.handleCallBanker({nSeat:this.nSelfSeat,bPower:e})},handleBtnRobLandlord:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];v.c.handleRobBanker({nSeat:this.nSelfSeat,bPower:e})},handleBtnTips:function(){var e=C.a.fGetHintCards();this.handleChangeSelectCards(e)},handleBtnPlayCards:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]||(this.aSelfSelectCards=[],this.nSelfSelectCasrdsPower=0,this.nSelfSelectCasrdsType=0);var e={nSeat:this.nSelfSeat,aCards:this.aSelfSelectCards,nPower:this.nSelfSelectCasrdsPower,nType:this.nSelfSelectCasrdsType};v.c.handlePlayCards(e)},handleChangeSelectCards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.aSelfSelectCards=e}}}},function(e,a,n){"use strict";var t="_vue_touchendouside_handler";a.a={bind:function(e,a,n){var r=function(r){if(!n.context||"game-scene"!=r.target.id)return!1;var s=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i);return(!s||"mouseup"!=r.type)&&(!(!s&&"touchend"==r.type)&&void(a.expression?n.context[e[t].methodName](r):e[t].bindingFn(r)))};e[t]={documentHandler:r,methodName:a.expression,bindingFn:a.value},setTimeout(function(){document.addEventListener("touchend",r,!1),document.addEventListener("mouseup",r,!1)},0)},update:function(e,a){e[t].methodName=a.expression,e[t].bindingFn=a.value},unbind:function(e){document.removeEventListener("touchend",e[t].documentHandler,!1),document.removeEventListener("mouseup",e[t].documentHandler,!1)}}},function(e,a,n){"use strict";var t=n(18),r=n.n(t),s="_vue_touchend_handler";a.a={bind:function(e,a,n){var t=function(t){var i=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i);if(i&&"mouseup"==t.type)return!1;if(!i&&"touchend"==t.type)return!1;var o=r()({clientX:0},"clientX",0);if(i){o={clientX:t.touches.length?t.touches[0].clientX:0,clientY:t.touches.length?t.touches[0].clientY:0}}else{o={clientX:t.clientX,clientY:t.clientY}}var d=document.elementFromPoint(o.clientX,o.clientY),l=-1;if(e.contains(d)&&e.childNodes.forEach(function(e,a){d.isEqualNode(e)&&(l=a)}),!n.context)return!1;a.expression?n.context[e[s].methodName](l):e[s].bindingFn(l)};e[s]={documentHandler:t,methodName:a.expression,bindingFn:a.value},setTimeout(function(){e.addEventListener("touchend",t,!1),e.addEventListener("mouseup",t,!1)},0)},update:function(e,a){e[s].methodName=a.expression,e[s].bindingFn=a.value},unbind:function(e){e.removeEventListener("touchend",e[s].documentHandler,!1),e.removeEventListener("mouseup",e[s].documentHandler,!1)}}},function(e,a,n){"use strict";var t=n(18),r=n.n(t),s="_vue_touchmove_handler";a.a={bind:function(e,a,n){var t=function(t){var i=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i);if(i&&"mousemove"==t.type)return!1;if(!i&&"touchmove"==t.type)return!1;var o=r()({clientX:0},"clientX",0);if(i){o={clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}}else{o={clientX:t.clientX,clientY:t.clientY}}var d=document.elementFromPoint(o.clientX,o.clientY),l=-1;if(e.contains(d)&&e.childNodes.forEach(function(e,a){d.isEqualNode(e)&&(l=a)}),!n.context)return!1;a.expression?n.context[e[s].methodName](l):e[s].bindingFn(l)};e[s]={documentHandler:t,methodName:a.expression,bindingFn:a.value},setTimeout(function(){e.addEventListener("touchmove",t,!1),e.addEventListener("mousemove",t,!1)},0)},update:function(e,a){e[s].methodName=a.expression,e[s].bindingFn=a.value},unbind:function(e){e.removeEventListener("touchmove",e[s].documentHandler,!1),e.removeEventListener("mousemove",e[s].documentHandler,!1)}}},function(e,a,n){"use strict";var t=n(18),r=n.n(t),s="_vue_touchstart_handler";a.a={bind:function(e,a,n){var t=function(t){var i=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i);if(i&&"mousedown"==t.type)return!1;if(!i&&"touchstart"==t.type)return!1;var o=r()({clientX:0},"clientX",0);if(i){o={clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}}else{o={clientX:t.clientX,clientY:t.clientY}}var d=document.elementFromPoint(o.clientX,o.clientY),l=-1;if(e.contains(d)&&e.childNodes.forEach(function(e,a){d.isEqualNode(e)&&(l=a)}),!n.context)return!1;a.expression?n.context[e[s].methodName](l):e[s].bindingFn(l)};e[s]={documentHandler:t,methodName:a.expression,bindingFn:a.value},setTimeout(function(){e.addEventListener("touchstart",t,!1),e.addEventListener("mousedown",t,!1)},0)},update:function(e,a){e[s].methodName=a.expression,e[s].bindingFn=a.value},unbind:function(e){e.removeEventListener("touchstart",e[s].documentHandler,!1),e.removeEventListener("mousedown",e[s].documentHandler,!1)}}},function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(33),r=n(45),s=n.n(r),i=n(44);t.a.config.productionTip=!1,new t.a({el:"#app",router:i.a,template:"<App/>",components:{App:s.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,a){},function(e,a){},function(e,a,n){var t=n(0)(n(47),n(112),null,null,null);e.exports=t.exports},function(e,a,n){var t=n(0)(n(48),n(114),null,null,null);e.exports=t.exports},function(e,a,n){var t=n(0)(n(49),n(113),null,null,null);e.exports=t.exports},function(e,a,n){var t=n(0)(n(50),n(108),null,null,null);e.exports=t.exports},function(e,a,n){var t=n(0)(n(52),n(109),null,null,null);e.exports=t.exports},function(e,a,n){var t=n(0)(n(53),n(106),null,null,null);e.exports=t.exports},function(e,a,n){var t=n(0)(n(54),n(111),null,null,null);e.exports=t.exports},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"handcards-container selfcards-container"},[n("div",{staticClass:"outcards"},[e.nCallLandlord?n("div",[e._v(e._s(e._f("ftCallLandlord")(e.nCallLandlord)))]):e._e(),e._v(" "),e.bNoOut?n("div",[e._v("不出")]):e._e(),e._v(" "),e._l(e.aOutCards,function(e,a){return n("card",{key:e,attrs:{nCard:e,nSizeType:1}})})],2),e._v(" "),n("div",{directives:[{name:"releaseoutside",rawName:"v-releaseoutside",value:e.handleReleaseOutside,expression:"handleReleaseOutside"},{name:"touch_start",rawName:"v-touch_start",value:e.handleSelect,expression:"handleSelect"},{name:"touch_move",rawName:"v-touch_move",value:e.handleMove,expression:"handleMove"},{name:"touch_end",rawName:"v-touch_end",value:e.handleRelease,expression:"handleRelease"}],staticClass:"handcards"},e._l(e.aHandCards,function(e,a){return n("card",{key:e.nCard,attrs:{nCard:e.nCard,nSizeType:0,bSelected:e.bSelected,bPicked:e.bPicked}})}))])},staticRenderFns:[]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement;return(e._self._c||a)("div",{staticClass:"button",class:e.sBtnClass},[e._t("default",[e._v("按钮")])],2)},staticRenderFns:[]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"result-container"},[n("div",{staticClass:"result-info"},[n("h2",[e._v("游戏结束")]),e._v(" "),n("div",{staticClass:"base-type"},[e._v("获胜方："+e._s(e.sWinner))]),e._v(" "),n("div",{staticClass:"base-score"},[e._v("身份："+e._s(e.sWinnerType))])])])},staticRenderFns:[]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{class:e.sCardClass,style:e.fCheckCardColor(e.nCard)},[n("div",{attrs:{calss:"cardval"}},[e._v(e._s(e._f("ftCardVal")(e.nCard)))]),e._v(" "),n("div",{staticClass:"cardtype"},[e._v(e._s(e._f("ftCardType")(e.nCard)))])])},staticRenderFns:[]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"game-scene",attrs:{id:"game-scene"}},[n("selfcardsLayer",{attrs:{aCards:e.aSelfCards,aOutCards:e.aSelfOut,oAgaOut:e.oLastOut,nCallLandlord:e.nSelfCallLandlord,bNoOut:e.bSelfNoOut,aSelfSelectCards:e.aSelfSelectCards},on:{onChangeSelectCards:e.handleChangeSelectCards}}),e._v(" "),n("basecardsLayer",{attrs:{aCards:e.aBaseCards,nBaseScore:e.nBaseScore,nMult:e.nMult,sBaseCardsType:e.sBaseCardsType,sBanker:e.sWhoIsBanker,nSpread:e.nSpread}}),e._v(" "),n("agacardsLayer",{attrs:{aCards:e.aAgaCards,aOutCards:e.aAgaOut,nCallLandlord:e.nAgaCallLandlord,bNoOut:e.bAgaNoOut}}),e._v(" "),n("resultLayer",{directives:[{name:"show",rawName:"v-show",value:""!=e.oResult.sWinner,expression:"oResult.sWinner != ''"}],attrs:{sWinner:e.oResult.sWinner,sWinnerType:e.oResult.sWinnerType}}),e._v(" "),n("btnLayer",{attrs:{nBtnGroupType:e.nBtnGroupType,bEnabledPlayCards:e.bEnabledPlayCards},on:{onBtnCallLandlord:e.handleBtnCallLandlord,onBtnRobLandlord:e.handleBtnRobLandlord,onBtnTips:e.handleBtnTips,onBtnPlayCards:e.handleBtnPlayCards}}),e._v(" "),n("div",{staticClass:"menu-container"},[n("div",{staticClass:"btn-start",on:{click:e.handleBtnStart}},[e._v(e._s(e.sBtnWords))])])],1)},staticRenderFns:[]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"handcards-container agacards-container"},[n("div",{staticClass:"handcards"},e._l(e.aCards,function(e,a){return n("card",{key:e,attrs:{nCard:e,nSizeType:0}})})),e._v(" "),n("div",{staticClass:"outcards"},[e.nCallLandlord?n("div",[e._v(e._s(e._f("ftCallLandlord")(e.nCallLandlord)))]):e._e(),e._v(" "),e.bNoOut?n("div",[e._v("不出")]):e._e(),e._v(" "),e._l(e.aOutCards,function(e,a){return n("card",{key:e,attrs:{nCard:e,nSizeType:1}})})],2)])},staticRenderFns:[]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"btn-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.nBtnGroupType,expression:"nBtnGroupType == 1"}],staticClass:"btn-group"},[n("btn",{staticClass:"green",nativeOn:{click:function(a){a.stopPropagation(),e.handleBtnCallLandlord(!0)}}},[e._v("叫地主")]),e._v(" "),n("btn",{staticClass:"red",nativeOn:{click:function(a){a.stopPropagation(),e.handleBtnCallLandlord(!1)}}},[e._v("不叫")])],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:2==e.nBtnGroupType,expression:"nBtnGroupType == 2"}],staticClass:"btn-group"},[n("btn",{staticClass:"green",nativeOn:{click:function(a){a.stopPropagation(),e.handleBtnRobLandlord(!0)}}},[e._v("抢地主")]),e._v(" "),n("btn",{staticClass:"red",nativeOn:{click:function(a){a.stopPropagation(),e.handleBtnRobLandlord(!1)}}},[e._v("不抢")])],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:3==e.nBtnGroupType,expression:"nBtnGroupType == 3"}],staticClass:"btn-group"},[n("btn",{staticClass:"blue",nativeOn:{click:function(a){a.stopPropagation(),e.handleBtnTips(a)}}},[e._v("提示")]),e._v(" "),n("btn",{class:{disabled:!e.bEnabledPlayCards,green:e.bEnabledPlayCards},nativeOn:{click:function(a){a.stopPropagation(),e.handleBtnPlayCards(!0)}}},[e._v("出牌")])],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:4==e.nBtnGroupType,expression:"nBtnGroupType == 4"}],staticClass:"btn-group"},[n("btn",{staticClass:"red",nativeOn:{click:function(a){a.stopPropagation(),e.handleBtnPlayCards(!1)}}},[e._v("不出")]),e._v(" "),n("btn",{staticClass:"blue",nativeOn:{click:function(a){a.stopPropagation(),e.handleBtnTips(a)}}},[e._v("提示")]),e._v(" "),n("btn",{class:{disabled:!e.bEnabledPlayCards,green:e.bEnabledPlayCards},nativeOn:{click:function(a){a.stopPropagation(),e.handleBtnPlayCards(!0)}}},[e._v("出牌")])],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:5==e.nBtnGroupType,expression:"nBtnGroupType == 5"}],staticClass:"btn-group"},[n("btn",{staticClass:"red",nativeOn:{click:function(a){a.stopPropagation(),e.handleBtnPlayCards(!1)}}},[e._v("要不起")])],1)])},staticRenderFns:[]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"handcards-container basecards-container"},[n("div",{staticClass:"basecards"},e._l(e.aCards,function(e,a){return n("card",{key:e,attrs:{nCard:e,nSizeType:0}})})),e._v(" "),n("div",{staticClass:"game-info"},[n("div",{staticClass:"base-type"},[e._v("底牌类型："+e._s(e.sBaseCardsType))]),e._v(" "),n("div",{staticClass:"base-score"},[e._v("底分："+e._s(e.nBaseScore))]),e._v(" "),n("div",{staticClass:"mult"},[e._v("倍数："+e._s(e.nMult))]),e._v(" "),n("div",{staticClass:"spread"},[e._v("让牌数："+e._s(e.nSpread))]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:""!=e.sBanker,expression:"sBanker != ''"}],staticClass:"banker"},[e._v("地主方："+e._s(e.sBanker))])])])},staticRenderFns:[]}}],[59]);
//# sourceMappingURL=app.8c0ed071ceaa403bed9e.js.map