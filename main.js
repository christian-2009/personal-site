const onClickNav = (id) => {
    const elementToScrollTo = document.getElementById(id)
    elementToScrollTo.scrollIntoView({ behavior: "smooth" });
}