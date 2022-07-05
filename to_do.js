
//create a new list item when clicking on the "add" button
function addbutton()
{
    var li=document.createElement("li");
    var inputValue=document.getElementById("input").value;
    var t=document.createTextNode(inputValue);
    li.appendChild(t);

    if(inputValue==='')
    {
        alert("you must write something!");
    }
    else
    {
        document.getElementById('todo-list-item').appendChild(li);
    }
    document.getElementById("input").value="";

    var span=document.createElement("SPAN");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i=0; i<close.length; i++)
    {
        close[i].onclick=function()
        {
            var div=this.parentElement;
            div.style.display="none";
        }
    }
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


//untuk button save
function save()
{
var inputtitle=document.getElementById('title');

if(inputtitle==='')
{
alert("saved to mylist!");
}
else
{
  alert("insert title");
}
}

//untuk button delete whole item
function trash()
{
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}
//untuk button move to
//choose folder name
//bila click keluar list id=foldermylist
function moveto()
{
    var x=document.getElementById('foldermylist');
    var txt="";
    var i;
    for(i=0; i<x.length; i++)
    {
      txt=txt+""+x.options[i].text;
    }
    document.getElementById('foldermylist').innerHTML=txt;
}






