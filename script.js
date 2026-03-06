
let pages=document.querySelectorAll('.page')
let progress=0

function showPage(id){
pages.forEach(p=>p.style.display='none')
document.getElementById(id).style.display='block'
}

showPage('home')

function completeSection(){
progress+=33
if(progress>100)progress=100

document.getElementById('progress').style.width=progress+'%'
document.getElementById('progressText').innerText=progress+'% selesai'
}

let questions=[
{
q:'Pancasila disahkan sebagai dasar negara pada?',
a:['1 Juni 1945','18 Agustus 1945','17 Agustus 1945'],
c:1
},
{
q:'Sila ke-3 Pancasila adalah?',
a:['Persatuan Indonesia','Keadilan Sosial','Ketuhanan Yang Maha Esa'],
c:0
},
{
q:'Hak warga negara diatur dalam?',
a:['UUD 1945','KUHP','Perpres'],
c:0
}
]

let current=0
let score=0

function loadQuestion(){
let q=questions[current]
let html='<h3>'+q.q+'</h3>'

q.a.forEach((opt,i)=>{
html+=`<button onclick="answer(${i})">${opt}</button><br><br>`
})

document.getElementById('quizBox').innerHTML=html
}

function answer(i){
if(i===questions[current].c){
score++
}
}

function nextQuestion(){
current++

if(current>=questions.length){
document.getElementById('quizBox').innerHTML='Quiz selesai'
document.getElementById('score').innerText='Skor: '+score
return
}

loadQuestion()
}

loadQuestion()

function generateCertificate(){
let nama=document.getElementById('nama').value
document.getElementById('namaSertifikat').innerText=nama
document.getElementById('certificate').style.display='block'
}
