"use strict";
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');


const temple="{userName}";
const answers =
[
"は聖人です。",
"は尊敬できる人です。",
"は善人です。",
"は普通の人です。",
"は荒んでいるようです。",
"の人間性はやや欠如しています。",
"の人間性はサイコパスのそれです。",
"の人間性は喪失しています。",
"は人間のふりをした怪物です。"
]

userNameInput.onkeydown=(event)=>{
    if(event.key==="Enter") assessmentButton.onclick();
}
/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザー名
 * @return {string} 診断結果
 */
function assessment(userName)
{
    let charCode =0;
    for(let i=0;i<userName.length;i++)
    {
        charCode+=userName.charCodeAt(i);
    }
    const index=charCode%answers.length;
    let result=temple+answers[index];
    result=result.replace(/\{userName\}/g,userName);
    return result;
}
function killChildren(element)
{
    while(element.firstChild)
        element.removeChild(resultDivided.firstChild);
}
assessmentButton.onclick=()=>{
    killChildren(resultDivided);
    

    const userName=userNameInput.value;
    if(userName.length===0)return;
    const header=document.createElement("h3");
    header.innerText="診断結果";
    resultDivided.appendChild(header);

    const p=document.createElement("p");
    const result=assessment(userName);
    p.innerText=result;
    resultDivided.appendChild(p);

    //<a href="https://twitter.com/intent/tweet?button_hashtag=人間性喪失チャレンジ&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-text="診断結果" data-show-count="false">Tweet #人間性喪失チャレンジ</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    killChildren(tweetDivided);
    const anchor=document.createElement("a");
    const href="https://twitter.com/intent/tweet?button_hashtag="
    +encodeURIComponent("人間性喪失チャレンジ")
    +"&ref_src=twsrc%5Etfw";

    
    
    anchor.setAttribute("href",href);
    anchor.className="twitter-hashtag-button";
    anchor.setAttribute("data-text",result);
    anchor.innerText="Tweet #人間性チャレジン";
    tweetDivided.appendChild(anchor);

    const script=document.createElement("script");
    script.setAttribute('src',"https://platform.twitter.com/widgets.js")
    tweetDivided.appendChild(script);

    
    

}