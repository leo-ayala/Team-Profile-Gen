const generatecards = () => {
return`
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Employee ID# ${id}</li>
    <li class="list-group-item">Email: ${email}</li>
  </ul>
</div>
`

}