// chon all pt co class la panal
const panal = document.querySelectorAll(".panel");
//duyet pt
panal.forEach((item)=>{
    item.addEventListener("click",()=>{
        //xao class active
        removeActive();
        // them class active cho pt dc chon
        item.classList.add("active");
    });
});
function removeActive() {
    panal.forEach((item)=>{
        //xoa class active
        item.classList.remove("active");
    });
}