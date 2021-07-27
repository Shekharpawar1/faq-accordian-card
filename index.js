const accordionHeading = document.querySelectorAll(".accordion-header")
const accordionBody = document.querySelectorAll(".accordion-body ")



// this add an for loop in each element of an array
accordionHeading.forEach((accordionHeading) => {
    accordionHeading.addEventListener("click", (e) => {

            

            accordionBody.forEach((acc) => {
                // this if check if the element contains active class if it contains then it remove the active class from the element
                if (e.target.nextElementSibling !== acc && acc.classList.contains('active') )  {
                    acc.classList.remove("active");
                    
                }
               
                
            });
            //accordionHeading nexelement sibling= accordion body
            const body = accordionHeading.nextElementSibling;
            body.classList.toggle("active");
            // this toggle between the active class on click
            accordionHeading.classList.toggle("active");
           
    })
});


     