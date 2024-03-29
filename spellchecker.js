const sample=document.querySelector('#insert')
window.addEventListener('keydown',(e)=>{
    sample.innerHTML=`
    <div>
       <table>
         <tr>
          <th>Key</th><br />
          <th>KeyCode</th><br />
          <th>Code</th>
         </tr> 
         <tr>
          <td>${e.key===' ' ? 'space' : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
         </tr> 
       </table>
    </div>
    `
})