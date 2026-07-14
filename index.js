const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const Name = document.getElementById("Name");
    const Friend = document.getElementById("Friend");

    const l1 = Name.value.length;
    const l2 = Friend.value.length;

    const result = Math.pow(l1+l2,3)%101;

    document.querySelector('h2').textContent = `Result: ${result}%`;
    form.reset();
})