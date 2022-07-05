//keluar list title
//keluar list folder

function save()
var li=document.createElement("li");
var inputtitle=document.getElementById('title').value;
var inputfolder=document.getElementById('folder').value;
var t=document.createTextNode(inputtitle);
var t=document.createTextNode(inputfolder);
li.appendChild(t);

if(inputtitle==='')
{
    if(inputfolder==='')
    {
    //  save dekat id=foldermylist
    document.createElement("foldermylist").appendChild(li);
    }
    else
    {
    // else save dekat id=titlemylist
    document.createElement("titlemylist").appendChild(li);
    }
document.getElementById("title").value="";
document.getElementById("folder").value="";
}





//add checked symbol when clicking on list item
var list=document.querySelector('ul')
list.addEventListener('click',
function(ev)
{
   if(ev.target.tagName==='LI')
  {
            ev.target.classList.toggle('checked');
}
},false);

