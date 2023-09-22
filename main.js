const click=document.querySelector('.click');

const img=document.querySelector('.image');
const name=document.querySelector('.name');


click.addEventListener('click', async()=>{
  const res=await fetch('https://emoji-api.com/emojis?access_key=5b422c36edb92898dff8381590f0f6489b87cafb');

  let data = await res.json();

  const index=Math.floor(Math.random()*data.length)
  const emojiIndex=data[index];

  name.innerHTML=emojiIndex?.unicodeName;

  img.innerHTML=emojiIndex.character;

})