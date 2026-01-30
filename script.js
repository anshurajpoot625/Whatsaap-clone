<script>
let typingTimer;

document.getElementById("text").addEventListener("input",()=>{
  let t=document.getElementById("typing");
  t.style.display="block";
  clearTimeout(typingTimer);
  typingTimer=setTimeout(()=>{
    t.style.display="none";
  },1000);
});
</script>
<script>
let statusTxt=document.getElementById("status");

window.onload=()=>{
  statusTxt.innerText="online";
};

window.onbeforeunload=()=>{
  let time=new Date().toLocaleTimeString();
  statusTxt.innerText="last seen at "+time;
};
</script>
<script>
function toggleSearch(){
  let s=document.getElementById("topSearch");
  s.style.display = s.style.display=="none" ? "block" : "none";
}
</script>